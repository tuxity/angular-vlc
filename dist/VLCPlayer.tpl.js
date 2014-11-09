angular.module('kdarcel.vlc-player.tpl', ['VLCPlayer.tpl.html']);

angular.module("VLCPlayer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("VLCPlayer.tpl.html",
    "<div>\n" +
    "    <div class=\"video-container\">\n" +
    "        <div class=\"video\">\n" +
    "            <object classid=\"clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921\" events=\"true\" width=\"100%\" height=\"100%\">\n" +
    "                <embed pluginspage=\"http://www.videolan.org\"\n" +
    "                       type=\"application/x-vlc-plugin\"\n" +
    "                       version=\"VideoLAN.VLCPlugin.2\"\n" +
    "                       width=\"100%\"\n" +
    "                       height=\"100%\"\n" +
    "                       toolbar=\"false\"\n" +
    "                       branding=\"true\"\n" +
    "                       id=\"vlc\"\n" +
    "                ></embed>\n" +
    "            </object>\n" +
    "        </div>\n" +
    "        <div class=\"video-controls\">\n" +
    "            <div class=\"toolbar\">\n" +
    "                <button type=\"button\" class=\"btn btn-default pull-left\" ng-click=\"vlcTogglePause()\">\n" +
    "                    <span class=\"glyphicon\" ng-class=\"vlc.playlist.isPlaying ? 'glyphicon-pause' : 'glyphicon-play'\"></span>\n" +
    "                </button>\n" +
    "                <span>{{ vlc.input.time | date:'HH:mm:ss' }} / {{ vlc.input.length | date:'HH:mm:ss' }}</span>\n" +
    "                <div class=\"form-inline pull-right\">\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"vlcToggleMute()\">\n" +
    "                        <span class=\"glyphicon\" ng-class=\"vlc.audio.mute ? 'glyphicon-volume-off' : 'glyphicon-volume-up'\"></span>\n" +
    "                    </button>\n" +
    "                    <div class=\"btn-group\">\n" +
    "                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                            <span class=\"glyphicon glyphicon-sound-5-1\"></span>\n" +
    "                        </button>\n" +
    "                        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                            <li ng-repeat=\"n in [] | range:vlc.audio.count\">\n" +
    "                                <a href=\"\" ng-click=\"vlcSwitchAudioTrack(n)\">\n" +
    "                                    {{ vlc.audio.description(n) }}&nbsp;<span class=\"glyphicon glyphicon-ok\" ng-show=\"vlc.audio.track == n\"></span>\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <div class=\"btn-group\">\n" +
    "                        <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\">\n" +
    "                            <span class=\"glyphicon glyphicon-subtitles\"></span>\n" +
    "                        </button>\n" +
    "                        <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "                            <li ng-repeat=\"n in [] | range:vlc.subtitle.count\">\n" +
    "                                <a href=\"\" ng-click=\"vlcSwitchSubtitleTrack(n)\">\n" +
    "                                    {{ vlc.subtitle.description(n) }}&nbsp;<span class=\"glyphicon glyphicon-ok\" ng-show=\"vlc.subtitle.track == n\"></span>\n" +
    "                                </a>\n" +
    "                            </li>\n" +
    "                        </ul>\n" +
    "                    </div>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"vlcToggleFullscreen()\">\n" +
    "                        <span class=\"glyphicon glyphicon-resize-full\"></span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
