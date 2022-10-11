// function getUserInfo() {
//     // წარმატებით გაგაზავნის შემთხვევაში
//     function renderPage() {
//         let responseData = JSON.parse(this.responseText);

//         let ul = document.createElement("ul");

//         responseData.data.forEach((element) => {
//             let li = document.createElement("li");
//             li.textContent = `${element.name} is discovered in ${element.year}`
//             ul.appendChild(li);
//         });
//         document.getElementById("block").appendChild(ul);
//     }

//     // წარუმატებლად გაგზავნის შემთხვევაში
//     function renderPageError() {
//         let p = document.createElement("p");
//         p.textContent = "Server Error";
//         p.style.color = "red";
//         document.getElementById("block").appendChild(p);
//     }

//     let request = new XMLHttpRequest();
//     request.addEventListener("load", renderPage);
//     request.addEventListener("error", renderPageError);
//     request.open("GET", "https://reqres.in/api/unknown");
//     request.send();
// }

// getUserInfo();

fetch("https://reqres.in/api/unknown", {
  method: "GET",
})
  .then(function (response) {
    if (response.status != 200) {
      throw response.status;
    }
    return response.json();
  })
  .then(function (responseData) {
    let ul = document.createElement("ul");
    responseData.data.forEach(function (element) {
      let li = document.createElement("li");
      li.textContent = `Pantone value is ${element.pantone_value} and it's color is ${element.color}`;
      ul.appendChild(li);
    });
    document.getElementById("block").appendChild(ul);
  })
  .catch(function () {
    let p = document.createElement("p");
    p.innerText = "Error";
    p.style.color = "red";
    document.getElementById("block").appendChild(p);
  });
