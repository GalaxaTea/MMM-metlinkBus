const NodeHelper = require("node_helper");

module.exports = NodeHelper.create({
  start: function () {
    console.log("metlinkBus node_helper started");
  },

  socketNotificationReceived: function (notification, payload) {
    if (notification === "GET_BUS_TIMES") {
      this.fetchBusTimes(payload);
    }
  },

  fetchBusTimes: async function (payload) {
    const url = "https://api.opendata.metlink.org.nz/v1/stop-predictions?stop_id=" + payload.stopId + "&limit=3";

    try {
      const response = await fetch(url, {
        headers: {
          accept: "application/json",
          "x-api-key": payload.apiKey
        }
      });

      const data = await response.json();

      const departures = data.departures.map(function (dep) {
        return {
          route: dep.service_id,
          destination: dep.destination.name,
          aimed: dep.departure.aimed,
          expected: dep.departure.expected
        };
      });

      this.sendSocketNotification("BUS_TIMES_RESULT", { departures: departures });
    } catch (error) {
      console.log("metlinkBus error:", error.message);
    }
  }
});
