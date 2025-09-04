import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Arooj Solutions - Cybersecurity & AI Services in Saudi Arabia",
  description:
    "Arooj Solutions provides end-to-end cybersecurity and AI solutions in Saudi Arabia. Protect your digital assets, ensure NCA compliance, and leverage AI for business growth aligned with Vision 2030.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/images/as.ico" />

        {/* Links of CSS files */}
        <link rel="stylesheet" href="css/bootstrap.rtl.min.css" />
        <link rel="stylesheet" href="css/aos.css" />
        <link rel="stylesheet" href="css/animate.min.css" />
        <link rel="stylesheet" href="css/meanmenu.css" />
        <link rel="stylesheet" href="css/remixicon.css" />
        <link rel="stylesheet" href="css/odometer.min.css" />
        <link rel="stylesheet" href="css/owl.carousel.min.css" />
        <link rel="stylesheet" href="css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="css/magnific-popup.min.css" />
        <link rel="stylesheet" href="css/fancybox.css" />
        <link rel="stylesheet" href="css/nice-select.min.css" />
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/navbar.css" />
        <link rel="stylesheet" href="css/footer.css" />
        <link rel="stylesheet" href="css/dark.css" />
        <link rel="stylesheet" href="css/responsive.css" />
        <link rel="stylesheet" href="css/rtl.css" />

        {/* Microsoft Clarity Script - Updated with new ID */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "t5hr4n2egd");
          `}
        </Script>
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <Script data-cfasync="false" src="js/email-decode.min.js"></Script>
        <Script src="js/jquery.min.js"></Script>
        <Script src="js/bootstrap.bundle.min.js"></Script>
        <Script src="js/jquery.meanmenu.js"></Script>
        <Script src="js/owl.carousel.min.js"></Script>
        <Script src="js/jquery.appear.js"></Script>
        <Script src="js/odometer.min.js"></Script>
        <Script src="js/jquery.magnific-popup.min.js"></Script>
        <Script src="js/fancybox.min.js"></Script>
        <Script src="js/tweenmax.min.js"></Script>
        <Script src="js/ScrollMagic.min.js"></Script>
        <Script src="js/animation.gsap.min.js"></Script>
        <Script src="js/debug.addIndicators.min.js"></Script>
        <Script src="js/mixitup.min.js"></Script>
        <Script src="js/nice-select.min.js"></Script>
        <Script src="js/tilt.jquery.min.js"></Script>
        <Script src="js/parallax.min.js"></Script>
        <Script src="js/jquery.ajaxchimp.min.js"></Script>
        <Script src="js/form-validator.min.js"></Script>
        <Script src="js/contact-form-script.js"></Script>
        <Script src="js/aos.js"></Script>
        <Script src="js/wow.min.js"></Script>
        <Script src="js/main.js"></Script>
      </body>
    </html>
  );
}