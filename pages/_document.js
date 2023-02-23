import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      })

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html>
        <Head>
        <meta charSet="utf-8" />
   

         {/* Stylesheets  */}
    <link href="css/bootstrap.css" rel="stylesheet" />
    <link
      href="plugins/revolution/css/settings.css"
      rel="stylesheet"
      type="text/css"
    />
         {/* REVOLUTION SETTINGS STYLES  */}
    <link
      href="plugins/revolution/css/layers.css"
      rel="stylesheet"
      type="text/css"
    />
         {/* REVOLUTION LAYERS STYLES  */}
    <link
      href="plugins/revolution/css/navigation.css"
      rel="stylesheet"
      type="text/css"
    />
         {/* REVOLUTION NAVIGATION STYLES */}

    <link href="css/style.css" rel="stylesheet" />
    <link href="css/responsive.css" rel="stylesheet" />

    <link rel="shortcut icon" href="images/favicon.png" type="image/x-icon" />
    <link rel="icon" href="images/favicon.png" type="image/x-icon" />

        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="js/jquery.js"></script>
          <script src="js/popper.min.js"></script>
          <script src="js/bootstrap.min.js"></script>
            {/* Revolution Slider */}
            <script src="plugins/revolution/js/jquery.themepunch.revolution.min.js"></script>
            <script src="plugins/revolution/js/jquery.themepunch.tools.min.js"></script>
            <script src="plugins/revolution/js/extensions/revolution.extension.actions.min.js"></script>
            <script src="plugins/revolution/js/extensions/revolution.extension.carousel.min.js"></script>
            <script src="plugins/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
            <script src="plugins/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
            <script src="plugins/revolution/js/extensions/revolution.extension.migration.min.js"></script>
            <script src="plugins/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
            <script src="plugins/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
            <script src="plugins/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
            <script src="plugins/revolution/js/extensions/revolution.extension.video.min.js"></script>
            <script src="js/main-slider-script.js"></script>
        {/* Revolution Slider */}
            <script src="js/jquery.fancybox.js"></script>
            <script src="js/owl.js"></script>
            <script src="js/wow.js"></script>
            <script src="js/appear.js"></script>
            <script src="js/script.js"></script>
        </body>
      </Html>
    )
  }
}

export default MyDocument