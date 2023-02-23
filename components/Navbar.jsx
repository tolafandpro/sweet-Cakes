import Image from "next/image";
import Logo from "../public/images/landing/logo.png";
import Link from "next/link";
import About from "../pages/about";

const Navbar = () => {
  return (
    <>
      {/* Main Header */}
      <header className="main-header">
        {/* Menu Wave */}
        <div className="menu_wave" />
        {/* Main box */}
        <div className="main-box">
          <div className="menu-box">
            <div className="logo">
              <Link href="/">
                <Image src={Logo} alt="logo" width={185} height={185} />
              </Link>
            </div>
            {/*Nav Box*/}
            <div className="nav-outer clearfix">
              {/* Main Menu */}
              <nav className="main-menu navbar-expand-md navbar-light">
                <div
                  className="collapse navbar-collapse clearfix"
                  id="navbarSupportedContent"
                >
                  <ul className="navigation menu-left clearfix">
                    <li className="dropdown">
                      <a href="index.html">Home</a>
                    </li>
                    <li className="dropdown current">
                      <a href="about-us.html">Pages</a>
                      {/* <ul>
                        <li>
                          <a href="/about">About Us</a>
                        </li>
                        <li>
                          <a href="our-staff.html">Our Staff</a>
                        </li>
                        <li>
                          <a href="pricing-tables.html">Pricing Tables</a>
                        </li>
                        <li>
                          <a href="recipes-list.html">Recipes Grid</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="dropdown">
                      <a href="portfolio-masonry.html">Portfolio</a>
                      <ul>
                        <li>
                          <a href="portfolio-masonry.html">Masonry</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navigation menu-right clearfix">
                    <li className="dropdown">
                      <a href="blog-showcase.html">Blog</a>
                      {/* <ul>
                        <li>
                          <a href="blog-showcase.html">Checkerboard</a>
                        </li>
                        <li>
                          <a href="blog-standard.html">Standard</a>
                        </li>
                        <li>
                          <a href="blog-masonry.html">Masonry</a>
                        </li>

                        <li className="dropdown">
                          <a href="#">Post Types</a>
                        </li>
                      </ul> */}
                    </li>
                    <li className="dropdown">
                      <a href="shop.html">Shop</a>
                      {/* <ul>
                        <li>
                          <a href="shop.html">Shop</a>
                        </li>
                        <li>
                          <a href="shopping-cart.html">Cart</a>
                        </li>
                        <li>
                          <a href="checkout.html">Checkout</a>
                        </li>
                        <li>
                          <a href="login.html">My account</a>
                        </li>
                      </ul> */}
                    </li>
                    <li>
                      <a href="contact.html">Contacts</a>
                    </li>
                  </ul>
                </div>
              </nav>
              {/* Main Menu End*/}
              <div className="outer-box clearfix">
                {/* Shoppping Car */}
                <div className="cart-btn">
                  <a href="shopping-cart.html">
                    <i className="icon flaticon-commerce" />{" "}
                    <span className="count">2</span>
                  </a>
                  <div className="shopping-cart">
                    {/* <ul className="shopping-cart-items">
                      <li className="cart-item">
                        <img
                          src="https://via.placeholder.com/300x300"
                          alt="#"
                          className="thumb"
                        />
                        <span className="item-name">Birthday Cake</span>
                        <span className="item-quantity">
                          1 x <span className="item-amount">$84.00</span>
                        </span>
                        <a href="shop-single.html" className="product-detail" />
                        <button className="remove-item">
                          <span className="fa fa-times" />
                        </button>
                      </li>
                      <li className="cart-item">
                        <img
                          src="https://via.placeholder.com/300x300"
                          alt="#"
                          className="thumb"
                        />
                        <span className="item-name">French Macaroon</span>
                        <span className="item-quantity">
                          1 x <span className="item-amount">$13.00</span>
                        </span>
                        <a href="shop-single.html" className="product-detail" />
                        <button className="remove-item">
                          <span className="fa fa-times" />
                        </button>
                      </li>
                    </ul> */}
                    <div className="cart-footer">
                      <div className="shopping-cart-total">
                        <strong>Subtotal:</strong> $97.00
                      </div>
                      <a href="cart.html" className="theme-btn">
                        View Cart
                      </a>
                      <a href="checkout.html" className="theme-btn">
                        Checkout
                      </a>
                    </div>
                  </div>
                  {/*end shopping-cart */}
                </div>
                {/* Search Btn */}
                <div className="search-box">
                  <button className="search-btn">
                    <i className="fa fa-search" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sticky Header  */}
        <div className="sticky-header">
          <div className="auto-container clearfix">
            {/*Logo*/}
            <div className="logo">
              <a href="#" title="Sticky Logo">
                <img src="images/logo-small.png" alt="Sticky Logo" />
              </a>
            </div>
            {/*Right Col*/}
            <div className="nav-outer">
              {/*Mobile Navigation Toggler*/}
              <div className="mobile-nav-toggler">
                <span className="icon flaticon-menu" />
              </div>
              {/* Main Menu */}
              <nav className="main-menu">
                {/*Keep This Empty / Menu will come through Javascript*/}
              </nav>
              {/* Main Menu End*/}
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
        {/* Mobile Header */}
        <div className="mobile-header">
          <div className="logo">
            <a href="index.html">
              <img src="images/logo-small.png" alt="" title="" />
            </a>
          </div>
          {/*Nav Box*/}
          <div className="nav-outer clearfix">
            {/*Keep This Empty / Menu will come through Javascript*/}
          </div>
        </div>
        {/* Mobile Menu  */}
        <div className="mobile-menu">
          <nav className="menu-box">
            <div className="nav-logo">
              <a href="index.html">
                <img src="images/logo-small.png" alt="" title="" />
              </a>
            </div>
            {/*Here Menu Will Come Automatically Via Javascript / Same Menu as in Header*/}
          </nav>
        </div>
        {/* End Mobile Menu */}
        {/* Header Search */}
        <div className="search-popup">
          <span className="search-back-drop" />
          <div className="search-inner">
            <button className="close-search">
              <span className="fa fa-times" />
            </button>
            <form method="post" action="blog-showcase.html">
              <div className="form-group">
                <input
                  type="search"
                  name="search-field"
                  defaultValue=""
                  placeholder="Search..."
                  required=""
                />
                <button type="submit">
                  <i className="fa fa-search" />
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* End Header Search */}
      </header>
    </>
  );
};

export default Navbar;
