window.addEventListener("load", function(event){
    var template = document.getElementById("article-template")
    if (template) {
        var cloned = template.cloneNode(true)
        var articles = document.getElementById("articles")
        
        for(var i = 1; i < 5; i++){
            cloned = template.cloneNode(true)
            cloned.removeAttribute("id")
            var h2 = cloned.getElementsByTagName("h2")[0]
            console.log(h2.textContent)
            h2.innerHTML = h2.textContent + ' ' + i
            articles.appendChild(cloned)
        }
    }
})

