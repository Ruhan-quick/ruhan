import React from "react";
import Footer from "../Home/Footer/Footer";
import NavBar from "../Home/Header/NavBar/NavBar";
import "./Blogs.css";
const Blogs = () => {
  return (
    <div>
      <NavBar></NavBar>
      <section
        class="banner"
        style={{ paddingLeft: "40px", paddingRight: "40px" }}
      >
        <div class="row banner2-box">
          <div class="col-lg-8 col-md-11 col-sm-12 col-xl-7 mx-auto">
            <h1 class="banner2-head">It's not ready yet.</h1>
            <h3 class="banner2-text text-secondary">
              Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet. Lorem,
              ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quia!
              Lorem ipsum dolor sit amet.
            </h3>
          </div>
        </div>
        <hr />

        <div class="row blog-box">
          <div class="col-lg-6 col-md-12 col-sm-12 detail-box">
            <h5>Date</h5>
            <h1>Popular Frame Templates</h1>
            <p class="blog-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              perferendis sunt iste illo illum eum perspiciatis quo quod odio!
              Laboriosam quo sit ut nisi suscipit dicta earum optio ratione
              ipsum necessitatibus saepe magnam veritatis perferendis molestias
              aliquam cumque hic, dolores soluta culpa odio nam dolor. Eos quasi
              necessitatibus reprehenderit sit.
            </p>
            <button class="blog-button">Learn More</button>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 blog-image-box">
            <img
              class="blog-image"
              src="https://magazine.xpert.tv/wp-content/uploads/2020/05/1589723615240.jpg"
              alt=""
            />
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 blog-image-box">
            <img
              class="blog-image"
              src="https://magazine.xpert.tv/wp-content/uploads/2020/05/1589723615240.jpg"
              alt=""
            />
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 detail-box">
            <h5>Date</h5>
            <h1>Popular Frame Templates</h1>
            <p class="blog-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              perferendis sunt iste illo illum eum perspiciatis quo quod odio!
              Laboriosam quo sit ut nisi suscipit dicta earum optio ratione
              ipsum necessitatibus saepe magnam veritatis perferendis molestias
              aliquam cumque hic, dolores soluta culpa odio nam dolor. Eos quasi
              necessitatibus reprehenderit sit.
            </p>
            <button class="blog-button">Learn More</button>
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 detail-box">
            <h5>Date</h5>
            <h1>Popular Frame Templates</h1>
            <p class="blog-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              perferendis sunt iste illo illum eum perspiciatis quo quod odio!
              Laboriosam quo sit ut nisi suscipit dicta earum optio ratione
              ipsum necessitatibus saepe magnam veritatis perferendis molestias
              aliquam cumque hic, dolores soluta culpa odio nam dolor. Eos quasi
              necessitatibus reprehenderit sit.
            </p>
            <button class="blog-button">Learn More</button>
          </div>
          <div class="col-lg-6 col-md-12 col-sm-12 blog-image-box">
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
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Blogs;
