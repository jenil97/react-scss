import React, { useState } from "react";
import { Data } from "../Data";
import "../styles/Section.scss";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Section = ({ slides }) => {
  const [first, setFirst] = useState(0);

  const length = slides.length;

  const nextSlide = () => {
    setFirst(first === length - 1 ? 0 : first + 1);
  };

  const prevSlide = () => {
    setFirst(first === length - 0 ? length - 1 : first - 1);
  };

  return (
    <section>
      <div className="slide">
        <HiArrowLeft onClick={prevSlide} className="back" />
        <HiArrowRight onClick={nextSlide} className="forward" />
        {Data.map((item, index) => {
          return (
            <div key={index} className={item.className}>
              <div className={index === first ? "slides active" : "slides"}>
                {index === first && (
                  <div>
                    <img src={item.image} alt="" />
                    <p style={{marginTop: '10px'}} className="places">{item.text}</p>
                    <p className="status">{item.status}</p>

                    <div className="buttons">
                      <button>Join</button>
                      <button>Discover</button>
                    </div>

                    <div className="bottom">
                      <p>You can get 50% off if its your first purchase !</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Section;
