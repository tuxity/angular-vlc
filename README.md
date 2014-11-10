angular-vlc
===========

An AngularJS directive to include VLC Web Player code with a more beautiful &amp; advanced interface

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://opensource.org/licenses/MIT)
[![devDependency Status](https://david-dm.org/tuxity/angular-vlc/dev-status.svg)](https://david-dm.org/tuxity/angular-vlc#info=devDependencies)

## Requirement

You must have VLC and the Web plugin installed on your computer, more informtions on the [VLC website](http://www.videolan.org/)
For OS X users, you can find the plugin (actually in beta) here : https://www.dropbox.com/s/c0zubsrnmiklk51/VLC-webplugin-3.0.0-b4.dmg?dl=0


## Getting Started

Install the component via Bower

```shell
bower install --save angular-vlc
```

Add the CSS

```html
<link rel="stylesheet" href="components/angular-vlc/dist/VLCPlayer.min.css">
```


Load the JavaScript file

```html
<link rel="text/javascript" href="components/angular-vlc/dist/VLCPlayer.min.js">
```


And finally add the dependencies to your AngularJS project

```javascript
var myAppModule = angular.module('MyApp', ['kdarcel.vlc-player', 'kdarcel.vlc-player.tpl']);
```


Now you can call the directive in your code

```html
<vlcplayer vlc-url="" vlc-filename="" vlc-autoplay="true"></vlcplayer>
```


## License

angular-vlc is freely distributable under the terms of the [MIT license](http://opensource.org/licenses/MIT).
