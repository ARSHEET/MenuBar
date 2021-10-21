import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1 className="menu-heading">Pyramid</h1>
      <div className="nav">
        <ul id="menu-list">
          <img
            className="navbar-menu"
            src="https://www.pngkit.com/png/detail/127-1276664_hamburger-icon-hamburger-menu-icon-png.png"
            alt=""
          />
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href=" ">Cuisine</a>
          </li>
          <li>
            <a href=" ">Gallery</a>
          </li>
          <li>
            <a href=" ">Contact</a>
          </li>
          <li>
            <a href=" ">Book</a>
          </li>
        </ul>
        <button className="cart-btn" type="button">
          Cart
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
