
import { navbar, footer } from "../components/navbar.js"

document.querySelector("#navbar").innerHTML=navbar();
document.querySelector("#footer").innerHTML=footer();



let button = document.querySelector("#create_R");

button.addEventListener("click",function(){
    
  let title = document.querySelector("#name").value;
  let category=document.querySelector("#p_selector").value;
  let scategory=document.querySelector("#s_selector").value;
  let description=document.querySelector("#description").value;
  let ingredients=document.querySelector("#ingredients").value;
  let directions=document.querySelector("#directions").value;
  let time=document.querySelector("#hour").value+" Min";
  let recipeimage=document.querySelector("#img_link").value;
  let video=document.querySelector("#vid_link").value;

  let recipedata = new myrecipe(title,category,scategory,description,ingredients,directions,time,recipeimage,video);
  let Arr_data =JSON.parse(localStorage.getItem("recipe_db")) || [];
  Arr_data.push(recipedata);
  localStorage.setItem("recipe_db",JSON.stringify(Arr_data));
//   console.log(recipedata)
})

function myrecipe(title,category,scategory,description,ingredients,directions,time,recipeimage,video){

      this.title=title;
      this.category=category;
      this.scategory=scategory;
      this.description=description;
      this.ingredients=ingredients;
      this.directions=directions;
      this.time=time;
      this.recipeimage=recipeimage;
      this.video=video;
}

//////////////////////////////////////////////////////////////

// var logvalue=JSON.parse(localStorage.getItem("logvalue")) || ""
// if(logvalue=="yes"){
//   "tab ho add recipe"
//   "varna alert"
// }