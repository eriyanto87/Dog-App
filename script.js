let div = document.getElementById("results-img");
let button = document.getElementById("button");
let input = document.getElementById("input");

function getDogImage() {
    while (div.hasChildNodes()) {  
        div.removeChild(div.firstChild);
      }
    fetch("https://dog.ceo/api/breed/" + input.value + "/images/random")
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert(resonseJson));
}

function displayResults(responseJson) {
    console.log(responseJson);
    console.log(input.value);
    if (responseJson.code === 404) alert("HTTP: " + responseJson.code + " " + responseJson.message);
    let h2 = document.createElement("h2");
    h2.textContent = input.value[0].toUpperCase() + input.value.slice(1);
    div.appendChild(h2);
    let img = document.createElement("img");
    img.setAttribute("src", responseJson.message);
    div.appendChild(img);
}
