import { NextSeo } from "next-seo";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Button } from "../components/Button.styled";
import { H1 } from "../components/H1.styled";
import HomePage from "../components/HomePage";
import Features from "../components/Features";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <NextSeo
        title="Page Meta Title"
        description="This will be the page meta description"
        canonical="https://www.canonicalurl.ie/"
        openGraph={{
          url: "https://www.canonicalurl.ie/",
          title: "Open Graph Title",
          description: "Open Graph Description",
          images: [
            {
              url: "https://www.example.ie/og-image-01.jpg",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
            },
            {
              url: "https://www.example.ie/og-image-02.jpg",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
            },
            { url: "https://www.example.ie/og-image-03.jpg" },
            { url: "https://www.example.ie/og-image-04.jpg" },
          ],
        }}
      />
      {/* <h1>SEO Added to Page</h1>
      <p>Take a look at the head to see what has been added.</p>
      <p>
        Or checkout how{' '}
        <Link href="/jsonld">
          <a>JSON-LD</a>
        </Link>{' '}
        (Structured Data) is added
      </p> */}

      {/* <nav className={styles.mainNav}>
        <div>
          <h1>MakeItPolitical.com</h1>
        </div>
        <div>
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Archive</li>
            <li>Youtube</li>
            <li>
              <Button>Join free</Button>
            </li>
          </ul>
        </div>
      </nav> */}
      <HomePage />
      {/* <Features />
      <Footer /> */}
    </div>
  );
}
