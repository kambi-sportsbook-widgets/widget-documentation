# Player Specials

Shows the bet offers connected to player-related events occuring during matches of a specified tournament.

## Configuration

Arguments and their default values:

```json
"args": {
  "widgetTrackingName": "player-specials",
  "baseFilter": "/football/world_cup_2018",
  "criteriaList": [ 1001582442, 1002035662, 1002154384, 1001159667, 1001240968, 1002154385, 1001240969, 1002154386, 1001160026, 1001809659, 1002154388, 1001159997, 1001159730, 1001482031, 1001264082, 1001159803, 1001809665, 1002154387, 1002899077, 1001326634, 1001326635, 1001159641, 1001159938, 1001240965, 1002899070, 1001159641, 1001638881, 1002899071 ],
  "title": "",
  "subtitle": "",
  "iconUrl": "https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/icons/world_cup_2018.svg",
  "flagBaseUrl": "https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/icons/",
  "backgroundUrl": "",
  "maxEventsToShow": 10,
  "maxBetsAtOnce": 5,
  "checkOffersEvery": 30
}
```

| Key | Type | Default Value | Description |
| --- | --- | --- | --- |
| **`widgetTrackingName`** | _string_ | `"player-specials"` | tracking name to identify the widget for analytics purposes |
| **`baseFilter`** | _string_ | `"/football/world_cup_2018"` | url filter path to tournament |
| **`criteriaList`** | _array_ | `[ 1001582442`,<br> `1002035662`,<br> `1002154384`,<br> `1001159667`,<br> `1001240968`,<br> `1002154385`,<br> `1001240969`,<br> `1002154386`,<br> `1001160026`,<br> `1001809659`,<br> `1002154388`,<br> `1001159997`,<br> `1001159730`,<br> `1001482031`,<br> `1001264082`,<br> `1001159803`,<br> `1001809665`,<br> `1002154387`,<br> `1002899077`,<br> `1001326634`,<br> `1001326635`,<br> `1001159641`,<br> `1001159938`,<br> `1001240965`,<br> `1002899070`,<br> `1001159641`,<br> `1001638881`,<br> `1002899071 ]` | criteria ids to display |
| **`title`** | _string_ | `""` | if blank the default title `"World cup 2018"` will be displayed |
| **`subtitle`** | _string_ | `""` | if blank the default subtitle `"player specials"` will be displayed |
| **`iconUrl`** | _string_ |`"https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/icons/world_cup_2018.svg"` | absolute url to a directory containing a custom icon |
| **`flagBaseUrl`** | _string_ **or** _boolean_ | `"https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/icons/"` | absolute url pointing to a directory containing flags of all competitors, set to empty string or false if no flags are to be displayed |
| **`backgroundUrl`** | _string_ | `""` | absolute url pointing to a file that should be used as a background, if empty string then `"https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/overview-bw-bg-mobile.jpg"` the default background will be displayed |
| **`maxEventsToShow`** | _number_ | `10` | number of events from the specific tournament to lookup |
| **`maxBetsAtOnce`** | _number_ | `5` | how many bet offers should be displayed at once |
| **`checkOffersEvery`**   | _number_ | `30` | (in seconds) how often to check for changes in betoffers and event info **note** this will make network requests so short intervals should be used with caution for performance reasons |

## Testing

If occurence of a _No events_ or _Not player special bet offers_ error prevents from testing the widget `baseFilter` argument should be changed to point to a different tournament for example: `"baseFilter": "/football/champions_league"`

## Build Instructions

Please refer to the [core-library](https://github.com/kambi-sportsbook-widgets/widget-core-library)
