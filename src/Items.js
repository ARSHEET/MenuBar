import "./Items.css";

export default function Items() {
  return (
    <div>
      <nav>
        <p className="qoute">
          I have long maintained that each of us has three chances a day to be
          happy: Breakfast, lunch, and dinner.
        </p>
        <hr />
      </nav>
      <h1 className="heading">What are you having for Lunch?</h1>

      <div className="Items">
        <div className="menu-items">
          <div className="container">
            <img
              src="https://img.freepik.com/free-photo/mexican-tacos-with-beef-tomato-sauce-salsa_2829-14218.jpg?size=626&ext=jpg"
              alt=""
            />
            <span>Mexican Taco</span>
          </div>
          <div className="container">
            <img
              src="https://www.brotherskitchen.in/wp-content/uploads/2021/03/farmhouse-pizza-vegetarian-pizza-with-mouth-watering-toppings_1024-768-600x450.jpg"
              alt=""
            />
            <span>Farmhouse Pizza</span>
          </div>
          <div className="container">
            <img
              src="https://www.kitchensanctuary.com/wp-content/uploads/2019/08/Crispy-Chicken-Burger-square-FS-4518.jpg"
              alt=""
            />
            <span>Chicken Burger</span>
          </div>
          <div className="container">
            <img
              src="https://alekasgettogether.com/wp-content/uploads/2021/02/air-fryer-loaded-cheesy-nachos-recipe.jpg"
              alt=""
            />
            <span>Loaded Nachos</span>
          </div>
          <div className="container">
            <img
              src="https://theyummydelights.com/wp-content/uploads/2021/04/egg-hakka-noodles-5-1.jpg"
              alt=""
            />
            <span>Hakka Noodles</span>
          </div>
        </div>
      </div>
    </div>
  );
}
