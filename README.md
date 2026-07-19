# metlinkBus

A small module for MagicMirror to show the bus times for a specified stop within the Wellington, New Zealand region using the metlink api

<img width="612" height="308" alt="image" src="https://github.com/user-attachments/assets/1b57ed3a-4971-431c-bbdc-05208b504a4f" />


#### Installation guide
Clone this repository into you magic mirror modules folder
```
cd MagicMirror/modules
git clone https://github.com/galaxatea/metlinkBus.git
```
**Configuration**
*Add this to modules in config/config.js*
```
{
  module: "metlinkBus",
  position: "top_right",
  config: {
    stopId: "DESIRED BUS STOP ID",
    apiKey: "YOUR_API_KEY",
  displayedStops: "",
  showTimeUntil: true,
  showClockTime: false,
},
```
*Configuration options*

| Option | Description | Default value |
|--------|-------------|---------------|
| stopId | ID number of the stop that will be tracked (Printed on stop sign or found on metlink webpage) | 6000
| apiKey | api key from metlink developer portal (free) | =/=
| displayedStops | Number of busses arriving to chosen stop | 5
| showTimeUntil | Choose to display minutes until arrival time (true / false) | true
| showClockTime | Choose to display 24hr clock time (true / false) | true

*AI use disclosure*
Claude was used for the css and minor assistance in bug fixing
