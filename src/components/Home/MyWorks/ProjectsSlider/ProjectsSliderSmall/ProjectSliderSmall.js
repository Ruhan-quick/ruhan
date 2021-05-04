import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-cube/effect-cube.min.css";
import "swiper/components/pagination/pagination.min.css";

import "./ProjectSliderSmall.css";

// import Swiper core and required modules
import SwiperCore, { EffectCube, Pagination } from "swiper/core";
import ProjectCard from "../../../../ProjectCard/ProjectCard";
//Project Slider--------------------------------
const projects = [
  {
    pName: "Explore Teams",
    pFunctions: {
      f1: "Lorem ipsum dolor sit.",
      f2: "Lorem ipsum dolor sit amet.",
      f3: "Lorem ipsum dolor sit amet consectetur.",
    },

    pImage:
      "https://i.ibb.co/NL2J85c/screenshot-604a41c550d9dc1c27ff9467-upbeat-hawking-366714-netlify-app-2021-05-03-14-14-45.png",
    pDetails: "",
    pLive:
      "https://604a41c550d9dc1c27ff9467--upbeat-hawking-366714.netlify.app/",
    pGit: "",
    pTools: "",
  },
  {
    pName: "Dev-Support",
    pFunctions: {
      f1: "Lorem ipsum dolor sit.",
      f2: "Lorem ipsum dolor sit amet.",
      f3: "Lorem ipsum dolor sit amet consectetur.",
    },
    pImage: "https://i.ibb.co/5106rzk/dev-support-2.png",
    pDetails: "",
    pLive: "https://dev-support-d0da3.web.app/",
    pGit: "",
    pTools: "",
  },
  {
    pName: "Fast Medicine",
    pFunctions: {
      f1: "Lorem ipsum dolor sit.",
      f2: "Lorem ipsum dolor sit amet.",
      f3: "Lorem ipsum dolor sit amet consectetur.",
    },

    pImage: "https://i.ibb.co/xsdbPDN/Fast-Medicine.png",
    pDetails: "",
    pLive: "https://fastmedicine-2f70a.web.app/",
    pGit: "",
    pTools: "",
  },
  {
    pName: "Fast Medicine",
    pFunctions: {
      f1: "Lorem ipsum dolor sit.",
      f2: "Lorem ipsum dolor sit amet.",
      f3: "Lorem ipsum dolor sit amet consectetur.",
    },
    pImage: "https://i.ibb.co/xsdbPDN/Fast-Medicine.png",
    pDetails: "",
    pLive: "",
    pGit: "",
    pTools: "",
  },
];
// install Swiper modules
SwiperCore.use([EffectCube, Pagination]);
const ProjectSliderSmall = () => {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: false,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        pagination={true}
        className="mySwiper"
        id="smallSlider"
        style={{ paddingBottom: "60px", paddingTop: "25px" }}
      >
        {projects.map((ps) => (
          <SwiperSlide>
            <ProjectCard
              pName={ps.pName}
              pImage={ps.pImage}
              pFunctions={ps.pFunctions}
              pLive={ps.pLive}
            ></ProjectCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProjectSliderSmall;
