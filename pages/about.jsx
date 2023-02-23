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
            backgroundImage: "url(https://via.placeholder.com/1920x400)",
          }}
        >
          <div className="auto-container">
            <h1>About Us</h1>
            <ul className="page-breadcrumb">
              <li>
                <a href="index.html">home</a>
              </li>
              <li>About Us</li>
            </ul>
          </div>
        </section>
        {/*End Page Title*/}
      </div>
    </>
  );
};

export default About;
