# player-specials


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

1. `widgetTrackingName` - string - tracking name for analytics purposes
1. `baseFilter` - string - url path to tournament
2. `criteriaList` - array of numbers - criteria ids to display
2. `title` - string - if blank the default title will be displayed
2. `subtitle` - string - if blank the default subtitle will be displayed
4. `iconUrl` - string - url poitning to a file that should be used as an icon
3. `flagBaseUrl` - string | boolean - url potinting to a directory containing flags of all competitors, set to empty string or false if no flags are to be displayed
5. `backgroundUrl` - string - url poitning to a file that should be used as a background, if blank the default background will be displayed
1. `maxEventsToShow` - number - number of events from the specified tournament to lookup
1. `maxBetsAtOnce` - number - how many baet offers should be displayed at once
1. `checkOffersEvery` - number - (in seconds) how often to check for changes in betoffers and event info

## Testing

If occurence of a _No events_ or _Not player special bet offers_ error prevents from testing the widget `baseFilter` argument should be changed to point to a different tournament for example: ```"baseFilter": "/football/champions_league"```

## Build Instructions

Please refer to the [core-library](https://github.com/kambi-sportsbook-widgets/widget-core-library)
