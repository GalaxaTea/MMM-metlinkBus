/*
*   ===metlinkBus Module===
*   GOAL: Use an api to pull the bus timings for specified bus and display them within
*         the magic mirror system.
*/
Module.register("MMM-metlinkBus", {
  // Default configs
  defaults: {
    stopId: "6000", // Wellington bus interchange
    apiKey: "",
    displayedStops: "5",
    showTimeUntil: true,
    showClockTime: true
  },

  start: function () {
    this.departures = [];
    this.getData();
    this.scheduleUpdate();

  },

  getData: function () {
    this.sendSocketNotification("GET_BUS_TIMES", {
      stopId: this.config.stopId,
      apiKey: this.config.apiKey,
      displayedStops: this.config.displayedStops
    });
  },

  formatClockTime: function (isoString) {
    const departureTime = new Date(isoString);
    return departureTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  },

  scheduleUpdate: function () {
    setInterval(() => {
      console.log("Refreshing Bus times . . .");
      this.getData();
    }, 60 * 1000); // 60 seconds
  },

  socketNotificationReceived: function (notification, payload) {
    if (notification === "BUS_TIMES_RESULT") {
      this.departures = payload.departures;
      this.updateDom();
    }
  },

  getStyles: function () {
    return ["MMM-metlinkBus.css"];
  },

  getDom: function () {
    const wrapper = document.createElement("div");

    if (this.departures.length === 0) {
      wrapper.innerHTML = "Loading bus times...";
      return wrapper;
    }

    const table = document.createElement("table");
    table.className = "metlinkBus-table";

    this.departures.forEach((dep) => {
      const row = document.createElement("tr");
      row.className = "metlinkBus-row";
      const timestamp = dep.expected || dep.aimed;

      const cells = [];
      cells.push("<td class='metlinkBus-dot-cell'><span class='metlinkBus-dot'></span></td>");
      cells.push("<td class='metlinkBus-route'>" + dep.route + "</td>");
      cells.push("<td class='metlinkBus-destination'>" + dep.destination + "</td>");

      if (this.config.showTimeUntil) {
        cells.push("<td class='metlinkBus-time'>" + this.formatTime(timestamp) + "</td>");
      }

      if (this.config.showClockTime) {
        cells.push("<td class='metlinkBus-clock dimmed'>" + this.formatClockTime(timestamp) + "</td>");
      }

      row.innerHTML = cells.join("");
      table.appendChild(row);
    });

    wrapper.appendChild(table);
    return wrapper;
  },

  formatTime: function (isoString) {
    const departureTime = new Date(isoString);
    const now = new Date();

    const diffMs = departureTime - now; // milliseconds until departure
    const diffMinutes = Math.round(diffMs / 60000); // 60000 ms = 1 minute

    if (diffMinutes <= 0) {
      return "Due";
    }
    return diffMinutes + " min";
  }
});
