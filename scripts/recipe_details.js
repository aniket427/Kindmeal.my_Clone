
import { navbar, footer } from "../components/navbar.js"


const foot = document.getElementById('foot');
foot.innerHTML = footer();



let item = JSON.parse(localStorage.getItem("detail_item_view"))
console.log(item);
let container = document.querySelector("#container");

container.style.backgroundImage = `url(${item.coverimage})`

document.getElementById("user_name").innerText = `${item.user}`;

document.getElementById("followers").innerText = `  ${item.followers} Followers  `

document.getElementById("profile_image_link").src = item.userimage;

document.getElementById("rec_title").innerText = item.title;

document.getElementById("rec_img").src = item.recipeimage;

document.getElementById("time_req").innerText = item.time;

document.getElementById("serves").innerText = item.servings;

document.getElementById("votes").innerText = `${item.rating} Votes`;


document.getElementById("descript").innerText = item.description;

let ingred = document.getElementById("ingred");

ingred.innerHTML = "";

let ingred_arr = item.ingredients;

ingred_arr.forEach(element => {
    let div = document.createElement("div");
    div.innerText = element;

    ingred.append(div);

});


let direct = document.getElementById("direct");

direct.innerHTML = "";

let direct_arr = item.directions;

direct_arr.forEach(element => {
    let div = document.createElement("div");
    div.innerText = element;

    direct.append(div);

});

document.getElementById("more_photo").src = item.morephotos;

