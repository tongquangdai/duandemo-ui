import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('nav-wrap')}>
                <h1>Header</h1>
        <div className={cx('nav-wrap')}>
          {/* <!-- Navigation Start --> */}
          <nav className={cx('navigation')}>
            <div className="nav-section"{cx('navigation')}>
              <div className="header-section"{cx('navigation')}>
                <div className="navbar navbar-"{cx('navigation')}>
                  <a href="#" className={cx('logo')}>
                    <img src={images.logo} alt="logo">
                  </a>
                  <div className="offcanvas offcanvas-collapse order-lg-2" id="primaryMenu">
                    <div className="offcanvas-header navbar-shadow">
                      <h5 className="mt-1 mb-0">Menu</h5>
                      <button className="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                      {/* <!-- Menu--> */}
                      <ul className="navbar-nav">
                        {/* <!-- Home --> */}
                        <li className="nav-item dropdown dropdown-mega">
                          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
                        </li>

                        {/* <!-- Shop --> */}
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a> 
                        </li>

                        {/* <!-- Product --> */}
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Product</a> 
                        </li>

                        {/* <!-- Oslo Plus --> */}
                        <li className="nav-item dropdown dropdown-mega">
                          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Oslo Plus</a>
                          <div className="dropdown-menu mega-element-menu">
                            <div className="row g-4">
                              <div className="col-xl-3">
                                <div className="link-box">
                                  <h5>Portfolio Pages</h5>
                                  <div className="dropdown-column">
                                    <a className="dropdown-item" href="portfolio-2-grid.html">Portfolio 2 Grid</a>
                                    <a className="dropdown-item" href="portfolio-2-grid-masonry.html">Portfolio 2 Grid Masonry</a>
                                    <a className="dropdown-item" href="portfolio-3-grid.html">Portfolio 3 Grid <span className="badge bg-theme-theme">Hot</span></a>
                                    <a className="dropdown-item" href="portfolio-3-grid-masonry.html">Portfolio 3 Grid Masonry</a>
                                    <a className="dropdown-item" href="portfolio-4-grid.html">Portfolio 4 Grid</a>
                                    <a className="dropdown-item" href="portfolio-4-grid-masonry.html">Portfolio 4 Grid Masonry</a>
                                    <a className="dropdown-item" href="portfolio-no-space-masonry.html">Portfolio No Space Masonry</a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xl-3">
                                <div className="link-box">
                                  <h5>Elements Pages</h5>
                                  <div className="dropdown-column">
                                    <a className="dropdown-item" href="banner-element.html">Banner Element</a>
                                    <a className="dropdown-item" href="brand-element.html">Brand Element</a>
                                    <a className="dropdown-item" href="button-element.html">Button Element </a>
                                    <a className="dropdown-item" href="categories-element.html">Categories Element</a>
                                    <a className="dropdown-item" href="collection-banner-element.html">Collection Banner Element</a>
                                    <a className="dropdown-item" href="home-element.html">Home Banner Element</a>
                                    <a className="dropdown-item" href="instagram-element.html">Instagram Element <span className="badge bg-theme-sun2">New</span></a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xl-3">
                                <div className="link-box">
                                  <h5>Elements Pages</h5>
                                  <div className="dropdown-column">
                                    <a className="dropdown-item" href="offer-banner-element.html">Offer Banner Element</a>
                                    <a className="dropdown-item" href="brand-element.html">Brand Element <span className="badge bg-theme-theme">Hot</span></a>
                                    <a className="dropdown-item" href="product-card-element.html">Product Card Element</a>
                                    <a className="dropdown-item" href="seller-element.html">Seller Section Element</a>
                                    <a className="dropdown-item" href="service-element.html">Service Section Element</a>
                                    <a className="dropdown-item" href="tabs-element.html">Tabs Element</a>
                                    <a className="dropdown-item" href="title-element.html">Title Element</a>
                                  </div>
                                </div>
                              </div>

                              <div className="col-xl-3 d-none d-xl-block">
                                <div className="link-box">
                                  <div className="menu-img">
                                    <img className="img-fluid" src="../assets/images/demo-img/menu-bg.jpg" alt="img">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        {/* <!-- Pages --> */}
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                          <div className="dropdown-menu">
                            <div className="dropdown-column">
                              <a className="dropdown-item" href="search.html">Search</a>
                              <a className="dropdown-item" href="user-dashboard.html">User Dashboard</a>
                              <a className="dropdown-item" href="wishlist.html">Wishlist</a>
                            </div>
                          </div>
                        </li>

                        {/* <!-- Blog --> */}
                        <li className="nav-item dropdown">
                          <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                          <div className="dropdown-menu">
                            <div className="dropdown-column">
                              <a className="dropdown-item" href="blog-detail.html">Blog Details</a>
                              <a className="dropdown-item" href="blog-grid.html">Blog Grid </a>
                              <a className="dropdown-item" href="blog-list.html">Blog List</a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          {/* <!-- Navigation End -->

          <!-- Menu Right Start  --> */}
          <div className="menu-right">
            <div className="select-menu">
             
            </div>

            {/* <!-- Icon Menu Start --> */}
            <ul className="icon-menu">
              <li>
                <button className="search-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                {/* <!-- Search Input Start --> */}
                <div className="search-full">
                  <div className="input-group">
                    <span className="input-group-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </span>
                    <input type="text" className="form-control search-type" placeholder="Search here..">
                    <span className="input-group-text close-search">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </span>
                  </div>

                  {/* <!-- Suggestion Start --> */}
                  <div className="search-suggestion">
                    <ul>
                      <li>
                        <div className="product-cart media">
                          <img src="../assets/images/fashion/product/front/4.jpg" className="img-fluid blur-up lazyload" alt="">
                          <div className="media-body">
                            <a href="javascript:void(0)">
                              <h6>Women’s long sleeve Jacket</h6>
                            </a>
                            <ul className="rating p-0 mb">
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                            </ul>
                            <p className="mb-0 mt-1">$280.00</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="product-cart media">
                          <img src="../assets/images/fashion/product/front/5.jpg" className="img-fluid blur-up lazyload" alt="">
                          <div className="media-body">
                            <a href="javascript:void(0)">
                              <h6>Shirt short mini dresses</h6>
                            </a>
                            <ul className="rating p-0">
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                            </ul>
                            <p className="mb-0 mt-1">$35.00</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Suggestion Start --> */}
                </div>
                {/* <!-- Search Input End --> */}
              </li>

              <li className="user">
                <div className="dropdown user-dropdown">
                  <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a>
                  <ul className="onhover-show-div">
                    <li><a href="login.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                  </ul>
                </div>
              </li>

              <li>
                <div className="dropdown whislist-dropdown">
                  <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> <span className="notification-label">0</span></a>
                  <div className="onhover-show-div">
                    <a href="wishlist.html"> <img src="../assets/icons/svg/box.svg" className="img-fluid" alt="box"> </a>
                    <div className="content">
                      <a href="wishlist.html">
                        <h6>Your wishlist empty !!</h6>
                        <p>explore more and shortlist items.</p>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              {/* <!-- Cart Menu Start --> */}
              <li>
                <div className="dropdown shopingbag">
                  <a href="javascript:void(0)" className="cart-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> <span className="notification-label">3</span></a>
                  <a href="javascript:void(0)" className="overlay-cart overlay-common"></a>
                  <div className="onhover-cart-dropdown">
                    <div className="onhover-show-div">
                      <div className="dropdown-header">
                        <div className="control">
                          <a href="cart.html">Shopping Cart</a>
                          <button className="back-cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                        </div>
                      </div>

                      <div className="card-wrap custom-scroll">
                        <!-- Cart Item Start -->
                        <div className="cart-card media">
                          <a href="product.html"> <img src="../assets/images/fashion/product/front/8.jpg" className="img-fluid" alt="product"> </a>
                          <div className="media-body">
                            <a href="product.html"> <h6>Concrete Jungle Pack</h6></a>
                            <span>$120.00</span>
                            <div className="plus-minus">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus sub"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                              <input type="number" value="1" min="1" max="10">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus add"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                          </div>
                          <button className="remove-cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                        </div>
                        {/* <!-- Cart Item End -->

                        <!-- Cart Item Start --> */}
                        <div className="cart-card media">
                          <a href="product.html"> <img src="../assets/images/fashion/product/front/9.jpg" className="img-fluid" alt="product"> </a>
                          <div className="media-body">
                            <a href="product.html"> <h6>Concrete Jungle Pack</h6></a>
                            <span>$120.00</span>
                            <div className="plus-minus">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus sub"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                              <input type="number" value="1" min="1" max="10">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus add"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                          </div>
                          <button className="remove-cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                        </div>
                        {/* <!-- Cart Item End -->

                        <!-- Cart Item Start --> */}
                        <div className="cart-card media">
                          <a href="product.html"> <img src="../assets/images/fashion/product/front/7.jpg" className="img-fluid" alt="product"> </a>
                          <div className="media-body">
                            <a href="product.html"> <h6>Concrete Jungle Pack</h6></a>
                            <span>$120.00</span>
                            <div className="plus-minus">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-minus sub"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                              <input type="number" value="1" min="1" max="10">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-plus add"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                          </div>
                          <button className="remove-cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                        </div>
                        {/* <!-- Cart Item End --> */}
                      </div>
                      <div className="dropdown-footer">
                        <div className="freedelevery">
                          <p className="terms-condition">FREE SHIPPING! Continue Shopping to add more product to you cart and receive free shipping for orders over <strong>$500</strong></p>
                          <div className="progress">
                            <div className="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                          </div>
                        </div>
                        <div className="total-price">
                          <span>Total</span>
                          <span>$450</span>
                        </div>

                        <div className="btn-group block-group">
                          <a href="cart.html" className="btn-solid">View Cart</a>
                          <a href="payment.html" className="btn-outline">Checkout</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              {/* <!-- Cart Menu End --> */}
            </ul>
            {/* <!-- Icon Menu End --> */}
          </div>
          {/* <!-- Menu Right End  --> */}
        </div>
      </div>
           
        </header>
    );
}

export default Header;
