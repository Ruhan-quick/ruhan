import React from "react";
import EarnedSkills from "../EarnedSkills/EarnedSkills";
import Footer from "../Footer/Footer";

import Banner from "../Header/Banner/Banner";
import Header from "../Header/Header";
import HomeMyWorks from "../HomeMyWorks/HomeMyWorks";
import MySelf from "../MySelf/MySelf";

const Home = () => {
  return (
    <>
      <Header></Header>
      <MySelf></MySelf>
      <EarnedSkills></EarnedSkills>

      {/* <HomeMyWorks></HomeMyWorks> */}
      <Footer></Footer>
    </>
  );
};

export default Home;
