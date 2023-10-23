function init() { 
    for (const element of document.getElementsByClassName('xds-profpic')) {
        element.style.backgroundImage = "url(https://cdn1.edsby.com/cp1/1cbc951ed64ab1a8c8a3a30d74abb49aef59)"
    }
}

setInterval(function() {init()}, 100);


