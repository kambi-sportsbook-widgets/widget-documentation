<img src="https://glomo.se/static/media/Glomo_logo.08169324.svg" width="250"/>

<!-- toc -->

- [Installation](#installation)
  - [Option One](#option-one)
    - [Note about iframes](#note-about-iframes)
  - [Option Two](#option-two)
- [Links](#links)
  - [Player Specials](#player-specials)

<!-- tocstop -->

# Documentation

Widgets are self contained content that can render data entirely up to the operator and embedded into the sportsbook client. This is a powerful way to customise the content as well as the interface of the client to provide your users with a stimulating experience.

## Installation

Installation will be dependent upon how you as an operator of the Kambi Sportsbook platform intend to use the widget and how your sportsbook is configured.

### Option One

As an operator you use the default sportsbook client frontend environment. In this case the Glomo widget will be rendered in the sportsbook as an iframe.

The widget will be supplied in a `/dist/` directory that will contain:

* `index.html`
* `main.js`
* `mockSetupData.json` - used to mock the widget settings configuration file when running the widget standalone
* `package.json`
* `report.html` - contains a visualization of all the widget dependencies giving an information on the total size of the widget
* `asssets/` - a directory containing all assets such as icons, images

This folder should be hosted on a server by the operator unless prior hosting arrangement has been agreed with Glomo.

To instantiate the widget in the client you will need to update the `widget-settings.js` configuration.

Let's say we have our widget hosted at `https://awesomewidget.com/index.html` and we want to display it on the **landing page feed**.

Our configuration would be the following:

```javascript
window.widgetSettings = {
  widgets: [
    // ...other widgets
    {
      widgetId: 'Awesome Widget',
      widgetType: 'iframe',
      url: 'https://awesomewidget.com/index.html', // our url from above
      height: 0, // important as the widget will set its own height depending upon the content
    },
  ],
  landingPageFeed: [
    // ...other widgets
    {
      order: 1, // the priority position of the widget within the target
      widgetId: 'Awesome Widget', // references the widgetId from above
      args: {}, // arguments that can be passed to the widget, Glomo not possible arguments
      // that can be passed to the widget in the documentation of the particular widget
    },
  ],
}
```

Should there be a requirement at any point in time that you wish to **hide** the widget from the client. Rather than removing all the congfiguration setup above we can add it to an array of hidden widgets as such.

```javascript
window.widgetSettings = {
  // ...our widget settings config
  hidden: ['Awesome Widget'],
  reset: ['Awesome Widget'],
}
```

#### Note about iframes

When the widget is rendered within the client as an [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe) it brings with it a number of pros and cons that you should be aware of.

##### Pros

* A widget can be developed in isolation and implemented in the sportsbook with little configuration required.
* The iframe does not block the rendering of the page on initial load. This means the client will render all its content while the iframe is loading concurrently.
* The widget is easy to update and version.
* Testing is simple as we can run the widget standalone or embed it in other test environments quickly and simply.

##### Cons

* Performance is the biggest and most important downsides to the widgets. While the content for the iframe does load in parallel with the main page the the third party data of the iframe will block the `window.onload` event. This means that if there are many custom iframe widgets in a page the page load will become slower as only a few connections from client to server can be opened at any one time.
* Configuration and communication between the main client and the widget can be achieved through the `postMessage` JavaScript API but this adds a level of complexity for sharing data.

### Option Two

As an operator you have hidden the default Kamnbi client in favour of your own design and implementation. This requires a different integration as the widget will not be loaded as an iframe.

The widget is supplied as a `/dist-embedded/` directory that contains:

* `main.js`
* `mockSetupData.json` - used to mock the widget settings configuration file when running the widget standalone
* `package.json`
* `report.html` - contains a visualization of all the widget dependencies giving an information on the total size of the widget
* `asssets/` - a directory containing all assets such as icons, images

The main difference in the dist folder from _option one_ is the omission of the `index.html` as this is not required.

This folder should be hosted on a server by the operator unless prior hosting arrangement has been agreed with Glomo.

In order to initiate the widget we need to follow the steps below:

* Firstly we need to include the `main.js` file in the index.html of the page so that we can call a function.

  ```html
  <!-- other -->
  <link rel="stylesheet" href="**link-to-widget-css**.css"/>
  <script type="text/javascript" src="main.js"></script>
  <!-- other -->
  ```

* Once we have included the script we are able to to call a function on the window object.

  ```javascript
  /**
   * gmWidgets Function
   *
   * returns Object { removeWidget: function() {} }
   *
   */
  window.gmWidgets[WIDGET_NAME](
    container, // html element where the widget will be initialised
    wapi, // reference to the widget API
    clientConfig, // an object containing the clientConfig
    args // widget arguments object to be passed
  )
  ```

  The `WIDGET_NAME` is referenced as the `name` key in the package.json. So for example in our case for the "Awesome Widget":

  ```javascript
  {
     // ... other
     "name": "awesome-widget"
     // ... other
  }
  ```

  ```javascript
  var awesomeWidget = window.gmWidgets['awesome-widget'](
    container,
    wapi,
    clientConfig,
    args
  )
  ```

* The widget fills the entire width the `container` element supplied as the first parameter. Therefore the width of the container element should be set by whomever is implementing the widget. The height of the widget is dynamic and controlled by the widget and so the height of the container.

  ```html
  <!-- our widget container -->
  <div id="widgetContainer"></div>
  ```

  ```css
  #widgetContainer {
    height: auto;
    width: 350px;
  }
  ```

* There may come some point when the widget removes itself or you chose to remove the widget from the client. In order to remove the widget yourself:

  ```javascript
  var awesomeWidget = window.gmWidgets['awesome-widget'](
    container,
    wapi,
    clientConfig,
    // args
    {
      onWidgetRemoved: function() {
        console.log('widget removed')
      },
    }
  )

  awesomeWidget.removeWidget() // removes the widget then calls the onWidgetRemoved() method in the args
  ```

  If and when the widget removes itself the `onWidgetRemoved` method will be called.

## Links

### Player Specials


