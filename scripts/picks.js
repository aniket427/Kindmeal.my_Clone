var pickObj =[
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/618-3514-m.jpg",
        price: "$20",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/672-4582-m.jpg",
        price: "$30",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/679-4332-m.jpg",
        price: "$40",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/672-4582-m.jpg",
        price: "$20",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/672-4582-m.jpg",
        price: "$90",
    }, 
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/672-4582-m.jpg",
        price: "$80",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/618-3514-m.jpg",
        price: "$70",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/7/706-4801-m.jpg",
        price: "$2000",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/7/706-4801-m.jpg",
        price: "$10",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/7/706-4801-m.jpg",
        price: "$200",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/614-3355-m.jpg",
        price: "$20",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/614-3355-m.jpg",
        price: "$20",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/679-4332-m.jpg",
        price: "$40",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/672-4582-m.jpg",
        price: "$20",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/672-4582-m.jpg",
        price: "$90",
    }, 
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/672-4582-m.jpg",
        price: "$80",
    }
    ,
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/7/706-4801-m.jpg",
        price: "$200",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/614-3355-m.jpg",
        price: "$20",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/614-3355-m.jpg",
        price: "$20",
    },
    {
        name: "Delights",
        img: "https://www.kindmeal.my/photos/deal/6/679-4332-m.jpg",
        price: "$40",
    }
]

var picks = document.querySelector(".allData")

    pickObj.map(function (element) {
        var div1 = document.createElement("div");
        var img = document.createElement("img");
        var priceDiv = document.createElement("div");
        var name = document.createElement("h6");
        var btn = document.createElement("button")
        div1.setAttribute("class", "dataFix")

        btn.setAttribute("class", "btn")
        img.setAttribute("src", element.img);
        priceDiv.textContent= element.price
        name.textContent= element.name
        btn.innerHTML = '<a href="payment.html">Buy Now</a>'
        

        div1.append(img, priceDiv, name, btn)

        picks.append(div1)
    })
