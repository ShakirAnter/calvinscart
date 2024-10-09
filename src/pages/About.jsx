// src/pages/About.jsx
import React from "react";
import Navbar from "../components/NavBar";

import image1 from "../assets/images/sliderimage3.jpg";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

function About() {
  return (
    <div>
      <Navbar />

      <div
        className="about-hero w-screen flex flex-col items-start justify-center px-10"
        style={{
          height: `calc(100vh - 64px)`,
        }}
      >
        <h2 className="text-[#b1b2b6] text-4xl text-start">OUR STORY</h2>
        <p className="text-[#b1b2b6] text-2xl text-start">
          CRAFTING THE PERFECT FIT FOR MEN SINCE 2018
        </p>
      </div>

      <div className="py-20 flex flex-col items-center justify-center">
        <p className="max-w-[70%]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur
          exercitationem recusandae dignissimos adipisci incidunt error
          veritatis accusantium, consequatur aspernatur quasi quia culpa fugit
          optio ut aut fugiat
        </p>
      </div>

      <div>
        <AboutSection />
        <ServiceSection />
        <AboutSection />
        <AboutSection />
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center lg:flex-row px-10 mb-10">
      <div className="w-full lg:w-[50%] mb-10 lg:mb-0">
        <img src={image1} alt="" className="w-full h-full" />
      </div>

      <div className="w-full lg:w-[50%] lg:px-10 h-full">
        <h2 className="text-3xl font-bold mb-5">FROM CONCEPT TO CREATION</h2>
        <p className="mb-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          possimus repudiandae unde labore ratione, perferendis, magni excepturi
          sequi fugit aut quaerat omnis maiores ad quasi impedit. Omnis laborum
          nesciunt neque corporis quidem illo ea rerum, ratione quaerat ad nulla
          id tenetur odit et sapiente harum architecto labore placeat. Deleniti,
          quasi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          reiciendis molestias beatae voluptatibus ea, sequi cum fugiat quaerat
          sunt. Dolores!
        </p>
      </div>
    </div>
  );
};

const ServiceSection = () => {
  const ServiceCard = ({ title, icon, text }) => {
    return (
      <div className="service-card rounded-lg bg-textMuted p-[20px] md:w-[450px] hover:shadow-md transition duration-300 ease-in-out">
        <div className="flex items-center justify-center gap-2 mb-5">
          <h3 className="text-2xl font-bold">{title}</h3>
          <i className={`fa-solid fa-${icon}`}></i>
        </div>

        <p>{text}</p>
      </div>
    );
  };

  return (
    <div className="  p-10">
      <h2 className="text-3xl font-bold mb-5">SERVICES WE OFFER</h2>
      <div className="flex flex-col items-center gap-5 lg:flex-row">
        <ServiceCard
          title="Door To Door Delivery"
          icon="truck"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          possimus repudiandae unde labore ratione, perferendis, magni excepturi
          sequi fugit aut quaerat omnis maiores ad quasi impedit. Omnis laborum
          nesciunt neque corporis quidem illo ea rerum, ratione quaerat ad nulla
          id tenetur odit et sapiente harum architecto labore placeat. Deleniti,
          quasi?"
        />
        <ServiceCard
          title="Free Shipping"
          icon="shipping-fast"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          possimus repudiandae unde labore ratione, perferendis, magni excepturi
          sequi fugit aut quaerat omnis maiores ad quasi impedit. Omnis laborum
          nesciunt neque corporis quidem illo ea rerum, ratione quaerat ad nulla
          id tenetur odit et sapiente harum architecto labore placeat. Deleniti,
          quasi?"
        />
        <ServiceCard
          title="24/7 Customer Care"
          icon="headset"
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
          possimus repudiandae unde labore ratione, perferendis, magni excepturi
          sequi fugit aut quaerat omnis maiores ad quasi impedit. Omnis laborum
          nesciunt neque corporis quidem illo ea rerum, ratione quaerat ad nulla
          id tenetur odit et sapiente harum architecto labore placeat. Deleniti,
          quasi?"
        />
      </div>
    </div>
  );
};

export default About;
