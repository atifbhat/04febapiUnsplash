let image = document.getElementById("image");
const API_KEY = "BQLZVZZpBXRKLe5xgBIjTyBmLoi9iUcbdpIteGpmQHA";

const API_SECRET = "WH7W31a6EANax7Ch9Mp7AzE4YH8dvnDtLeDgD0gmf44";
let input = document.getElementsByTagName("input")[0];
input.addEventListener("input", () => {
    image.innerHTML = "";
    fetch(`https://api.unsplash.com/search/photos/?client_id=${API_KEY}&query=${input.value}&per_page=30`)

    .then(function(res) {
        return res.json();
    })


    .then(function(res) {
        console.log(res);

        for (let i = 0; i < res.results.length; i = i + 1) {
            let single_result = res.results[i];
            console.log(single_result);
            let single_url = single_result.urls.regular;
            console.log(single_url);
            img_ref = document.createElement("img")
            img_ref.src = single_url
            image.appendChild(img_ref)

        }
    })


});