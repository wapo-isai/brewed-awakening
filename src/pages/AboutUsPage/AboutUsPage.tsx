import React from "react";
import styles from "./AboutUsPage.module.css";
import Aside from "../../components/Aside/Aside";
import Mascot from "../../assets/mascot-2.webp";

function AboutUsPage() {
  return (
    <div className={styles.aboutUsGrid}>
      <Aside />
      <div className={styles.aboutUsBody}>
        <h1>About us</h1>
        <p>
          Welcome to Brew Haven, where quality meets passion in every cup. Our
          journey began over a decade ago with a simple idea: to create a coffee
          shop where people could connect, unwind, and enjoy coffee that's as
          much a work of art as it is a daily ritual. Our founders, Isai and
          Martin, were inspired by their travels to the coffee-growing regions
          of South America and Africa. They wanted to bring the same dedication
          to quality and authenticity they experienced abroad back to their
          community.
        </p>
        <div className={styles.imgContainer}>
          <img src={Mascot} />
        </div>
        <p>
          At Brew Haven, we believe in sourcing the best coffee beans from
          sustainable and ethical farms. Our relationships with local farmers
          and cooperatives ensure that we get the finest beans while supporting
          the communities that produce them. We roast our beans in-house,
          allowing us to maintain control over the roasting process and create
          unique blends that highlight the distinct flavors of each origin. From
          our Sunrise Roast to our Velvet Mocha, every coffee is crafted with
          care and attention to detail.
        </p>
        <p>
          Integrity and community are at the heart of Brew Haven. We work
          closely with local artisans to create a warm, inviting space that
          reflects the values of our neighborhood. Our baristas are trained to
          understand the nuances of each coffee, and they take pride in sharing
          their knowledge with customers. Whether you're a seasoned coffee
          connoisseur or just looking for a cozy spot to relax, Brew Haven is
          your home away from home. Join us for a cup of coffee, and you'll see
          why our customers keep coming back.
        </p>
      </div>
    </div>
  );
}

export default AboutUsPage;
