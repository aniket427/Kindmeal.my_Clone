
import { footer } from "../components/navbar.js"


const foot = document.getElementById('foot');
foot.innerHTML = footer();




let recipe_db = [
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-m.jpg",
    coverimage: "https://www.kindmeal.my/photos/member/0/6-c.jpg",
    recipeimage: "https://www.kindmeal.my/photos/recipe/85/85860-10836-m.jpg",
    title: "Banana Walnut Syrup",
    category: null,
    time: "10 Mins",
    likes: "0",
    comments: "0",
    followers: "14",
    servings: "4",
    rating: "0",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "https://www.kindmeal.my/photos/recipe/85/85860-10837-s.jpg",
    video: null,

  },
  {
    user: "MayNg",
    userimage: "https://www.kindmeal.my/photos/member/14/14169-m.jpg",
    coverimage: "https://www.kindmeal.my/photos/member/14/14169-c.jpg",
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000009-19416-m.jpg",
    title: "Vegetarian VFC",
    category: null,
    time: "1 Hr",
    likes: "3",
    comments: "2",
    followers: "30",
    servings: "Depends",
    rating: "6",
    description: "This is the Vegetarian VFC that I created. Idea sourced from KFC.",
    ingredients: ["1) King Oyster Mushrooms", "2) Light Soya Sauce", "3) Sesame Oil", "4) Italian Herbs", "5) Parsley", "6) Chilli pepper", "7) Black Pepper", "8) Salt"],
    directions: ["1. Wash the rice and pour in the coconut milk, salt, lemon grass, pandan leaves and ginger.", "2. Add the water to level 3 of the rice cooker and cook it.",
      "3. Once it is done, mixed the rice in the cooker so that the coconut milk is evenly mixed around.",
      "4. For the side dishes, it is optional for individual to cook whatever they like."],
    morephotos: "https://www.kindmeal.my/photos/recipe/1000/1000009-19416-m.jpg",

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-m.jpg",
    coverimage: "https://www.kindmeal.my/photos/member/0/6-c.jpg",
    recipeimage: "https://www.kindmeal.my/photos/recipe/117/117504-18290-m.jpg",
    title: "Saffron Scallion Couscous",
    category: null,
    time: "20 Mins",
    likes: "0",
    comments: "0",
    followers: "14",
    servings: "4",
    rating: "0",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "https://www.kindmeal.my/photos/recipe/117/117504-18291-l.jpg",
    video: ""
  },
  {
    user: "MyWeekendPlan",
    userimage: "https://www.kindmeal.my/images/default_male-m.jpg",
    coverimage: "https://www.kindmeal.my/images/default_member_cover-3.jpg",
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039471-58904-m.jpg",
    title: "Banana Cake",
    category: null,
    time: "55 Mins",
    likes: "0",
    comments: "0",
    followers: "0",
    servings: "6",
    rating: "0",
    description: "Bananas tend to be bruised overnight and some people dislike the taste of bruised bananas, however they are great in baking. The taste is immaculate! This recipe is really easy to make in only one bowl!",
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "loveearthorganic",
    userimage: "https://www.kindmeal.my/photos/member/29/29512-m.jpg",
    coverimage: "https://www.kindmeal.my/images/default_member_cover-5.jpg",
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000016-19430-m.jpg",
    title: "HEALTHY 10 GRAINS NASI 'LEMAK'",
    category: null,
    time: "45 Mins",
    likes: "0",
    comments: "0",
    followers: "0",
    servings: "2",
    rating: "0",
    description: "Healthy Ten Grain Rice Nasi Lemak is acutally made up with Love Earth Organic Extra Virgin Coconut which bring you the 100% Original Nasi Lemak flavor. Try now an you will definitely love it.",
    ingredients: "",
    directions: "",
    morephotos: "https://www.kindmeal.my/photos/recipe/1000/1000016-19431-s.jpg",
    video: "",
  },
  {
    user: "BINAYKUMARKESHRI357",
    userimage: "https://www.kindmeal.my/images/default_male-m.jpg",
    coverimage: "https://www.kindmeal.my/images/default_member_cover-2.jpg",
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039460-58888-m.jpg",
    title: "Seven Layer Salad Recipe / Healthy Salad",
    category: null,
    time: "15 Mins",
    likes: "0",
    comments: "0",
    followers: "0",
    servings: "Seven Layer",
    rating: "1",
    description: "As we all know that salad favorite dish for us. Today we know about Seven layer salad recipe. Salad has many types of nutrients and fulfill with fiber. It’s also good for our digestive system and good for our health. Seven Layer Salad Recipe / Healthy Salad",
    ingredients: "",
    directions: "",
    morephotos: "",
    video: ""

  },
  {
    user: "BluePenguin",
    userimage: "https://www.kindmeal.my/photos/member/11/11401-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000007-19413-m.jpg",
    title: "Chickpea Cakes",
    category: "appetizers",
    time: "2 Hrs",
    likes: "0",
    comments: "0",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "BluePenguin",
    userimage: "https://www.kindmeal.my/photos/member/11/11401-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000006-19412-m.jpg",
    title: "The Rock",
    category: "appetizers",
    time: "1 Hr",
    likes: "3",
    comments: "3",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/79/79527-9389-m.jpg",
    title: "Bean & Cheese Taquitos With Guacamole",
    category: "appetizers",
    time: "45 Mins",
    likes: "0",
    comments: "0",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/105/105870-15869-m.jpg",
    title: "Rainbow Goat's Cheese Balls",
    category: "appetizers",
    time: "10 Mins",
    likes: "0",
    comments: "0",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/103/103391-15283-m.jpg",
    title: "Crostini Al Mascarpone",
    category: "appetizers",
    time: "15 Mins",
    likes: "0",
    comments: "0",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/114/114923-17735-m.jpg",
    title: "Yummy Hummus",
    category: "appetizers",
    time: "10 Mins",
    likes: "0",
    comments: "0",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "BurhanBohra",
    userimage: "https://www.kindmeal.my/photos/member/37/37844-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039449-58866-m.jpg",
    title: "Hot Caramel Jam Recipe",
    category: "beverages",
    time: "15 Mins",
    likes: "1",
    comments: "0",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "MalikTaufiq",
    userimage: "https://www.kindmeal.my/photos/member/28/28122-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000015-19425-m.jpg",
    title: "Coconutbanana Smoothie",
    category: "beverages",
    time: "5 Mins",
    likes: "1",
    comments: "1",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/103/103170-15237-m.jpg",
    title: "Banana Bread Latte",
    category: "beverages",
    time: "5 Mins",
    likes: "1",
    comments: "1",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/100/100353-14518-m.jpg",
    title: "Hot Spiced Apple Cider In Crock Pot",
    category: "beverages",
    time: "4 Hrs 30 Mins",
    likes: "0",
    comments: "0",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/106/106964-16142-m.jpg",
    title: "Courage Cocktail",
    category: "beverages",
    time: "2 Mins",
    likes: "0",
    comments: "0",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/103/103164-15230-m.jpg",
    title: "Pralines And Cream Cocktail",
    category: "beverages",
    time: "5 Mins",
    likes: "0",
    comments: "0",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "loveearthorganic",
    userimage: "https://www.kindmeal.my/photos/member/29/29512-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000016-19430-m.jpg",
    title: "HEALTHY 10 GRAINS NASI 'LEMAK'",
    category: "breakfast",
    time: "45 Mins",
    likes: "1",
    comments: "1",
    followers: "",
    servings: "",
    rating: "",
    description: null,
    ingredients: "",
    directions: "",
    morephotos: "",
    video: "",

  },
  {
    user: "EvnadhamEvnadham",
    userimage: "https://www.kindmeal.my/photos/member/40/40177-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039464-58895-m.jpg",
    title: "10 Healthy Lunch Ideas For Weight Loss",
    category: "breakfast",
    time: "10 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "BluePenguin",
    userimage: "https://www.kindmeal.my/photos/member/11/11401-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000013-19421-m.jpg",
    title: "Pitaya Adzuki Nice Cream Smoothie Bowl",
    category: "breakfast",
    time: "30 Mins",
    likes: "3",
    comments: "1",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "FoodLover398",
    userimage: "https://www.kindmeal.my/photos/member/39/39951-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039461-58890-m.jpg",
    title: "How To Make One Pan Egg Toast",
    category: "breakfast",
    time: "3 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "FoodLover398",
    userimage: "https://www.kindmeal.my/photos/member/39/39951-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039461-58890-m.jpg",
    title: "How To Make One Pan Egg Toast",
    category: "breakfast",
    time: "3 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "FoodLover398",
    userimage: "https://www.kindmeal.my/photos/member/39/39951-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039462-58891-m.jpg",
    title: "Making French Toast-easy",
    category: "breakfast",
    time: "3 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "veer48",
    userimage: "https://www.kindmeal.my/images/default_male-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039456-58883-m.jpg",
    title: "Eggless Sponge Vanilla Cake With No Oven",
    category: "bread",
    time: "4 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/103/103170-15237-m.jpg",
    title: "Banana Bread Latte",
    category: "bread",
    time: "5 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/121/121971-18919-m.jpg",
    title: "Cheese Herb Bread",
    category: "bread",
    time: "50 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/123/123220-19152-m.jpg",
    title: "Orange Date Muffins",
    category: "bread",
    time: "30 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/114/114216-17573-m.jpg",
    title: "Rosemary Biscuits",
    category: "bread",
    time: "30 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/99/99202-14233-m.jpg",
    title: "Pizza Crust",
    category: "bread",
    time: "11 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },

  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/85/85860-10836-m.jpg",
    title: "Banana Walnut Syrup",
    category: "condiments",
    time: "10 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "BluePenguin",
    userimage: "https://www.kindmeal.my/photos/member/11/11401-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000008-19415-m.jpg",
    title: "Curry Tomato Sauce",
    category: "condiments",
    time: "30 Mins",
    likes: "0",
    comments: "1",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/98/98922-14139-m.jpg",
    title: "Lemon Whipped Cream",
    category: "condiments",
    time: "10 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/111/111981-17176-m.jpg",
    title: "Classic English Salad Cream - Oil-Free Salad Dressing",
    category: "condiments",
    time: "35 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/83/83916-10402-m.jpg",
    title: "Redroadhome's Pizza Sauce",
    category: "condiments",
    time: "35 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/102/102856-15088-m.jpg",
    title: "Peach-Mustard Sauce",
    category: "condiments",
    time: "3 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "MyWeekendPlan",
    userimage: "https://www.kindmeal.my/images/default_male-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039471-58904-m.jpg",
    title: "Banana Cake",
    category: "desserts",
    time: "55 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "MyWeekendPlan",
    userimage: "https://www.kindmeal.my/images/default_male-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039470-58903-m.jpg",
    title: "Chocolate Cake",
    category: "desserts",
    time: "40 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "MyWeekendPlan",
    userimage: "https://www.kindmeal.my/images/default_male-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039477-58910-m.jpg",
    title: "Peanut Butter Cups",
    category: "desserts",
    time: "1 Hr",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "MyWeekendPlan",
    userimage: "https://www.kindmeal.my/images/default_male-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039467-58898-m.jpg",
    title: "Crunchy Chocolate Chip Cookies",
    category: "desserts",
    time: "23 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "MyWeekendPlan",
    userimage: "https://www.kindmeal.my/images/default_male-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039475-58908-m.jpg",
    title: "Chocolate Brownie Tart",
    category: "desserts",
    time: "25 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "MyWeekendPlan",
    userimage: "https://www.kindmeal.my/images/default_male-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039473-58906-m.jpg",
    title: "Oreo Egg Tart",
    category: "desserts",
    time: "45 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "EvnadhamEvnadham",
    userimage: "https://www.kindmeal.my/photos/member/40/40177-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039464-58895-m.jpg",
    title: "10 Healthy Lunch Ideas For Weight Loss",
    category: "snacks",
    time: "10 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "EvnadhamEvnadham",
    userimage: "https://www.kindmeal.my/photos/member/40/40177-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039465-58896-m.jpg",
    title: "EASY 10 Minute Dinner Recipes",
    category: "snacks",
    time: "11 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "BluePenguin",
    userimage: "https://www.kindmeal.my/photos/member/11/11401-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000013-19421-m.jpg",
    title: "Pitaya Adzuki Nice Cream Smoothie Bowl",
    category: "snacks",
    time: "30 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "buzztowns",
    userimage: "https://www.kindmeal.my/images/default_female-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039474-58907-m.jpg",
    title: "Khaman Dhokla Recipe",
    category: "snacks",
    time: "1 Hr",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "buzztowns",
    userimage: "https://www.kindmeal.my/images/default_female-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039474-58907-m.jpg",
    title: "Khaman Dhokla Recipe",
    category: "snacks",
    time: "1 Hr",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "ismah",
    userimage: "https://www.kindmeal.my/photos/member/40/40202-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039466-58897-m.jpg",
    title: "BRINJAL CURRY",
    category: "snacks",
    time: "11 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },

  {
    user: "MayNg",
    userimage: "https://www.kindmeal.my/photos/member/14/14169-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000009-19416-m.jpg",
    title: "Vegetarian VFC",
    category: "maindishes",
    time: "1 Hr",
    likes: "3",
    comments: "2",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "loveearthorganic",
    userimage: "https://www.kindmeal.my/photos/member/29/29512-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000016-19430-m.jpg",
    title: "HEALTHY 10 GRAINS NASI 'LEMAK'",
    category: "maindishes",
    time: "45 Mins",
    likes: "1",
    comments: "1",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "EvnadhamEvnadham",
    userimage: "https://www.kindmeal.my/photos/member/40/40177-m.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039465-58896-m.jpg",
    title: "EASY 10 Minute Dinner Recipes",
    category: "maindishes",
    time: "11 Mins",
    likes: "1",
    comments: "1",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "ismah",
    userimage: "https://www.kindmeal.my/photos/member/40/40202-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039466-58897-m.jpg",
    title: "BRINJAL CURRY",
    category: "maindishes",
    time: "11 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "YukiAuYong",
    userimage: "https://www.kindmeal.my/photos/member/13/13040-m.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039457-58885-m.jpg",
    title: "Seaweed Wheat Floss With Vegan Bacon Edamame Fried Rice",
    category: "maindishes",
    time: "30 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "SynThiaSumireDT",
    userimage: "https://www.kindmeal.my/photos/member/35/35085-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039459-58887-m.jpg",
    title: "Stir-fried Broccoli Rice",
    category: "maindishes",
    time: "1 Hr",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "BINAYKUMARKESHRI357",
    userimage: "https://www.kindmeal.my/images/default_male-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039460-58888-m.jpg",
    title: "Seven Layer Salad Recipe / Healthy Salad",
    category: "salads",
    time: "15 MIns",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "BINAYKUMARKESHRI357",
    userimage: "https://www.kindmeal.my/images/default_male-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039460-58888-m.jpg",
    title: "Seven Layer Salad Recipe / Healthy Salad",
    category: "salads",
    time: "15 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "BluePenguin",
    userimage: "https://www.kindmeal.my/photos/member/11/11401-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000007-19413-m.jpg",
    title: "Chickpea Cakes",
    category: "salads",
    time: "2 Hrs",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "BurhanBohra",
    userimage: "https://www.kindmeal.my/photos/member/37/37844-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039450-58870-m.jpg",
    title: "Maggi Peanuts - Salad",
    category: "salads",
    time: "15 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "Janelle",
    userimage: "https://www.kindmeal.my/photos/member/20/20322-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000012-19420-m.jpg",
    title: "Ceasar Dressing",
    category: "salads",
    time: "20 MIns",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "XianKy",
    userimage: "https://www.kindmeal.my/photos/member/10/10639-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000010-19417-m.jpg",
    title: "Avocado Chocolate Quinoa",
    category: "salads",
    time: "30 Mins",
    likes: "1",
    comments: "1",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/117/117504-18290-m.jpg",
    title: "Saffron Scallion Couscous",
    category: "sidedishes",
    time: "20 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "BurhanBohra",
    userimage: "https://www.kindmeal.my/photos/member/37/37844-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1039/1039450-58870-m.jpg",
    title: "Maggi Peanuts - Salad",
    category: "sidedishes",
    time: "15 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "Janelle",
    userimage: "https://www.kindmeal.my/photos/member/20/20322-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/1000/1000012-19420-m.jpg",
    title: "Ceasar Dressing",
    category: "sidedishes",
    time: "20 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/109/109267-16597-m.jpg",
    title: "Nif's Sherry-Sauteed Mushrooms",
    category: "sidedishes",
    time: "20 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/122/122369-19019-m.jpg",
    title: "Gratin Dauphinois",
    category: "sidedishes",
    time: "55 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/116/116169-18010-m.jpg",
    title: "Balsamic Green Beans",
    category: "sidedishes",
    time: "17 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },

  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/23/23124-1808-m.jpg",
    title: "Sweet Potato & Chili Soup",
    category: "soups",
    time: "45 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/31/31254-2640-m.jpg",
    title: "Spicy Miso And Pumpkin Soup",
    category: "soups",
    time: "20 Mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/109/109136-16570-m.jpg",
    title: "Zuppa Di Porcini (Porcini Mushrooms Soup)",
    category: "soups",
    time: "41 MIns",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/97/97390-13745-m.jpg",
    title: "Chilled Avocado Orange Soup",
    category: "soups",
    time: "10 MIns",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/17/17958-1104-m.jpg",
    title: "Sweet Banana Soup, With Tapioca And Coconut",
    category: "soups",
    time: "55 MIns",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },
  {
    user: "KindMealChef",
    userimage: "https://www.kindmeal.my/photos/member/0/6-s.jpg",
    coverimage: null,
    recipeimage: "https://www.kindmeal.my/photos/recipe/116/116859-18143-m.jpg",
    title: "Two-Tone Melon Soup",
    category: "soups",
    time: "5 mins",
    likes: "0",
    comments: "0",
    followers: null,
    servings: null,
    rating: null,
    description: null,
    ingredients: null,
    directions: null,
    morephotos: null,
    video: null,

  },

]

localStorage.setItem("recipe_db", JSON.stringify(recipe_db));

//Category button functionality

document.querySelectorAll(".cat_btn").forEach((button) => {
  button.addEventListener("click", function () {

    display_cat_filter(button.value);
    document.querySelectorAll(".cat_btn").forEach((button) => {
      button.classList.remove("active_btn");
    });

    button.classList.add("active_btn");
  });
});


//display cards

let ls_db = JSON.parse(localStorage.getItem("recipe_db"));

let diplay_cards = (data) => {

  let container = document.getElementById("recipe_container");
  container.innerHTML = null;

  data.forEach((el, index) => {
    let card_div = document.createElement('div');
    card_div.setAttribute("class", "card");

    let top_bar = document.createElement('div');
    top_bar.setAttribute("class", "top_bar");

    let user_logo = document.createElement('div');
    user_logo.setAttribute("class", "user_logo");


    let user_img = document.createElement("img");
    user_img.src = el.userimage;
    user_logo.append(user_img);

    let user_name = document.createElement('div');
    user_name.innerText = el.user;
    user_name.setAttribute("class", "user_name");

    let view_btn = document.createElement('button');
    view_btn.innerText = "View";
    view_btn.addEventListener("click", function () {
      localStorage.setItem("detail_item_view", JSON.stringify(el));
      window.location.href = "recipe_details.html";
    })

    top_bar.append(user_logo, user_name, view_btn);

    let mid_bar = document.createElement("div");
    mid_bar.setAttribute("class", "mid_div");
    mid_bar.addEventListener("click", function () {
      localStorage.setItem("detail_item_view", JSON.stringify(el));
      window.location.href = "recipe_details.html";
    })

    mid_bar.style.backgroundImage = `url(${el.recipeimage})`;

    let title_strip = document.createElement("div");
    title_strip.innerText = el.title;
    title_strip.setAttribute("class", "title_strip");

    mid_bar.append(title_strip);

    let bottom_bar = document.createElement("div");
    bottom_bar.setAttribute("class", "bottom_bar");

    let time_block = document.createElement("div");
    let time_icon_div = document.createElement("div")
    let time_icon = document.createElement("img");
    time_icon.src = "https://www.kindmeal.my/images/icon_time_small.png";

    time_icon_div.append(time_icon);

    let time_req = document.createElement("div");
    time_req.innerText = el.time;

    time_block.append(time_icon_div, time_req);


    let like_block = document.createElement("div");
    let like_icon_div = document.createElement("div")
    let like_icon = document.createElement("img");
    like_icon.src = "https://www.kindmeal.my/images/icon_heart_small.png";

    like_icon_div.append(like_icon);

    let like_num = document.createElement("div");
    like_num.innerText = el.likes;

    like_block.append(like_icon_div, like_num);


    let comment_block = document.createElement("div");
    let comment_icon_div = document.createElement("div")
    let comment_icon = document.createElement("img");
    comment_icon.src = "https://www.kindmeal.my/images/icon_commentbubble_small.png";

    comment_icon_div.append(comment_icon);

    let comment_num = document.createElement("div");
    comment_num.innerText = el.comments;

    comment_block.append(comment_icon_div, comment_num);

    bottom_bar.append(time_block, like_block, comment_block);


    card_div.append(top_bar, mid_bar, bottom_bar);
    container.append(card_div);

  });


}

diplay_cards(ls_db);

//Search functionality
//On enter keypress
let searchfun = document.getElementById('search');
searchfun.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    search_function();
  }
})

//On search button click
document.getElementById("search_btn").addEventListener("click", () => {
  search_function();
})


//search function

let search_function = () => {

  let input = document.getElementById('search').value
  input = input.toLowerCase();

  let cat = document.getElementById("categories").value;
  // console.log(cat);

  let filtered_list = ls_db.filter(function (elem) {
    console.log(cat, elem.category)
    return ((elem.user).toLowerCase().includes(input)) || (elem.title).toLowerCase().includes(input);
  });

  diplay_cards(filtered_list);
}

//Filter functionality

let display_cat_filter = (value) => {
  if (value == "") {
    return diplay_cards(ls_db)
  }

  let filtered_list = ls_db.filter(function (elem) {

    return elem.category == value
  });

  diplay_cards(filtered_list);
}

