// function getInfo() {
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

// getInfo();

// fetch("https://reqres.in/api/unknown", {
//   method: "GET",
// })
//   .then(function (response) {
//     if (response.status !== 200) {
//       throw response.status;
//     }
//     return response.json();
//   })
//   .then(function (responseData) {
//     let ul = document.createElement("ul");
//     let fragment = document.createDocumentFragment();
//     responseData.data.forEach(function (element) {
//       let li = document.createElement("li");
//       li.textContent = `Pantone value is ${element.pantone_value} and it's color is ${element.color}`;
//       fragment.appendChild(li);
//     });
//     ul.appendChild(fragment);
//     document.getElementById("block").appendChild(ul);
//   })
//   .catch(function (error) {
//     // if (error == 404) {
//     //   let p = document.createElement("p");
//     //   p.innerText = "Page not found";
//     //   p.style.color = "red";
//     //   document.getElementById("block").appendChild(p);
//     // } else if (error == 500) {
//     //   let p = document.createElement("p");
//     //   p.innerText = "Server error";
//     //   p.style.color = "red";
//     //   document.getElementById("block").appendChild(p);
//     // }
//     let p = document.createElement("p");
//     p.innerText = "Server error";
//     p.style.color = "red";
//     document.getElementById("block").appendChild(p);
//   });

let currentPage = 1;
let totalpages;

function getInfo(page) {
  function render() {
    let response = this.responseText;
    let responseData = JSON.parse(response);

    const fragment = document.createDocumentFragment();

    responseData.data.forEach((element) => {
      let li = document.createElement("li");

      let p = document.createElement("p");
      p.textContent = `${element.first_name} ${element.last_name}`;

      let image = document.createElement("img");
      image.src = element.avatar;
      li.appendChild(image);
      li.appendChild(p);
      fragment.appendChild(li);
    });

    document.getElementById("list").innerHTML = " ";
    document.getElementById("list").appendChild(fragment);
    totalpages = responseData.total_pages;
  }

  function renderError() {
    let p = document.createElement("p");
    p.innerText = "Server error";
    p.style.color = "red";
    document.getElementById("block").appendChild(p);
  }

  let request = new XMLHttpRequest();
  request.addEventListener("load", render);
  request.addEventListener("error", renderError);
  request.open("GET", "https://reqres.in/api/users?page=" + page);
  request.send();
}

document.getElementById("prev-btn").addEventListener("click", function () {
  if (currentPage == 1) {
    return;
  }
  currentPage -= 1;
  getInfo(currentPage);
});

document.getElementById("next-btn").addEventListener("click", function () {
  if (currentPage == totalpages) {
    return;
  }
  currentPage += 1;
  getInfo(currentPage);
});
getInfo(currentPage);
