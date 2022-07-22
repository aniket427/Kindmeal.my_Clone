var profile_data=JSON.parse(localStorage.getItem("profile_data")) || []

var username=document.querySelector(".username1")
username.innerText=profile_data.username
var abt=document.querySelector(".abt")
abt.innerText=profile_data.username
var um=document.querySelector(".userme")
um.innerText=profile_data.username

var flname=document.querySelector(".flname")
flname.innerText=`${profile_data.fname} ${profile_data.lname}`  



var gen=document.querySelector(".gen")
gen.innerText=profile_data.gender
console.log(profile_data)

var num=Math.floor((Math.random()*5)+1)
console.log(num)
var hi=document.querySelector('#head_img')
hi.src=`https://www.kindmeal.my/images/default_member_cover-${num}.jpg`

