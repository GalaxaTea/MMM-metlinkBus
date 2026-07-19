# metlinkBus

### A module for MagicMirror that displays information on bus time for a certains stop

*Requiriments:*
- MagicMirror
- Metlink api key

*Configs:*
- stopId = The id number of the stop that will be displayed
- apiKey = The api key that will be used to request bus times from Metlink
- displayedStops = Number of stops that will be displayed

**Add this to MagicMirror config**
``{
  module: "metlinkBus",
  position: "top_right",
  config: {
    stopId: "DESIRED BUS STOP ID",
    apiKey: "YOUR_API_KEY",
  displayedStops: "",
  showTimeUntil: true,
  showClockTime: false,
},``
