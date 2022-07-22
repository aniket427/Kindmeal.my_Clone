let navbar = () => {
  return ` <div id="navbar1">
      <div> <img src="https://www.kindmeal.my/images/logo-kindmeal.png" alt=""></div>
  
      <div>
      <div><button class="btn"><img src="https://www.kindmeal.my/images/follow_blog_grey.png" alt=""></button></div>
      <div><button class="btn"><img src="https://www.kindmeal.my/images/follow_facebook_grey.png" alt=""></button></div>
      <div><button class="btn"><img src="https://www.kindmeal.my/images/follow_twitter_grey.png" alt=""></button></div>
      </div>
      <div>
          <div id="log">
              <p>Login</p>
              <button style="color:white;border:none;border-radius: 5px;" class="btn2">Facebook</button>
              <button style="color:white ; border:none;border-radius: 5px;" class="btn2">Email</button>
          </div>
        <p>Sign Up</p>
      </div>
      </div>
      <div id="navigation">
          <button class="btn3">Home</button>
          <button class="btn3">Recipes</button>
          <button class="btn3">Share Recipe</button>
          <button class="btn3">KindMoments</button>
          <button class="btn3">Hot Picks</button>
          <button class="btn3">Help</button>
          <button class="btn3">Meal Deals</button>
          <button class="btn3">Articles</button>
      </div>`;
};
let footer = () => {
  return `<div>
    <p style="font-size:26px;color:#888888">As Featured In</p>
    <img src="https://www.kindmeal.my/images/media-feature2.png" alt="">
  </div>
  <div class="footer">
    <div>
  <div>
  <p class="tr">General</p>  
  <p class="td">Home</p>  
  <p class="td">Sign Up</p>  
  <p class="td">Businesses/Restaurateurs</p>  
  <p class="td">Advertising</p>  
  <p class="td">About KindMeal.my</p>  
  <p class="td">Help & FAQ</p>  
  <p class="td">Terms & Conditions</p>  
  <p class="td">Inspiring Partners</p>  
  <p class="td">Lifestyle Ambassadors</p>  
  <p class="td">Jobs & Careers</p>  
  <p class="td">Contact Us</p>  
  </div>
  <div>
    <p class="tr">Features</p> 
    <p class="td">Meat-Free Deals</p>
    <p class="td">Tasty Menus</p>
    <p class="td">Kind Moments</p>
    <p class="td">Meat-Free Recipes</p>
    <p class="td">Member Recommendations</p>
    <p class="td">Featured Restaurants</p>
    <p class="td">Vegetarian & Vegan Directory</p>
    <p class="td">Food Map</p>
    <p class="td">Become A Superhero</p>
    <p class="td">Vegan News & Vegetarian Articles</p>
    <p class="td">Latest Comments</p>
  </div>
  <div>
    <p class="tr">Social Media</p> 
    <p class="td">KindMeal Widget</p>
    <p class="td">Facebook</p>
    <p class="td">Twitter</p>
    <p class="td">Instagram</p>
  </div>
  <div>
    <p class="tr">Social Media</p>
    <p class="td">iPhone & iPod App</p>
    <p class="td">Android App</p>
    <br>
    <br>
    <p class="tr">Exciting Promos</p>
    <p class="td">Gadhimai: Ending Mass Slaughter</p>
    <p class="td">Free Meals</p>
    <p class="td">Food Bloggers</p>
    <p class="td">Uber CHIRP</p>
    <p class="td">Jane Goodall Contest</p>
    <p class="td">Win Digi iPhone 6</p>
    <p class="td">Feed The Poor</p>
    <p class="td">Win Superhero Gifts</p>
    <p class="td">Win an iPad Mini 3</p>
  
  </div>
  <div>
    <p class="tr">PetFinder.my</p>
    <p class="td">Adopt A Pet</p>
    <p class="td">Smartphone Apps</p>
    <p class="td">WAGazine</p>
    <p class="td">Discussion Forum Apps</p>
    <p class="td">Medical Fund</p>
  
  </div>
  
    </div>
    <div>Copyright © KindMeal.my, 2014 - 2022. All rights reserved.
        This website promotes compassionate, meat-free dining experience. Some food may contain eggs, dairy products or alcohol, please view individual listings for details.</div>
  </div>`;
};

export { navbar, footer };
