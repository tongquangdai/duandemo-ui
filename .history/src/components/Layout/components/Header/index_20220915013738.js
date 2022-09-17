import classNames from 'classnames/bind';
import styles from './Header.module.scss';
const cx = classNames.bind(styles);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('nav-wrap')}>
                <h1>Header</h1>
        <div class="nav-wrap">
          {/* <!-- Navigation Start --> */}
          <nav class="navigation">
            <div class="nav-section">
              <div class="header-section">
                <div class="navbar navbar-expand-xl navbar-light navbar-sticky p-0">
                  <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#primaryMenu" aria-controls="primaryMenu">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <a href="index.html" class="logo-link">
                    <img class="logo" src="../assets/images/logos/logo-4.png" alt="logo">
                  </a>
                  <div class="offcanvas offcanvas-collapse order-lg-2" id="primaryMenu">
                    <div class="offcanvas-header navbar-shadow">
                      <h5 class="mt-1 mb-0">Menu</h5>
                      <button class="btn-close lead" type="button" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div class="offcanvas-body">
                      {/* <!-- Menu--> */}
                      <ul class="navbar-nav">
                        {/* <!-- Home --> */}
                        <li class="nav-item dropdown dropdown-mega">
                          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Home</a>
                          <div class="dropdown-menu home-menu">
                            <div class="row g-4">
                              <div class="col-xl-2 mega-box">
                                <a class="home-box" href="index.html">
                                  <img class="img-fluid" src="../assets/images/demo-img/demo1.jpg" alt="home1">
                                  <span>Fashion Demo</span>
                                </a>
                              </div>

                              <div class="col-xl-2 mega-box">
                                <a class="home-box" href="index-2.html">
                                  <img class="img-fluid" src="../assets/images/demo-img/demo2.jpg" alt="home2">
                                  <span>Bag Demo</span>
                                </a>
                              </div>

                              <div class="col-xl-2 mega-box">
                                <a class="home-box" href="index-3.html">
                                  <img class="img-fluid" src="../assets/images/demo-img/demo3.jpg" alt="home3">
                                  <span>Grocery Demo</span>
                                </a>
                              </div>

                              <div class="col-xl-2 mega-box">
                                <a class="home-box" href="index-4.html">
                                  <img class="img-fluid" src="../assets/images/demo-img/demo4.jpg" alt="home4">
                                  <span>Furniture Demo</span>
                                </a>
                              </div>

                              <div class="col-xl-2 mega-box">
                                <a class="home-box" href="index-5.html">
                                  <img class="img-fluid" src="../assets/images/demo-img/demo5.jpg" alt="home5">
                                  <span>Watch Demo</span>
                                </a>
                              </div>

                              <div class="col-xl-2 mega-box">
                                <a class="home-box" href="index-6.html">
                                  <img class="img-fluid" src="../assets/images/demo-img/demo6.jpg" alt="home6">
                                  <span>Shoes Demo</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </li>

                        {/* <!-- Shop --> */}
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Shop</a>
                          <div class="dropdown-menu">
                            <div class="dropdown-column">
                              <a class="dropdown-item" href="shop-categories.html">Shop Categories</a>
                              <a class="dropdown-item" href="shop-filter.html">Shop Filter</a>
                              <a class="dropdown-item" href="shop-left-sidebar.html">Shop Left Sidebar</a>
                              <a class="dropdown-item" href="shop-list.html">Shop List</a>
                              <a class="dropdown-item" href="shop-masanory.html">Shop Masonry</a>
                              <a class="dropdown-item" href="shop-no-sidebar.html">Shop No Sidebar</a>
                              <a class="dropdown-item" href="shop-right-sidebar.html">Shop Right Sidebar</a>
                              <a class="dropdown-item" href="shop-top-filter.html">Shop Top Filter</a>
                            </div>
                          </div>
                        </li>

                        {/* <!-- Product --> */}
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Product</a>
                          <div class="dropdown-menu">
                            <div class="dropdown-column">
                              <a class="dropdown-item" href="product-four-image.html">Product 4 Images</a>
                              <a class="dropdown-item" href="product-slider.html">Product Slider </a>
                              <a class="dropdown-item" href="product-sticky.html">Product Sticky</a>
                              <a class="dropdown-item" href="product-three-column.html">Product 3 Column</a>
                              <a class="dropdown-item" href="product-video-img.html">Product Video</a>
                              <a class="dropdown-item" href="product.html">Product Simple</a>
                            </div>
                          </div>
                        </li>

                        {/* <!-- Oslo Plus --> */}
                        <li class="nav-item dropdown dropdown-mega">
                          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Oslo Plus</a>
                          <div class="dropdown-menu mega-element-menu">
                            <div class="row g-4">
                              <div class="col-xl-3">
                                <div class="link-box">
                                  <h5>Portfolio Pages</h5>
                                  <div class="dropdown-column">
                                    <a class="dropdown-item" href="portfolio-2-grid.html">Portfolio 2 Grid</a>
                                    <a class="dropdown-item" href="portfolio-2-grid-masonry.html">Portfolio 2 Grid Masonry</a>
                                    <a class="dropdown-item" href="portfolio-3-grid.html">Portfolio 3 Grid <span class="badge bg-theme-theme">Hot</span></a>
                                    <a class="dropdown-item" href="portfolio-3-grid-masonry.html">Portfolio 3 Grid Masonry</a>
                                    <a class="dropdown-item" href="portfolio-4-grid.html">Portfolio 4 Grid</a>
                                    <a class="dropdown-item" href="portfolio-4-grid-masonry.html">Portfolio 4 Grid Masonry</a>
                                    <a class="dropdown-item" href="portfolio-no-space-masonry.html">Portfolio No Space Masonry</a>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xl-3">
                                <div class="link-box">
                                  <h5>Elements Pages</h5>
                                  <div class="dropdown-column">
                                    <a class="dropdown-item" href="banner-element.html">Banner Element</a>
                                    <a class="dropdown-item" href="brand-element.html">Brand Element</a>
                                    <a class="dropdown-item" href="button-element.html">Button Element </a>
                                    <a class="dropdown-item" href="categories-element.html">Categories Element</a>
                                    <a class="dropdown-item" href="collection-banner-element.html">Collection Banner Element</a>
                                    <a class="dropdown-item" href="home-element.html">Home Banner Element</a>
                                    <a class="dropdown-item" href="instagram-element.html">Instagram Element <span class="badge bg-theme-sun2">New</span></a>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xl-3">
                                <div class="link-box">
                                  <h5>Elements Pages</h5>
                                  <div class="dropdown-column">
                                    <a class="dropdown-item" href="offer-banner-element.html">Offer Banner Element</a>
                                    <a class="dropdown-item" href="brand-element.html">Brand Element <span class="badge bg-theme-theme">Hot</span></a>
                                    <a class="dropdown-item" href="product-card-element.html">Product Card Element</a>
                                    <a class="dropdown-item" href="seller-element.html">Seller Section Element</a>
                                    <a class="dropdown-item" href="service-element.html">Service Section Element</a>
                                    <a class="dropdown-item" href="tabs-element.html">Tabs Element</a>
                                    <a class="dropdown-item" href="title-element.html">Title Element</a>
                                  </div>
                                </div>
                              </div>

                              <div class="col-xl-3 d-none d-xl-block">
                                <div class="link-box">
                                  <div class="menu-img">
                                    <img class="img-fluid" src="../assets/images/demo-img/menu-bg.jpg" alt="img">
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>

                        {/* <!-- Pages --> */}
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                          <div class="dropdown-menu">
                            <div class="dropdown-column">
                              <a class="dropdown-item" href="404.html">404</a>
                              <a class="dropdown-item" href="about-us.html">About Us </a>
                              <a class="dropdown-item" href="address.html">Address</a>
                              <a class="dropdown-item" href="cart.html">Cart</a>
                              <a class="dropdown-item" href="coming-soon.html">Coming Soon</a>
                              <a class="dropdown-item" href="compare.html">Compare</a>
                              <a class="dropdown-item" href="contact-us.html">Contact Us</a>
                              <a class="dropdown-item" href="faqs.html">Faqs</a>
                              <a class="dropdown-item" href="forgot-password.html">Forgot Password</a>
                              <a class="dropdown-item" href="login.html">Login</a>
                              <a class="dropdown-item" href="order-success.html">Order Success</a>
                              <a class="dropdown-item" href="otp.html">Otp</a>
                              <a class="dropdown-item" href="payment.html">Payment</a>
                              <a class="dropdown-item" href="register.html">Register</a>
                              <a class="dropdown-item" href="reset-password.html">Reset Password</a>
                              <a class="dropdown-item" href="search.html">Search</a>
                              <a class="dropdown-item" href="user-dashboard.html">User Dashboard</a>
                              <a class="dropdown-item" href="wishlist.html">Wishlist</a>
                            </div>
                          </div>
                        </li>

                        {/* <!-- Blog --> */}
                        <li class="nav-item dropdown">
                          <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Blog</a>
                          <div class="dropdown-menu">
                            <div class="dropdown-column">
                              <a class="dropdown-item" href="blog-detail.html">Blog Details</a>
                              <a class="dropdown-item" href="blog-grid.html">Blog Grid </a>
                              <a class="dropdown-item" href="blog-list.html">Blog List</a>
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
          <div class="menu-right">
            <div class="select-menu">
             
            </div>

            {/* <!-- Icon Menu Start --> */}
            <ul class="icon-menu">
              <li>
                <button class="search-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg></button>
                {/* <!-- Search Input Start --> */}
                <div class="search-full">
                  <div class="input-group">
                    <span class="input-group-text">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </span>
                    <input type="text" class="form-control search-type" placeholder="Search here..">
                    <span class="input-group-text close-search">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </span>
                  </div>

                  {/* <!-- Suggestion Start --> */}
                  <div class="search-suggestion">
                    <ul>
                      <li>
                        <div class="product-cart media">
                          <img src="../assets/images/fashion/product/front/4.jpg" class="img-fluid blur-up lazyload" alt="">
                          <div class="media-body">
                            <a href="javascript:void(0)">
                              <h6>Women’s long sleeve Jacket</h6>
                            </a>
                            <ul class="rating p-0 mb">
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                            </ul>
                            <p class="mb-0 mt-1">$280.00</p>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div class="product-cart media">
                          <img src="../assets/images/fashion/product/front/5.jpg" class="img-fluid blur-up lazyload" alt="">
                          <div class="media-body">
                            <a href="javascript:void(0)">
                              <h6>Shirt short mini dresses</h6>
                            </a>
                            <ul class="rating p-0">
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star fill"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                              <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                              </li>
                            </ul>
                            <p class="mb-0 mt-1">$35.00</p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Suggestion Start --> */}
                </div>
                {/* <!-- Search Input End --> */}
              </li>

              <li class="user">
                <div class="dropdown user-dropdown">
                  <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a>
                  <ul class="onhover-show-div">
                    <li><a href="login.html">Login</a></li>
                    <li><a href="register.html">Register</a></li>
                  </ul>
                </div>
              </li>

              <li>
                <div class="dropdown whislist-dropdown">
                  <a href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-heart"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg> <span class="notification-label">0</span></a>
                  <div class="onhover-show-div">
                    <a href="wishlist.html"> <img src="../assets/icons/svg/box.svg" class="img-fluid" alt="box"> </a>
                    <div class="content">
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
                <div class="dropdown shopingbag">
                  <a href="javascript:void(0)" class="cart-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-bag"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg> <span class="notification-label">3</span></a>
                  <a href="javascript:void(0)" class="overlay-cart overlay-common"></a>
                  <div class="onhover-cart-dropdown">
                    <div class="onhover-show-div">
                      <div class="dropdown-header">
                        <div class="control">
                          <a href="cart.html">Shopping Cart</a>
                          <button class="back-cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></button>
                        </div>
                      </div>

                      <div class="card-wrap custom-scroll">
                        <!-- Cart Item Start -->
                        <div class="cart-card media">
                          <a href="product.html"> <img src="../assets/images/fashion/product/front/8.jpg" class="img-fluid" alt="product"> </a>
                          <div class="media-body">
                            <a href="product.html"> <h6>Concrete Jungle Pack</h6></a>
                            <span>$120.00</span>
                            <div class="plus-minus">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus sub"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                              <input type="number" value="1" min="1" max="10">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus add"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                          </div>
                          <button class="remove-cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                        </div>
                        {/* <!-- Cart Item End -->

                        <!-- Cart Item Start --> */}
                        <div class="cart-card media">
                          <a href="product.html"> <img src="../assets/images/fashion/product/front/9.jpg" class="img-fluid" alt="product"> </a>
                          <div class="media-body">
                            <a href="product.html"> <h6>Concrete Jungle Pack</h6></a>
                            <span>$120.00</span>
                            <div class="plus-minus">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus sub"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                              <input type="number" value="1" min="1" max="10">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus add"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                          </div>
                          <button class="remove-cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                        </div>
                        {/* <!-- Cart Item End -->

                        <!-- Cart Item Start --> */}
                        <div class="cart-card media">
                          <a href="product.html"> <img src="../assets/images/fashion/product/front/7.jpg" class="img-fluid" alt="product"> </a>
                          <div class="media-body">
                            <a href="product.html"> <h6>Concrete Jungle Pack</h6></a>
                            <span>$120.00</span>
                            <div class="plus-minus">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-minus sub"><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                              <input type="number" value="1" min="1" max="10">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus add"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                            </div>
                          </div>
                          <button class="remove-cart"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></button>
                        </div>
                        {/* <!-- Cart Item End --> */}
                      </div>
                      <div class="dropdown-footer">
                        <div class="freedelevery">
                          <p class="terms-condition">FREE SHIPPING! Continue Shopping to add more product to you cart and receive free shipping for orders over <strong>$500</strong></p>
                          <div class="progress">
                            <div class="progress-bar" role="progressbar" style="width: 70%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                          </div>
                        </div>
                        <div class="total-price">
                          <span>Total</span>
                          <span>$450</span>
                        </div>

                        <div class="btn-group block-group">
                          <a href="cart.html" class="btn-solid">View Cart</a>
                          <a href="payment.html" class="btn-outline">Checkout</a>
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
