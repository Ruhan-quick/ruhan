import React, { useState } from 'react';
import Footer from '../Home/Footer/Footer';
import NavBar from '../Home/Header/NavBar/NavBar';
import './Blogs.css';
const Blogs = () => {
  const [showM1, setShowM1] = useState(false);
  const [showM2, setShowM2] = useState(false);
  return (
    <div>
      <NavBar></NavBar>
      <section
        class="banner"
        style={{
          paddingLeft: '40px',
          paddingRight: '40px',
          background: '#000',
          color: '#fff',
        }}
      >
        <div class="row banner2-box">
          <div class="col-lg-8 col-md-11 col-sm-12 col-xl-7 mx-auto">
            <h1 class="banner2-head">Read and Enhance your Knowledge.</h1>
            <h3 class="banner2-text text-secondary">
              Reading is crucial in software development. It helps developers
              learn new technologies, understand codebases, find solutions, and
              follow best practices. It is essential for using APIs and
              libraries, ensuring security and compliance, and improving
              communication within teams. Reading facilitates continuous
              learning and self-improvement, making it a fundamental skill for
              every developer.
            </h3>
          </div>
        </div>
        <hr />

        <div class="row blog-box">
          <div class="col-lg-6 col-md-12 col-sm-12 detail-box">
            <h5>Date: 26/07/2023</h5>
            <h5>Writer: Chat-GPT</h5>
            <h1>Popular Frame Templates</h1>
            <p class="blog-text">
              React's future appears promising, with its widespread adoption and
              continuous growth as a dominant player in frontend development.
              The React team, along with the open-source community, will likely
              continue to enhance the framework, introducing new features,
              optimizations, and improvements. React Native, the mobile app
              development framework based on React, will also continue to gain
              traction. As web applications become more complex, React's focus
              on performance optimization will remain essential. Moreover,
              React's flexible nature will enable seamless integration with
              other technologies, encouraging innovation and collaboration
              within the community. Overall, React's strong foundation and
              active support make it likely to maintain its significance in the
              frontend development space for the foreseeable future.
            </p>
            {showM1 && (
              <p class="blog-text" id="hidden-text1">
                As of September 2021, the latest features in React included
                React 18 Alpha with improvements in Concurrent Mode and Server
                Components, a new JSX Transform, and new hooks like
                useDeferredValue(), startTransition(), and useTransition().
                React Refresh also replaced Hot Module Replacement (HMR) for a
                better development experience. Keep in mind that newer updates
                might have been released beyond that date. For the latest
                information, refer to the official React documentation and
                GitHub repository.
              </p>
            )}
            {/* style={{ display: 'none' }} */}
            {!showM1 && (
              <button
                onClick={() => {
                  setShowM1(!showM1);
                }}
                class="blog-button"
              >
                Show More
              </button>
            )}
            {showM1 && (
              <button
                onClick={() => {
                  setShowM1(!showM1);
                }}
                class="blog-button"
              >
                Show Less
              </button>
            )}
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 blog-image-box">
            <img
              style={{ borderRadius: '20px' }}
              class="blog-image"
              src="https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-light_1200x628.png?sfvrsn=43eb5f2a_2"
              alt=""
            />
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 blog-image-box">
            <img
              style={{ borderRadius: '20px' }}
              class="blog-image"
              src="https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png"
              alt=""
            />
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 detail-box">
            <h5>Date: 26/07/2023</h5>
            <h5>Writer: Chat-GPT</h5>
            <h1>Popular Frame Templates</h1>
            <p class="blog-text">
              The future of Node.js looks promising, with continued growth,
              improved performance, and support for the latest ECMAScript
              standards. It is likely to see increased usage in IoT, edge
              computing, and microservices architectures. Node.js will focus on
              security, stability, and innovations in tooling and DevOps
              practices. The Node.js Foundation's collaborative efforts will
              further support its growth and development. However, the software
              industry is dynamic, so ongoing contributions from the community
              will shape Node.js' future. Stay updated through official Node.js
              channels for the latest developments.
            </p>{' '}
            {showM2 && (
              <p class="blog-text" id="hidden-text2">
                Node.js 16's latest features included an update to the V8
                engine, npm 7 integration, AbortController support, pinned
                dependencies in package-lock.json, async local storage, timers
                promises API, and prebuilt binaries with arm64 support. For the
                most recent updates, check the official Node.js website and
                release notes.
              </p>
            )}
            {!showM2 && (
              <button
                onClick={() => {
                  setShowM2(!showM2);
                }}
                class="blog-button"
              >
                Show More
              </button>
            )}
            {showM2 && (
              <button
                onClick={() => {
                  setShowM2(!showM2);
                }}
                class="blog-button"
              >
                Show Less
              </button>
            )}
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 detail-box">
            {/* <h5>Date</h5>
            <h1>Popular Frame Templates</h1>
            <p class="blog-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              perferendis sunt iste illo illum eum perspiciatis quo quod odio!
              Laboriosam quo sit ut nisi suscipit dicta earum optio ratione
              ipsum necessitatibus saepe magnam veritatis perferendis molestias
              aliquam cumque hic, dolores soluta culpa odio nam dolor. Eos quasi
              necessitatibus reprehenderit sit.
            </p> */}
            {/* <button class="blog-button">Learn More</button> */}
          </div>
          {/* <div class="col-lg-6 col-md-12 col-sm-12 blog-image-box">
            <img
              class="blog-image"
              src="https://magazine.xpert.tv/wp-content/uploads/2020/05/1589723615240.jpg"
              alt=""
            />
          </div>
        </div>

        <div class="row banner2-box">
          <div class="col-lg-8 col-md-11 col-sm-12 col-xl-7 mx-auto">
            <h1 class="banner2-head">Lates't Blogs from Popular Bloger</h1>
            <h3 class="banner2-text text-secondary">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quia!
              Lorem ipsum dolor sit amet.
            </h3>
          </div>
        </div>
        <div class="popular-blogs">
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12 ">
              <img
                class="mp-image"
                src="https://magazine.xpert.tv/wp-content/uploads/2020/05/1589723615240.jpg"
                alt=""
              />
              <h5>Catagory | Date</h5>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis ab sint error! Ratione cumque laborum inventore quas
                hic distinctio aut accusamus optio vero labore perspiciatis et,
                veritatis est quae quaerat.
              </p>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 ">
              <img
                class="mp-image"
                src="https://magazine.xpert.tv/wp-content/uploads/2020/05/1589723615240.jpg"
                alt=""
              />
              <h5>Catagory | Date</h5>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis ab sint error! Ratione cumque laborum inventore quas
                hic distinctio aut accusamus optio vero labore perspiciatis et,
                veritatis est quae quaerat.
              </p>
            </div>
            <div class="col-lg-4 col-md-12 col-sm-12 ">
              <img
                class="mp-image"
                src="https://magazine.xpert.tv/wp-content/uploads/2020/05/1589723615240.jpg"
                alt=""
              />
              <h5>Catagory | Date</h5>
              <h2>Title</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Perferendis ab sint error! Ratione cumque laborum inventore quas
                hic distinctio aut accusamus optio vero labore perspiciatis et,
                veritatis est quae quaerat.
              </p>
            </div>
          </div> */}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
