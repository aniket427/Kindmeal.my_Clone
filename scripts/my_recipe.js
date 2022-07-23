function addrecipe(){
    location.href="sharemyrecipe.html"
}


var logv=JSON.parse(localStorage.getItem("logvalue")) || ""

if(logv=="yes")

    {document.querySelector("#recipe_card_box").innerHTML=null;
    var profile_data=JSON.parse(localStorage.getItem("profile_data")) || []
    console.log(profile_data)

    
    var loop=profile_data.recipes
    console.log(loop)
    
    
    loop.forEach(data => {
        var rc=document.createElement("div")
        var fimg=document.createElement("img")
        fimg.src=data.img;
        var ing=document.createElement("p")
        ing.innerText=`INGREDIANTS:  ${data.ingrediants}`
        var res=document.createElement("p")
        res.innerText=`RECIPE: ${data.recipe}`
        rc.append(fimg,ing,res)
        document.querySelector("#recipe_card_box").append(rc)
    });}

 
// }


// sample object
// var igboj=  {img:"",ingrediants:"",recipe:""}

/////////////////////////////////////////////////////////

// add hote hi
// single local storagee banega
// voh mere pro data ko call karega

