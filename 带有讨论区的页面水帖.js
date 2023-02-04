// ==UserScript==
// @name         Guru-blogforum-machine
// @version      0.0.2
// @description  Make your wikidot accouont colorful!
// @author       HelloOSMe
// @match        http://*.wikidot.com/*
// @match        https://*.wikidot.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $j("#np-text").val("s");
    WIKIDOT.modules.ForumNewPostFormModule.listeners.save(event)
})();
