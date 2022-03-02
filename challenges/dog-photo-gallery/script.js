function changePhoto() {

  fetch("https://dog.ceo/api/breeds/image/random")

    .then(function (response) {

      return response.json();

    })

    .then(function (data) {

      let ul = document.querySelector("#dog-list");

      let li = document.createElement("li");

      li.style.listStyleType = "none";

      let img = document.createElement("img");




      img.src = data.message;




      li.append(img);

      ul.append(li);

    })

    .catch((err) => console.log(err));

}




let button = document.querySelector("button");

button.addEventListener("click", changePhoto);
