import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="container-fluid p-0">
      <footer style={{ backgroundColor: "#ffede7" }}>
        <div className="container py-5">
          <div className="row">
            {/* Column 1 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3" style={{ letterSpacing: "2px", color: "#7f4722" }}>
                shopping online
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    frequently asked questions
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    delivery
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    pricing
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    where we deliver?
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3" style={{ letterSpacing: "2px", color: "#7f4722" }}>
                gift cards
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    frequently asked questions
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    delivery and payment
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    activate the card
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    rules
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3" style={{ letterSpacing: "2px", color: "#7f4722" }}>
                company
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    buy a gift card
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    history
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    return
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="mb-3" style={{ letterSpacing: "2px", color: "#7f4722" }}>
                diamond club
              </h5>
              <ul className="list-unstyled mb-0">
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    registration
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    application
                  </a>
                </li>
                <li className="mb-1">
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    about program
                  </a>
                </li>
                <li>
                  <a href="#!" style={{ color: "#4f4f4f" }}>
                    rules
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div
          className="text-center py-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:{" "}
          <Link className="text-dark" to="/">
            My store
          </Link>
        </div>
      </footer>
    </div>
  );
}
