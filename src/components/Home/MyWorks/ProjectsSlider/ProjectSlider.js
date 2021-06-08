import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "./ProjectSlider.css";

// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import ProjectCard from "../../../ProjectCard/ProjectCard";

//---------------------------------Datas-------------------------------------
const projects = [
  {
    pName: "Explore Teams",
    pFunctions: {
      f1: "Multi teams portfolio",
      f2: "React router, Material-UI",
      f3: "Calls api and dynamically shoes data.",
    },

    pImage:
      "https://i.ibb.co/NL2J85c/screenshot-604a41c550d9dc1c27ff9467-upbeat-hawking-366714-netlify-app-2021-05-03-14-14-45.png",
    pDetails: "",
    pLive:
      "https://604a41c550d9dc1c27ff9467--upbeat-hawking-366714.netlify.app/",
    pGit: "https://github.com/Ruhan-quick/Explore-Teams",
    pTools: "",
  },
  {
    pName: "Dev-Support",
    pFunctions: {
      f1: "Instan't support request.",
      f2: "MongoDB, Express, React, Node",
      f3: "Secured Admin panel to manage services",
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
      f1: "Safe Medicine order",
      f2: "Firebase, MongoDB, React",
      f3: "Admin panel to add/delete medicines.",
    },

    pImage: "https://i.ibb.co/xsdbPDN/Fast-Medicine.png",
    pDetails: "",
    pLive: "https://fastmedicine-2f70a.web.app/",
    pGit: "https://github.com/Ruhan-quick/fast-medicine-client",
    pTools: "",
  },
  {
    pName: "Hi-Coder",
    pFunctions: {
      f1: "Just frontend design",
      f2: "React based",
      f3: "Functional component based decoration",
    },
    pImage:
      "https://i.ibb.co/Thr6bKD/screenshot-vibrant-dubinsky-37ab5f-netlify-app-2021-06-04-11-24-43.png",
    pDetails: "",
    pLive: "https://vibrant-dubinsky-37ab5f.netlify.app/",
    pGit: "https://github.com/Ruhan-quick/hi-coder-clone-client",
    pTools: "",
  },
  {
    pName: "Trek-Tracker",
    pFunctions: {
      f1: "Routing Routs of journey",
      f2: "React based",
      f3: "Functional component based decoration",
    },
    pImage:
      "https://i.ibb.co/xsvb9fr/screenshot-localhost-3000-2021-06-04-11-40-39.png",
    pDetails: "",
    pLive: "https://react-auth-ruhan-quick.web.app/",
    pGit: "https://github.com/Ruhan-quick/trek-tracker",
    pTools: "",
  },
];

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const ProjectSlider = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        initialSlide={"2"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
          initialSlide: 3,
        }}
        pagination={true}
        className="mySwiper edit-swiper"
        // style={{ height: "60vh" }}
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

export default ProjectSlider;
