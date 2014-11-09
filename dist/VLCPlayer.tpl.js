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
    "                    <select class=\"form-control\">\n" +
    "                        <option>Audio</option>\n" +
    "                        <option>Piste 1</option>\n" +
    "                        <option>Piste 2</option>\n" +
    "                    </select>\n" +
    "                    <select class=\"form-control\">\n" +
    "                        <option>Subtitles</option>\n" +
    "                        <option>Sub 1</option>\n" +
    "                        <option>Sub 2</option>\n" +
    "                    </select>\n" +
    "                    <button type=\"button\" class=\"btn btn-default\" ng-click=\"vlcToggleFullscreen()\">\n" +
    "                        <span class=\"glyphicon glyphicon-new-window\"></span>\n" +
    "                    </button>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
