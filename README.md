# metlinkBus

A [MagicMirror²](https://magicmirror.builders/) module that displays live bus departure times for a chosen stop, using the [Metlink Open Data API](https://opendata.metlink.org.nz/) (Wellington, New Zealand region).

<img width="612" height="308" alt="metlinkBus module showing upcoming bus departures" src="https://github.com/user-attachments/assets/1b57ed3a-4971-431c-bbdc-05208b504a4f" />

## Dependencies
- [Metlink Open Data API](https://opendata.metlink.org.nz/) — requires a free API key from the [Metlink developer portal](https://opendata.metlink.org.nz/). No paid tier or usage cost.

## Installation

```bash
cd ~/MagicMirror/modules
git clone https://github.com/galaxatea/MMM-metlinkBus.git
```

## Update

```bash
cd ~/MagicMirror/modules/MMM-metlinkBus
git pull
```

## Config

Add this to the `modules` array in `config/config.js`:

```js
{
  module: "metlinkBus",
  position: "top_right",
  config: {
    stopId: "6000",
    apiKey: "YOUR_API_KEY",
    displayedStops: "5",
    showTimeUntil: true,
    showClockTime: true
  }
},
```

### Configuration options

| Option | Description | Default |
|--------|-------------|---------|
| `stopId` | ID of the stop to track (printed on the physical stop sign, or found on the [Metlink website](https://www.metlink.org.nz/)) | `"6000"` (Wellington bus interchange) |
| `apiKey` | Your free API key from the Metlink developer portal | — (required) |
| `displayedStops` | Number of upcoming departures to display | `"5"` |
| `showTimeUntil` | Show minutes until arrival (`true` / `false`) | `true` |
| `showClockTime` | Show 24hr clock time (`true` / `false`) | `true` |

## Development status
Stable — working end-to-end and in daily use. Not actively seeking a co-maintainer, but bug reports and PRs are welcome via GitHub Issues.

## AI use disclosure
Claude was used for the CSS and minor assistance in bug fixing.
