/**
 * Using a custom _app.js with next-seo you can set default SEO
 * that will apply to every page. Full info on how the default works
 * can be found here: https://github.com/garmeeh/next-seo#default-seo-configuration
 */
import { DefaultSeo } from "next-seo";

import SEO from "../next-seo.config";
import styledComponents, { ThemeProvider } from "styled-components";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from "../components/footer/Footer.js";

const theme = {
  colors: {
    primary: "#071E56",
    h1: "#192733",
    h2: "#192733",
    h3: "#192733",
    h4: "#192733",
    p: "#192733",
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    /* Here we call NextSeo and pass our default configuration to it  */
    <>
      <Homepage>
        <Navbar />
        <DefaultSeo {...SEO} />
        <Layout>
          <ThemeProvider theme={theme}>
            <Component {...pageProps} />
          </ThemeProvider>
        </Layout>
        <Footer />
      </Homepage>
    </>
  );
}

export const Homepage = styledComponents.div`
display: grid;
grid-template-columns: repeat(12, 1fr);
gap: 2vw;
width:100%;
margin:auto;
}

`;
