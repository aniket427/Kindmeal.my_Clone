function signup(){
    var form=document.querySelector("form");
    // var fname=document.getElementById("fname").value
    var fname=form.fname.value
    var lname=form.lname.value
    var email=form.email.value
    var remail=form.remail.value
     var Password=form.password.value
     var username=form.username.value
     var mon=form.mon.value;
     var day=form.day.value;
     var year=form.year.value;
     var county=form.country.value;
     var state=form.state.value;
    
 
    
     console.log(email)
    // console.log(mon)
    var sigdata=JSON.parse(localStorage.getItem("sigdata")) || []
    var flag1=false;
    var flag2=false;
    var flag3=true;
    var flag4=true;
    for(var i=0;i<sigdata.length;i++){
        if(sigdata[i].email==email ){
            console.log(sigdata[i].email)
            flag1=true;
        }
        if(sigdata[i].username==username){
            flag2=true;
        }
    }
  
    var check=document.querySelector("#check")
    if(check.checked){
        flag4=false
    }
     
    
    var gen=document.getElementsByName("gender")
    for(var j=0;j<gen.length;j++){
     if(gen[j].checked){
         console.log(gen[j].value)
         var gender=gen[j].value
         flag3=false;
     }
    }
    
    if(fname.length==0 || lname.length==0|| email.length==0 || remail.length==0 || Password.length==0||username.length==0|| mon=="month" || day=="day" || year=="year" ||county.length==0||state.length==0){
        alert("please fill all the credentials properly")
    }
    else if(flag1){
        alert("email already existing")
    }
    else if(flag2){
        alert("username not available")
    }
    else if(email!==remail){
        alert("please check your email id")
    }
    else if(flag3){
        alert("please select your gender")
    }
    else if(flag4){
        alert("you have to agree T&C to signup")
    }
    else{
        var sigdata=JSON.parse(localStorage.getItem("sigdata")) || []
        var obj={"username":username,"email":email,"password":Password,"fname":fname,"lname":lname,"gender":gender,recipes:[]}
        sigdata.push(obj)
        localStorage.setItem("sigdata",JSON.stringify(sigdata))
        alert("signin successfull")
        window.location.href="index.html"
    }
    

    }

    // function gen(value){
    //   var gender=value
    //   console.log(gender)
    // }

   var igboj=  {img:"https://www.kindmeal.my/photos/moment/24/24015-45746-m.jpg","ingrediants":"salt,pepper,egg",ingrediants:"Step 1: Place eggs in the bottom of a saucepan. ...Step 2: Fill the pan with cold water, 1 inch above the eggs.Step 3: Bring the water to a rapid boil on the stovetop over high heat.Step 4: Once the water comes to a boil, cover the pan with a lid and remove the pan from the heat"}