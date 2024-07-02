// ==UserScript==
// @name         Diccionario.
// @namespace    http://tampermonkey.net/
// @version      2024-05-18
// @description  try to take over the world!
// @author       DrFrankGL (CMV63)
// @match        */*
// @icon         https://st1.chatovod.com/widget/i/sm/1/geek.png
// @grant        none
// ==/UserScript==

document.addEventListener("mousedown",(e)=>{
    if(e.button==1&&location.href.includes("chatovod")){
        let word1 = prompt("Introduce tu concepto para extraer su definición.")
        location.replace("https://api.dictionaryapi.dev/api/v2/entries/en/"+word1)
    }
})
