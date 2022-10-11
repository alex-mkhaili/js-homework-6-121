function getUserInfo() {
    // წარმატებით გაგაზავნის შემთხვევაში
    function renderPage() {
        let responseData = JSON.parse(this.responseText);
        
        let ul = document.createElement("ul");

        responseData.data.forEach((element) => {
            let li = document.createElement("li");
            li.textContent = `${element.name} is discovered in ${element.year}`
            ul.appendChild(li);
        });
        document.getElementById("block").appendChild(ul);
    }


    // წარუმატებლად გაგზავნის შემთხვევაში
    function renderPageError() {
        let p = document.createElement("p");
        p.textContent = "Server Error";
        p.style.color = "red";
        document.getElementById("block").appendChild(p);
    }


    let request = new XMLHttpRequest();
    request.addEventListener("load", renderPage);
    request.addEventListener("error", renderPageError);
    request.open("GET", "https://reqres.in/api/unknown");
    request.send();
}

getUserInfo();