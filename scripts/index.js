import {footer} from '../components/navbar.js'

let foot = document.getElementById('foot')
foot.innerHTML = footer();


// javascrip for home page  
// slide (carousels)

let btn = document.getElementsByClassName("btn3");

let flag;
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = () => {
    if (flag === undefined) {
      btn[i].style.backgroundColor = "#229760";
    } else {
      btn[flag].style.backgroundColor = "transparent";
      // console.log(flag)
    }
    btn[i].style.backgroundColor = "#229760";

// for redirecting to new page;
let p;
switch(i){
case 0 :p= 'index.html';
break;
case 1: p = '#'
break;
case 2: p = '#'
break;
case 3: p = '#'
break;
case 4: p = '#'
break;
case 5: p = '#'
break;
case 6: p = '#'
break;
case 7: p = '#'
break;
default: 'undefined'
}
window.location.href = p
// for redirecting to new page;
    flag = i;
  };
}

let i = 0;
let img1 = [
  "https://www.kindmeal.my/photos/deal/6/664-4296-m.jpg",
  "https://www.kindmeal.my/photos/deal/5/590-3137-m.jpg",
  "https://www.kindmeal.my/photos/deal/6/682-4370-m.jpg",
  "https://www.kindmeal.my/photos/deal/6/669-4206-m.jpg",
  "https://www.kindmeal.my/photos/deal/6/679-4332-m.jpg",
  "https://www.kindmeal.my/photos/deal/6/698-4639-m.jpg",
];
let photo1 = document.getElementById("image1");
let append1 = () => {
  setInterval(() => {
    if (i == img1.length) {
      i = 0;
    }
    // photo1.src = img1[i]; // This is error, We cannot assign images to html in this manner.
    
    //Bug solution down
    photo1.setAttribute("src", img1[i])
    i++;
  }, 1000);
};
append1();

let img2 = [
  "https://www.kindmeal.my/photos/shop/6/601-4497-m.jpg",
  "https://www.kindmeal.my/photos/shop/5/561-4220-m.jpg",
  "https://www.kindmeal.my/photos/shop/5/565-4200-m.jpg",
  "https://www.kindmeal.my/photos/shop/5/591-4421-m.jpg",
  "https://www.kindmeal.my/photos/shop/4/467-3019-m.jpg",
  "https://www.kindmeal.my/photos/shop/5/545-4170-m.jpg",
  "https://www.kindmeal.my/photos/shop/5/562-4188-m.jpg",
];

let photo2 = document.getElementById("image2");
let append2 = () => {
  setInterval(() => {
    if (i == img2.length) {
      i = 0;
    }
    // photo2.src = img2[i];
    photo2.setAttribute("src", img2[i])
    i++;
  }, 1000);
};
append2();