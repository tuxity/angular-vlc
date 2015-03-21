angular-vlc
===========

An [AngularJS](https://angularjs.org/) directive to include [VLC](http://www.videolan.org/) Web Player code with a more beautiful &amp; advanced interface

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](http://opensource.org/licenses/MIT)
[![devDependency Status](https://david-dm.org/tuxity/angular-vlc/dev-status.svg)](https://david-dm.org/tuxity/angular-vlc#info=devDependencies)


# Screenshots

![Screenshot1](https://i.gyazo.com/6e0410a0d1fa2073a8f673fc6826e879.png "angular-vlc video player")


## Features

* Play/Pause the video
* View current time and video duration
* Change audio and subtitle track
* Mute/Unmute
* Toggle Fullscreen


## Requirement

You must have VLC and the Web plugin installed on your computer, more informtions on the [VLC website](http://www.videolan.org/).
For OS X users, you can find the plugin (actually in beta) [here](http://download.videolan.org/pub/videolan/vlc/2.2.0/macosx/VLC-webplugin-2.2.0.dmg).


## Getting Started

Install the component via [Bower](http://bower.io/)

```shell
bower install --save angular-vlc
```

Or simply download the files in the dist folder

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


## Bug report

### VLC

You may have some problems with the VLC Web Plugin. Feel free to create a new ticket on the [VLC Bugtracker](https://trac.videolan.org/vlc/), they are reactive and like this you can help to improve the plugin ! More reports it is, more stable will be the plugin !
You can also contribute on the projet, here the [git repository](https://git.videolan.org/?p=npapi-vlc.git;a=summary)


## License

angular-vlc is freely distributable under the terms of the [MIT license](http://opensource.org/licenses/MIT).
