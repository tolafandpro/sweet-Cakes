const Navbar = () => {
  return (
    <>
      {/* Main Header*/}
      <header className="main-header">
        {/* Menu Wave */}
        <div className="menu_wave" />
        {/* Main box */}
        <div className="main-box">
          <div className="menu-box">
            <div className="logo">
              <a href="index.html">
                <img src="images/logo.png" alt="" title="" />
              </a>
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
                      <ul>
                        <li className="current">
                          <a href="about-us.html">About Us</a>
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
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="portfolio-masonry.html">Portfolio</a>
                      <ul>
                        <li>
                          <a href="portfolio-masonry.html">Masonry</a>
                        </li>
                        <li>
                          <a href="portfolio-masonry-wide.html">Masonry Wide</a>
                        </li>
                        <li>
                          <a href="portfolio-wide.html">Wide</a>
                        </li>
                        <li>
                          <a href="portfolio-with-filter.html">With Filter</a>
                        </li>
                        <li>
                          <a href="portfolio-two-column.html">Two Columns</a>
                        </li>
                        <li>
                          <a href="portfolio-with-sidebar.html">With Sidebar</a>
                        </li>
                        <li>
                          <a href="portfolio-square.html">Square</a>
                        </li>
                        <li>
                          <a href="portfolio-single.html">single Post</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <ul className="navigation menu-right clearfix">
                    <li className="dropdown">
                      <a href="blog-showcase.html">Blog</a>
                      <ul>
                        <li>
                          <a href="blog-showcase.html">Checkerboard</a>
                        </li>
                        <li>
                          <a href="blog-standard.html">Standard</a>
                        </li>
                        <li>
                          <a href="blog-masonry.html">Masonry</a>
                        </li>
                        <li>
                          <a href="blog-masonry-full-width.html">
                            Masonry Full Width
                          </a>
                        </li>
                        <li>
                          <a href="blog-two-column.html">Two Columns Grid</a>
                        </li>
                        <li>
                          <a href="blog-three-column-wide.html">
                            Three Columns Wide
                          </a>
                        </li>
                        <li className="dropdown">
                          <a href="#">Post Types</a>
                          <ul>
                            <li>
                              <a href="blog-single.html">Standard Post</a>
                            </li>
                            <li>
                              <a href="blog-single-2.html">Gallery Post</a>
                            </li>
                            <li>
                              <a href="blog-single-3.html">Video Post</a>
                            </li>
                            <li>
                              <a href="blog-single-4.html">Audio Post</a>
                            </li>
                            <li>
                              <a href="blog-single-5.html">Quote Post</a>
                            </li>
                            <li>
                              <a href="blog-single-6.html">Link Post</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li className="dropdown">
                      <a href="shop.html">Shop</a>
                      <ul>
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
                      </ul>
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
                    <ul className="shopping-cart-items">
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
                    </ul>
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
                  </div>{" "}
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
