// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const button = document.getElementById("submitSearch");

const input = document.getElementById("searchWord");

const divImage = document.getElementById("imageContainer");

const img = document.getElementById("img");

const feedbackP = document.createElement("p");

const apiKey = "api_key=9RR5XFe1V7ykNAWVfIDWJDghEkDeMIra";

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

button.addEventListener("click", showGif);

function showGif() {
  fetch(`https://api.giphy.com/v1/gifs/translate?${apiKey}&s=${input.value}`)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((object) => {
      console.log(object.data.images.original.url);
      img.src = object.data.images.original.url;
      input.value = ""
      feedbackP.textContent = ""
    })
    .catch((err) => {
      console.error(err);
      feedbackP.textContent = err;
      divImage.appendChild(feedbackP);
      img.src = ""
    });
}
