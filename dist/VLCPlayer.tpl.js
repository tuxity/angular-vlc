angular.module('kdarcel.vlc-player', ['VLCPlayer.tpl.html']);

angular.module("VLCPlayer.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("VLCPlayer.tpl.html",
    "<div>\n" +
    "    <object classid=\"clsid:9BE31822-FDAD-461B-AD51-BE1D1C159921\" events=\"true\">\n" +
    "        <embed pluginspage=\"http://www.videolan.org\"\n" +
    "               type=\"application/x-vlc-plugin\"\n" +
    "               version=\"VideoLAN.VLCPlugin.2\"\n" +
    "               width=\"100%\"\n" +
    "               height=\"100%\"\n" +
    "               toolbar=\"false\"\n" +
    "               branding=\"true\"\n" +
    "               id=\"vlc\"\n" +
    "        ></embed>\n" +
    "    </object>\n" +
    "</div>\n" +
    "");
}]);
