import React from 'react';
import * as picture from "./images.js";

export default function Slider() {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{ width: "100%", height: "100vh" }}
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
      </div>
      <div className="carousel-inner" style={{ height: "100%" }}>
        <div className="carousel-item active">
          <div className="carousel-image-container">
            <img
              src={picture.pic3}
              className="d-block w-100"
              alt="..."
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.7,
                filter: "blur(4px)",
              }}
            />
            <div className="carousel-caption" style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "3rem",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)"
            }}>
              <h1>Furniture</h1>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image-container">
            <img
              src={picture.pic4}
              className="d-block w-100"
              alt="..."
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.7,
                filter: "blur(4px)",
              }}
            />
            <div className="carousel-caption" style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "3rem",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)"
            }}>
              <h1>Groceries</h1>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image-container">
            <img
              src={picture.pic2}
              className="d-block w-100"
              alt="..."
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.7,
                filter: "blur(4px)",
              }}
            />
            <div className="carousel-caption" style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "3rem",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)"
            }}>
              <h1>Beauty</h1>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <div className="carousel-image-container">
            <img
              src={picture.pic1}
              alt="..."
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.7,
                filter: "blur(4px)",
              }}
            />
            <div className="carousel-caption" style={{
              position: "absolute",
              top: "35%",
              left: "50%",
              transform: "translateX(-50%)",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "3rem",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)"
            }}>
              <h1>Fragrances</h1>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
