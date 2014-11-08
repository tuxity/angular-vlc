angular.module('kdarcel.vlc-player', [])
    .directive('vlcplayer', function () {
        return {
            restrict: 'E',
            replace: true,
            template:
            '<div>' +
            '    <object classid="clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921" events="true">' +
            '        <embed pluginspage="http://www.videolan.org"' +
            '               type="application/x-vlc-plugin"' +
            '               version="VideoLAN.VLCPlugin.2"' +
            '               width="100%"' +
            '               height="100%"' +
            '               toolbar="false"' +
            '               branding="true"' +
            '               id="vlc"' +
            '        ></embed>' +
            '    </object>' +
            '</div>',
            link: function (scope, element, attributes) {
                var setupVlcPlayer = function(vlcData) {
                    if (vlcData.url && vlcData.filename) {
                        scope.vlc = document.getElementById("vlc");
                        if (scope.vlc)
                        {
                            var options = [":vout-filter=deinterlace", ":deinterlace-mode=linear"];
                            var id = scope.vlc.playlist.add(vlcData.url, vlcData.filename, options);
                            if (vlcData.autoplay == 'true')
                                scope.vlc.playlist.playItem(id);
                        }
                    }
                }

                scope.$watch(function () {
                    return {
                        'url': attributes.vlcUrl,
                        'filename': attributes.vlcFilename,
                        'autoplay': attributes.vlcAutoplay
                    };
                }, setupVlcPlayer, true);
            }
        }
    });
