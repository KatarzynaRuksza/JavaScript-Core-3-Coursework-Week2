fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    image.src = data.img;
  })
  .catch((error) => (contentDiv.innerHTML = `<p>${error}</p>`));

let contentDiv = document.querySelector("#content");
let image = document.createElement("img");

contentDiv.appendChild(image);
