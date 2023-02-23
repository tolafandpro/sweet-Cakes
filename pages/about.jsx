// import { Link } from "next/link";
import Image from "next/image";
import pageHeaderBg from "../public/images/background/34.jpg";
import section1bg from "../public/images/background/36.jpg";
import section2bg from "../public/images/background/37.jpg";
import section3bg from "../public/images/background/38.jpg";
import section4bg from "../public/images/background/3.jpg";
import section5bg from "../public/images/background/39.jpg";
import chefImg from "../public/images/resource/old_man.png";

const About = () => {
  return (
    <>
      <div className="page-wrapper">
        {/* Preloader */}
        <div className="preloader">
          <div className="loader_overlay" />
          <div className="loader_cogs">
            <div className="loader_cogs__top">
              <div className="top_part" />
              <div className="top_part" />
              <div className="top_part" />
              <div className="top_hole" />
            </div>
            <div className="loader_cogs__left">
              <div className="left_part" />
              <div className="left_part" />
              <div className="left_part" />
              <div className="left_hole" />
            </div>
            <div className="loader_cogs__bottom">
              <div className="bottom_part" />
              <div className="bottom_part" />
              <div className="bottom_part" />
              <div className="bottom_hole" />
            </div>
          </div>
        </div>

        {/*Page Title*/}
        <section
          className="page-title"
          style={{
            backgroundImage: `url(${pageHeaderBg.src})`,
          }}
        >
          <div className="auto-container">
            <h1>About Us</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="/">home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </section>
        {/*End Page Title*/}

        {/* About Section Two */}
        <section
          className="about-section-two alternate"
          style={{
            backgroundImage: `url(${section1bg.src})`,
          }}
        >
          <div className="auto-container">
            <div className="sec-title text-center">
              <div className="divider">
                <img src="images/icons/divider_1.png" alt="" />
              </div>
              <h2>Our Story</h2>
            </div>
            <div className="content-box">
              <span className="devider_icon_one" />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse nisi et dolor ornare pellentesque. Nullam porttitor,
                odio id facilisis dapibus, mauris dolor rhoncus elit, ultricies
                nulla eros at dui. In suscipit leo sagittis aliquam. Integer
                tristique tempus urna. et pharetra dui urna volutpat elit odio
                at.
              </p>
            </div>
            <div className="btn-box text-center">
              <a href="#" className="theme-btn btn-style-two regular">
                <span />
                Our Services
                <span />
              </a>
            </div>
          </div>
        </section>
        {/*End About Section */}
        {/* Features Section */}
        <div className="features-section style-two">
          <div className="shape_wrapper shape_one">
            <div
              className="shape_inner shape_two"
              style={{
                backgroundImage: `url(${section2bg.src})`,
              }}
            >
              <div className="overlay" />
            </div>
          </div>
          <div className="auto-container">
            <div className="sec-title text-center light">
              <h2>Our Mission</h2>
              <div className="text">
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Praesent molestie eu turpis nec
                <br /> molestie. Nam auctor magna mauris.
              </div>
            </div>
            <div className="row">
              {/* Feature Block */}
              <div className="feature-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon-frame">
                      <svg x="0px" y="0px" viewBox="0 0 500 500">
                        {" "}
                        <path d="M488.5,274.5L488.5,274.5l1.8-0.5l-2,0.5c-2.4-8.7-4.5-16.9-4.5-24.5c0-8,2.3-16.5,4.7-25.5 c3.5-13,7.1-26.5,3.7-39.5c-3.6-13.2-13.5-23.1-23.1-32.7c-6.5-6.5-12.6-12.6-16.6-19.4c-3.9-6.8-6.1-15.2-8.5-24.1 c-3.5-13.1-7.1-26.7-16.7-36.3c-9.5-9.5-22.9-13.1-35.9-16.6c-9-2.4-17.5-4.6-24.4-8.7c-6.5-3.8-12.5-9.8-18.9-16.2 c-9.7-9.8-19.6-19.8-33.2-23.4c-13.5-3.7-27.3,0.1-40.4,3.7c-8.7,2.4-16.9,4.6-24.5,4.6c-8,0-16.5-2.3-25.5-4.7 c-9.3-2.5-18.8-5-28.1-5c-3.8,0-7.6,0.4-11.3,1.4C172,11.1,162,21.1,152.4,30.7c-6.5,6.5-12.6,12.6-19.4,16.6 c-6.8,3.9-15.2,6.1-24.1,8.5c-13.1,3.5-26.7,7.1-36.3,16.7c-9.5,9.5-13.1,23-16.6,36c-2.4,9-4.6,17.5-8.7,24.4 c-3.8,6.5-9.8,12.5-16.2,18.9c-9.8,9.7-19.7,19.6-23.4,33.2c-3.7,13.5,0.1,27.3,3.7,40.5c2.4,8.7,4.6,16.9,4.6,24.5 c0,8-2.3,16.5-4.6,25.5c-3.5,13-7.1,26.6-3.7,39.5c3.6,13.2,13.5,23.1,23.1,32.7c6.5,6.5,12.6,12.6,16.6,19.4 c3.9,6.8,6.1,15.1,8.5,24c3.5,13.1,7.1,26.8,16.7,36.4c9.5,9.5,23,13.1,35.9,16.6c9,2.4,17.5,4.6,24.4,8.7 c6.5,3.8,12.5,9.8,18.9,16.2c9.7,9.8,19.6,19.8,33.2,23.5c3.8,1,7.6,1.5,11.8,1.5c9.6,0,19.3-2.7,28.5-5.1c8.8-2.4,17-4.6,24.5-4.6 c8,0,16.5,2.3,25.5,4.6c13,3.6,26.6,7.1,39.5,3.7c13.2-3.6,23.1-13.5,32.7-23.1c6.5-6.5,12.6-12.6,19.4-16.6 c6.7-3.9,15.1-6.1,24-8.5c13.1-3.5,26.8-7.1,36.4-16.8c9.5-9.5,13.1-23,16.6-36c2.4-9,4.6-17.5,8.7-24.4c3.8-6.5,9.8-12.5,16.2-18.9 c9.8-9.7,19.9-19.7,23.6-33.3C495.7,301.4,494.4,287.7,488.5,274.5z" />
                      </svg>
                    </div>
                    {/* cake img */}
                    <div className="icon flaticon-technology" />
                  </div>
                  <h3>Tradition</h3>
                  <p>
                    Lorem ipsum dolor amet, consectetur adipiscing elit. Nam
                    consectetur facilisis aliquet.
                  </p>
                </div>
              </div>
              {/* Feature Block */}
              <div className="feature-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon-frame">
                      <svg x="0px" y="0px" viewBox="0 0 500 500">
                        {" "}
                        <path d="M488.5,274.5L488.5,274.5l1.8-0.5l-2,0.5c-2.4-8.7-4.5-16.9-4.5-24.5c0-8,2.3-16.5,4.7-25.5 c3.5-13,7.1-26.5,3.7-39.5c-3.6-13.2-13.5-23.1-23.1-32.7c-6.5-6.5-12.6-12.6-16.6-19.4c-3.9-6.8-6.1-15.2-8.5-24.1 c-3.5-13.1-7.1-26.7-16.7-36.3c-9.5-9.5-22.9-13.1-35.9-16.6c-9-2.4-17.5-4.6-24.4-8.7c-6.5-3.8-12.5-9.8-18.9-16.2 c-9.7-9.8-19.6-19.8-33.2-23.4c-13.5-3.7-27.3,0.1-40.4,3.7c-8.7,2.4-16.9,4.6-24.5,4.6c-8,0-16.5-2.3-25.5-4.7 c-9.3-2.5-18.8-5-28.1-5c-3.8,0-7.6,0.4-11.3,1.4C172,11.1,162,21.1,152.4,30.7c-6.5,6.5-12.6,12.6-19.4,16.6 c-6.8,3.9-15.2,6.1-24.1,8.5c-13.1,3.5-26.7,7.1-36.3,16.7c-9.5,9.5-13.1,23-16.6,36c-2.4,9-4.6,17.5-8.7,24.4 c-3.8,6.5-9.8,12.5-16.2,18.9c-9.8,9.7-19.7,19.6-23.4,33.2c-3.7,13.5,0.1,27.3,3.7,40.5c2.4,8.7,4.6,16.9,4.6,24.5 c0,8-2.3,16.5-4.6,25.5c-3.5,13-7.1,26.6-3.7,39.5c3.6,13.2,13.5,23.1,23.1,32.7c6.5,6.5,12.6,12.6,16.6,19.4 c3.9,6.8,6.1,15.1,8.5,24c3.5,13.1,7.1,26.8,16.7,36.4c9.5,9.5,23,13.1,35.9,16.6c9,2.4,17.5,4.6,24.4,8.7 c6.5,3.8,12.5,9.8,18.9,16.2c9.7,9.8,19.6,19.8,33.2,23.5c3.8,1,7.6,1.5,11.8,1.5c9.6,0,19.3-2.7,28.5-5.1c8.8-2.4,17-4.6,24.5-4.6 c8,0,16.5,2.3,25.5,4.6c13,3.6,26.6,7.1,39.5,3.7c13.2-3.6,23.1-13.5,32.7-23.1c6.5-6.5,12.6-12.6,19.4-16.6 c6.7-3.9,15.1-6.1,24-8.5c13.1-3.5,26.8-7.1,36.4-16.8c9.5-9.5,13.1-23,16.6-36c2.4-9,4.6-17.5,8.7-24.4c3.8-6.5,9.8-12.5,16.2-18.9 c9.8-9.7,19.9-19.7,23.6-33.3C495.7,301.4,494.4,287.7,488.5,274.5z" />
                      </svg>
                    </div>
                    {/* cake img */}
                    <div className="icon flaticon-food-7" />
                  </div>
                  <h3>Quality</h3>
                  <p>
                    Amet interdum, diam molestie fusce natoque, nascetur laoreet
                    mattis cras hendrerit.
                  </p>
                </div>
              </div>
              {/* Feature Block */}
              <div className="feature-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon-frame">
                      <svg x="0px" y="0px" viewBox="0 0 500 500">
                        {" "}
                        <path d="M488.5,274.5L488.5,274.5l1.8-0.5l-2,0.5c-2.4-8.7-4.5-16.9-4.5-24.5c0-8,2.3-16.5,4.7-25.5 c3.5-13,7.1-26.5,3.7-39.5c-3.6-13.2-13.5-23.1-23.1-32.7c-6.5-6.5-12.6-12.6-16.6-19.4c-3.9-6.8-6.1-15.2-8.5-24.1 c-3.5-13.1-7.1-26.7-16.7-36.3c-9.5-9.5-22.9-13.1-35.9-16.6c-9-2.4-17.5-4.6-24.4-8.7c-6.5-3.8-12.5-9.8-18.9-16.2 c-9.7-9.8-19.6-19.8-33.2-23.4c-13.5-3.7-27.3,0.1-40.4,3.7c-8.7,2.4-16.9,4.6-24.5,4.6c-8,0-16.5-2.3-25.5-4.7 c-9.3-2.5-18.8-5-28.1-5c-3.8,0-7.6,0.4-11.3,1.4C172,11.1,162,21.1,152.4,30.7c-6.5,6.5-12.6,12.6-19.4,16.6 c-6.8,3.9-15.2,6.1-24.1,8.5c-13.1,3.5-26.7,7.1-36.3,16.7c-9.5,9.5-13.1,23-16.6,36c-2.4,9-4.6,17.5-8.7,24.4 c-3.8,6.5-9.8,12.5-16.2,18.9c-9.8,9.7-19.7,19.6-23.4,33.2c-3.7,13.5,0.1,27.3,3.7,40.5c2.4,8.7,4.6,16.9,4.6,24.5 c0,8-2.3,16.5-4.6,25.5c-3.5,13-7.1,26.6-3.7,39.5c3.6,13.2,13.5,23.1,23.1,32.7c6.5,6.5,12.6,12.6,16.6,19.4 c3.9,6.8,6.1,15.1,8.5,24c3.5,13.1,7.1,26.8,16.7,36.4c9.5,9.5,23,13.1,35.9,16.6c9,2.4,17.5,4.6,24.4,8.7 c6.5,3.8,12.5,9.8,18.9,16.2c9.7,9.8,19.6,19.8,33.2,23.5c3.8,1,7.6,1.5,11.8,1.5c9.6,0,19.3-2.7,28.5-5.1c8.8-2.4,17-4.6,24.5-4.6 c8,0,16.5,2.3,25.5,4.6c13,3.6,26.6,7.1,39.5,3.7c13.2-3.6,23.1-13.5,32.7-23.1c6.5-6.5,12.6-12.6,19.4-16.6 c6.7-3.9,15.1-6.1,24-8.5c13.1-3.5,26.8-7.1,36.4-16.8c9.5-9.5,13.1-23,16.6-36c2.4-9,4.6-17.5,8.7-24.4c3.8-6.5,9.8-12.5,16.2-18.9 c9.8-9.7,19.9-19.7,23.6-33.3C495.7,301.4,494.4,287.7,488.5,274.5z" />
                      </svg>
                    </div>
                    {/* cake img */}
                    <div className="icon flaticon-strawberry" />
                  </div>
                  <h3>Creatuvity</h3>
                  <p>
                    Ullamcorper phasellus per vestibulum, lacus curabitur,
                    rutrum mi fringilla.
                  </p>
                </div>
              </div>
              {/* Feature Block */}
              <div className="feature-block col-lg-3 col-md-6 col-sm-12">
                <div className="inner-box">
                  <div className="icon-box">
                    <div className="icon-frame">
                      <svg x="0px" y="0px" viewBox="0 0 500 500">
                        {" "}
                        <path d="M488.5,274.5L488.5,274.5l1.8-0.5l-2,0.5c-2.4-8.7-4.5-16.9-4.5-24.5c0-8,2.3-16.5,4.7-25.5 c3.5-13,7.1-26.5,3.7-39.5c-3.6-13.2-13.5-23.1-23.1-32.7c-6.5-6.5-12.6-12.6-16.6-19.4c-3.9-6.8-6.1-15.2-8.5-24.1 c-3.5-13.1-7.1-26.7-16.7-36.3c-9.5-9.5-22.9-13.1-35.9-16.6c-9-2.4-17.5-4.6-24.4-8.7c-6.5-3.8-12.5-9.8-18.9-16.2 c-9.7-9.8-19.6-19.8-33.2-23.4c-13.5-3.7-27.3,0.1-40.4,3.7c-8.7,2.4-16.9,4.6-24.5,4.6c-8,0-16.5-2.3-25.5-4.7 c-9.3-2.5-18.8-5-28.1-5c-3.8,0-7.6,0.4-11.3,1.4C172,11.1,162,21.1,152.4,30.7c-6.5,6.5-12.6,12.6-19.4,16.6 c-6.8,3.9-15.2,6.1-24.1,8.5c-13.1,3.5-26.7,7.1-36.3,16.7c-9.5,9.5-13.1,23-16.6,36c-2.4,9-4.6,17.5-8.7,24.4 c-3.8,6.5-9.8,12.5-16.2,18.9c-9.8,9.7-19.7,19.6-23.4,33.2c-3.7,13.5,0.1,27.3,3.7,40.5c2.4,8.7,4.6,16.9,4.6,24.5 c0,8-2.3,16.5-4.6,25.5c-3.5,13-7.1,26.6-3.7,39.5c3.6,13.2,13.5,23.1,23.1,32.7c6.5,6.5,12.6,12.6,16.6,19.4 c3.9,6.8,6.1,15.1,8.5,24c3.5,13.1,7.1,26.8,16.7,36.4c9.5,9.5,23,13.1,35.9,16.6c9,2.4,17.5,4.6,24.4,8.7 c6.5,3.8,12.5,9.8,18.9,16.2c9.7,9.8,19.6,19.8,33.2,23.5c3.8,1,7.6,1.5,11.8,1.5c9.6,0,19.3-2.7,28.5-5.1c8.8-2.4,17-4.6,24.5-4.6 c8,0,16.5,2.3,25.5,4.6c13,3.6,26.6,7.1,39.5,3.7c13.2-3.6,23.1-13.5,32.7-23.1c6.5-6.5,12.6-12.6,19.4-16.6 c6.7-3.9,15.1-6.1,24-8.5c13.1-3.5,26.8-7.1,36.4-16.8c9.5-9.5,13.1-23,16.6-36c2.4-9,4.6-17.5,8.7-24.4c3.8-6.5,9.8-12.5,16.2-18.9 c9.8-9.7,19.9-19.7,23.6-33.3C495.7,301.4,494.4,287.7,488.5,274.5z" />
                      </svg>
                    </div>
                    {/* cake img */}
                    <div className="icon flaticon-food-1" />
                  </div>
                  <h3>Passion</h3>
                  <p>
                    Leo sem, justo hymenaeos torquent tristique aliquam et id,
                    ante eu nascetur dis sit enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Features Section */}
        {/* Chef Section */}
        <section
          className="chef-section"
          style={{
            backgroundImage: `url(${section3bg.src})`,
          }}
        >
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <div className="content">
                    <div className="sec-title text-center">
                      <div className="divider">
                        <Image
                          src="/images/icons/divider_1.png"
                          width={177}
                          height={40}
                          alt="icon-divider"
                        />
                      </div>
                      <h2>Fadairo Funmi</h2>
                    </div>
                    <h4>Masterchef</h4>
                    <div className="divider">
                      <Image
                        src="/images/icons/icon-devider.png"
                        width={164}
                        height={78}
                        alt=""
                      />
                    </div>
                    <p>
                      Maria is a Roman-born pastry chef who spent 15 years in
                      his city Rome perfecting his craft and exceptional
                      creations. Vestibulum rhoncus ornare tincidunt. Etiam
                      pretium metus sit amet est aliquet vulputate. Fusce et
                      cursus ligula. Sed accumsan dictum porta. Aliquam rutrum
                      ullamcorper velit hendrerit convallis.
                    </p>
                    <div className="btn-box">
                      <a
                        href="#"
                        className="theme-btn btn-style-two regular alt"
                      >
                        <span />
                        Our Services
                        <span />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <figure className="image">
                    <Image src={chefImg} alt="chefimage" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Chef Section */}
        {/* Testimonial Section */}
        <section className="testimonial-section style-two">
          <div className="shape_wrapper shape_one">
            <div
              className="shape_inner shape_two"
              style={{
                backgroundImage: `url(${section4bg.src})`,
              }}
            >
              <div className="overlay" />
            </div>
          </div>
          <div className="auto-container">
            <div className="sec-title light text-center">
              <h2>Our Bakery</h2>
            </div>
            {/* Testimonial Carousel */}
            <div className="testimonial-carousel owl-carousel owl-theme">
              {/* Testimonial Block */}
              <div className="testimonial-block">
                <div className="inner-box">
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vel sem imperdiet, venenatis eros ac,mattis mauris.
                    Nam ac purus justo. Vivamus non hendrerit velit.
                  </div>
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block">
                <div className="inner-box">
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vel sem imperdiet, venenatis eros ac,mattis mauris.
                    Nam ac purus justo. Vivamus non hendrerit velit.
                  </div>
                </div>
              </div>
              {/* Testimonial Block */}
              <div className="testimonial-block">
                <div className="inner-box">
                  <div className="text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Integer vel sem imperdiet, venenatis eros ac,mattis mauris.
                    Nam ac purus justo. Vivamus non hendrerit velit.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*End Testimonial Section */}
        {/* Our Standards */}
        <section
          className="our-standards"
          style={{
            backgroundImage: `url(${section5bg.src})`,
          }}
        >
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="content">
                  <div className="sec-title text-center">
                    <div className="divider">
                      <img src="images/icons/divider_1.png" alt="" />
                    </div>
                    <h2>Our Standarts</h2>
                  </div>
                  <div className="divider">
                    <img src="images/icons/icon-devider.png" alt="" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    suspendisse
                  </p>
                  <span className="icon fa fa-heart" />
                  <p>
                    Nullam porttitor, odio id facilisis dapibus, mauris dolor
                    rhoncus elit
                  </p>
                  <span className="icon fa fa-heart" />
                  <p>
                    In suscipit hendrerit leo sagittis aliquam. Integer
                    tristique tempus urna
                  </p>
                  <span className="icon fa fa-heart" />
                  <p>
                    Proin id enim euismod ultricies magna sed ultrices mauris
                  </p>
                  <span className="icon fa fa-heart" />
                  <p>
                    Proin interdum enim ac placerat egestas mauris massa
                    scelerisque
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Our Standards */}
      </div>
    </>
  );
};

export default About;
