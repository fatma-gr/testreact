import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/')
    }, 2000);
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100 text-light text-center">
      <div className="text-center">
        <h1 className="display-2 fw-bold text-warning">404</h1>
        <p className="fs-4">
          Oops! This page doesn't exist.
        </p>
        <p className="text-info mb-4">
          Redirecting you to the homepage shortly...
        </p>
        <div
          className="spinner-border text-warning"
          role="status"
          style={{ width: "3rem", height: "3rem" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
  
}