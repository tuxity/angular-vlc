angular-vlc
===========

An AngularJS directive to include VLC Web Player code with a more beautiful &amp; advanced interface


## Requirement

You must have VLC and the Web plugin installed on your computer, more informtions on [the website](http://www.videolan.org/)
For OS X users, you can find the plugin (actually in beta) here : https://www.dropbox.com/s/c0zubsrnmiklk51/VLC-webplugin-3.0.0-b4.dmg?dl=0


## Getting Started

Install the component via Bower

```shell
bower install angular-vlc
```

Add the CSS

```html
<link rel="stylesheet" href="components/angular-vlc/dist/VLCPlayer.min.css">
```


Add the JS

```html
<link rel="text/javascript" href="components/angular-vlc/dist/VLCPlayer.min.js">
```


And finally add the dependencies to your AngularJS project

```javascript
var myAppModule = angular.module('MyApp', ['kdarcel.vlc-player', 'kdarcel.vlc-player.ptl']);
```


Now you can call the directive in your code

```javascript
<vlcplayer vlc-url="" vlc-filename="" vlc-autoplay="true"></vlcplayer>
```
