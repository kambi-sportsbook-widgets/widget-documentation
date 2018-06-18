# match timeline widget

![](./screenshot.png)

A widget showing a timeline of events as they happen during a live match. The widget shows the main live betOffers and a highlighted betOffer which changes depending on live events that take place in the game.

## Configuration

Arguments and default values:

```json
"args": {
   "widgetTrackingName": "wc2018-match-timeline",
    "filter": "/football/world_cup_2018",
    "iconUrl":
      "https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/icons/world_cup_2018.svg",
    "flagBaseUrl":
      "https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/icons/",
    "backgroundUrl":
      "https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/overview-bw-bg-desktop.jpg",
    "liveEventIds": null,
}
```

1.  `widgetTrackingName` {string} Sets widget tracking name automatically by kambi when passed as arg
2.  `filter` {string} Used to specify tournament in which the widget will look for live events. If no live data or bet offers are found the widget will remove itself
3.  `iconUrl` {string} url path to tournament icon asset
4.  `flagBaseUrl` {string} url path to flag icon assets
5.  `liveEventIds` {array} takes an array of eventIds {number} to specify a specific live event for the widget to render. If multiple eventIds are passed in the array, the widget will prioritise them in the order provided. If no live event data or bet offers are found for any of the provided eventIds, the widget will fallback to the tournament `filter`

## Live Behaviour

The widget polls live data including score, matchClock, running status and open status every 30 seconds. In between this, a timeout is run every second to mock the time second increments. Thus, there will be a maximum of 30 delay of events available via the API and reflection in the widget.

Events that are provided through the API are mapped to a corresponding betOffer. This correlation will be used to determine the Highlighted Bet displayed in the widget. If no event has occurred, the Highlighted Bet will default to the main bet offer.

Once a game is finished (no longer has the status `open: true`) the widget will try and access another live event using the `liveEventIds` array if provided, or using the `filter` as a fallback. If no live data or bet offers are found, the widget will remove itself.

### Build Instructions

Please refer to the [core-library](https://github.com/kambi-sportsbook-widgets/widget-core-library)
