// ==UserScript==
// @name        FANDOM WEBP-to-original redirector
// @namespace   Violentmonkey Scripts
// @match       https://static.wikia.nocookie.net/*/images/*/*/*.*/revision/latest?cb=*
// @match       https://static.fandom.nocookie.net/*/images/*/*/*.*/revision/latest?cb=*
// @grant       none
// @version     1.0
// @author      -
// @description // @description   Allows one to automatically get redirected to a FANDOM-hosted WEBP image's original extension.
// ==/UserScript==

window.location.href = window.location.pathname.replace('/revision/latest', '') + "?format=original";