angular.module('kdarcel.vlc-player', [])
    .constant('VERSION', 'v1.1.2')
    .run(function ($rootScope, VERSION) {
        $rootScope.version = VERSION
    })
    .filter('range', function() {
        return function(input, total) {
            total = parseInt(total);
            for (var i = 0; i < total; i++)
                input.push(i);
            return input;
        };
    })
    .filter('time2String', function() {
        return function duration(duration) {
            if (!duration)
                return "";

            var seconds = parseInt((duration / 1000) % 60);
            var minutes = parseInt((duration / (1000 * 60)) % 60);
            var hours   = parseInt((duration / (1000 * 60 * 60)) % 24);

            var durationString = "";

            if (hours) durationString += ((hours < 10) ? "0" + hours : hours) + ":";
            durationString += ((minutes < 10) ? "0" + minutes : minutes) + ":";
            durationString += (seconds < 10) ? "0" + seconds : seconds;

            return durationString;
        };
    })
    .factory("poollingFactory", function ($timeout) {
        var timeIntervalInSec = 1;

        function callFnOnInterval(fn, timeInterval) {
            var promise = $timeout(fn, 1000 * timeIntervalInSec);

            return promise.then(function(){
                callFnOnInterval(fn, timeInterval);
            });
        };

        return {
            callFnOnInterval: callFnOnInterval
        };
    })
    .directive('vlcplayer', function (poollingFactory) {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'VLCPlayer.tpl.html',
            link: function (scope, element, attributes) {
                var setupVlcPlayer = function(vlcData) {
                    if (vlcData.url && vlcData.filename) {
                        scope.vlc = document.getElementById("vlc");
                        if (scope.vlc)
                        {
                            if (scope.vlc.playlist.items.count > 0)
                                scope.vlc.playlist.items.clear();

                            var options = [":vout-filter=deinterlace", ":deinterlace-mode=linear"];
                            var id = scope.vlc.playlist.add(vlcData.url, vlcData.filename, options);

                            if (vlcData.autoplay == 'true')
                                scope.vlc.playlist.playItem(id);

                            scope.vlc.version = scope.vlc.versionInfo();
                            scope.vlc.toolbarWidth = {"width": '640'};
                            scope.vlc.toolbarClass = 'toolbar-vlc';
                            scope.vlc.fullscreenClass = 'vlc-window';
                        }
                    }
                }

                scope.$watch(function () {
                    if (scope.vlc) {
                        // if the file is playing
                        if (vlc.input.state == 3) {
                            if (scope.videoDuration == null)
                                scope.videoDuration = scope.vlc.input.length;
                            scope.vlc.openning = false;
                            scope.vlc.buffer = false;
                        }

                        // if there is an error
                        if (vlc.input.state == 7 && scope.vlc.error == null)
                            scope.vlc.error = true;

                        // player is openning or is paused or is buffering or is stopping or is ended
                        if (vlc.input.state == 4 || vlc.input.state == 5 || vlc.input.state == 6) {
                            if (vlc.input.state == 2)
                                scope.vlc.buffer = true;
                            if (vlc.input.state == 1)
                                scope.vlc.openning = true;
                            scope.vlc.toolbar = true;
                        }
                    }

                    return {
                        'url': attributes.vlcUrl,
                        'filename': attributes.vlcFilename,
                        'autoplay': attributes.vlcAutoplay
                    };
                }, setupVlcPlayer, true);

                scope.vlcKeyEvent = function(event) {
                    if (event.keyCode == 32) // Keypress 'space'
                        scope.vlc.playlist.togglePause();
                }

                scope.vlcToolbarActive = function(isHover) {
                    scope.vlc.toolbar = isHover;
                }

                scope.vlcTogglePause = function() {
                    scope.vlc.playlist.togglePause();
                }

                scope.vlcToggleMute = function() {
                    scope.vlc.audio.toggleMute();
                }

                scope.vlcSwitchAudioTrack = function(trackNumber) {
                    scope.vlc.audio.track = trackNumber;
                }

                scope.vlcSwitchSubtitleTrack = function(trackNumber) {
                    scope.vlc.subtitle.track = trackNumber
                }

                scope.changeTime = function(event) {
                    var outside = document.getElementById('player-progress');
                    var inside = document.getElementById('progress');
                    var pct = Math.floor((event.offsetX / outside.offsetWidth) * 100);
                    vlc.input.time = (scope.videoDuration * pct) / 100;
                }

                $(document).on('webkitfullscreenchange mozfullscreenchange fullscreenchange', function(e){
                    var pos = scope.vlc.input.position;
                    scope.vlc.playlist.stop();

                  if ((!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement)) {
                        scope.vlc.embedFullscreen = { 'width': '640', 'height': '360'};
                        scope.vlc.toolbarWidth = {'width': '640'};
                        scope.vlc.toolbarClass = 'toolbar-vlc';
                        scope.vlc.fullscreenClass = 'vlc-window';

                 } else {
                        scope.vlc.embedFullscreen = {'width': screen.width, 'height': screen.height};
                        scope.vlc.toolbarWidth = {'width': screen.width};
                        scope.vlc.toolbarClass = 'toolbar-vlc-fullscreen';
                        scope.vlc.fullscreenClass = 'vlc-fullscreen';
                 }
                    scope.vlc.playlist.play();
                    scope.vlc.input.position = pos;
                });

                scope.vlcToggleFullscreen = function() {

                    if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {

                        var elem = document.getElementById("player");
                        if (elem.requestFullscreen)
                          elem.requestFullscreen();
                        else if (elem.msRequestFullscreen)
                          elem.msRequestFullscreen();
                        else if (elem.mozRequestFullScreen)
                          elem.mozRequestFullScreen();
                        else if (elem.webkitRequestFullscreen)
                          elem.webkitRequestFullscreen();
                    } else {

                        if (document.cancelFullScreen) {
                          document.cancelFullScreen();
                        } else if (document.mozCancelFullScreen) {
                          document.mozCancelFullScreen();
                        } else if (document.webkitCancelFullScreen) {
                          document.webkitCancelFullScreen();
                        }
                    }
                }

                poollingFactory.callFnOnInterval(function () {
                    if (scope.vlc) {
                        scope.videoCurrentTime = scope.vlc.input.time;
                        scope.vlc.timer = ( scope.videoCurrentTime / scope.videoDuration ) * 100;
                    }
                });
            }
        }
    });
