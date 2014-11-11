angular.module('kdarcel.vlc-player', [])
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
                        }
                    }
                }

                scope.$watch(function () {
                    // if the file is playing
                    if (scope.vlc && vlc.input.state == 3 && scope.videoDuration == null)
                        scope.videoDuration = scope.vlc.input.length;

                    return {
                        'url': attributes.vlcUrl,
                        'filename': attributes.vlcFilename,
                        'autoplay': attributes.vlcAutoplay
                    };
                }, setupVlcPlayer, true);

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

                scope.vlcToggleFullscreen = function() {
                    scope.vlc.video.toggleFullscreen();
                }

                poollingFactory.callFnOnInterval(function () {
                    if(scope.vlc)
                        scope.videoCurrentTime = scope.vlc.input.time;
                });
            }
        }
    });
