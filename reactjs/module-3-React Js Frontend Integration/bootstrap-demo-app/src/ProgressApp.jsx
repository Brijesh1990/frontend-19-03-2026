import { React, useEffect } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ProgressApp() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, offset: 100 });
  }, []);

  return (
    <>
      <Container className="p-5 mt-5">
        {" "}
        {/* SECTION TITLE */}{" "}
        <div className="text-center mb-5" data-aos="fade-down">
          {" "}
          <h1 className="fw-bold text-primary"> My Skills </h1>{" "}
          <p className="text-muted">
            {" "}
            Technologies and tools I work with{" "}
          </p>{" "}
        </div>{" "}
        {/* HTML */}{" "}
        <div className="mb-4" data-aos="fade-right" data-aos-delay="100">
          {" "}
          <div className="d-flex justify-content-between mb-2">
            {" "}
            <span className="fw-bold"> HTML5 </span>{" "}
            <span className="badge bg-primary"> 90% </span>{" "}
          </div>{" "}
          <div className="progress" style={{ height: "12px" }}>
            {" "}
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            />{" "}
          </div>{" "}
        </div>{" "}
        {/* CSS */}{" "}
        <div className="mb-4" data-aos="fade-left" data-aos-delay="200">
          {" "}
          <div className="d-flex justify-content-between mb-2">
            {" "}
            <span className="fw-bold"> CSS3 </span>{" "}
            <span className="badge bg-success"> 85% </span>{" "}
          </div>{" "}
          <div className="progress" style={{ height: "12px" }}>
            {" "}
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow={85}
              aria-valuemin={0}
              aria-valuemax={100}
            />{" "}
          </div>{" "}
        </div>{" "}
        {/* BOOTSTRAP */}{" "}
        <div className="mb-4" data-aos="fade-right" data-aos-delay="300">
          {" "}
          <div className="d-flex justify-content-between mb-2">
            {" "}
            <span className="fw-bold"> Bootstrap </span>{" "}
            <span className="badge bg-info"> 90% </span>{" "}
          </div>{" "}
          <div className="progress" style={{ height: "12px" }}>
            {" "}
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-info"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            />{" "}
          </div>{" "}
        </div>{" "}
        {/* JAVASCRIPT */}{" "}
        <div className="mb-4" data-aos="fade-left" data-aos-delay="400">
          {" "}
          <div className="d-flex justify-content-between mb-2">
            {" "}
            <span className="fw-bold"> JavaScript </span>{" "}
            <span className="badge bg-warning text-dark"> 80% </span>{" "}
          </div>{" "}
          <div className="progress" style={{ height: "12px" }}>
            {" "}
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            />{" "}
          </div>{" "}
        </div>{" "}
        {/* REACT */}{" "}
        <div className="mb-4" data-aos="fade-right" data-aos-delay="500">
          {" "}
          <div className="d-flex justify-content-between mb-2">
            {" "}
            <span className="fw-bold"> React JS </span>{" "}
            <span className="badge bg-danger"> 85% </span>{" "}
          </div>{" "}
          <div className="progress" style={{ height: "12px" }}>
            {" "}
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow={85}
              aria-valuemin={0}
              aria-valuemax={100}
            />{" "}
          </div>{" "}
        </div>{" "}
        {/* PYTHON */}{" "}
        <div className="mb-4" data-aos="fade-left" data-aos-delay="600">
          {" "}
          <div className="d-flex justify-content-between mb-2">
            {" "}
            <span className="fw-bold"> Python </span>{" "}
            <span className="badge bg-primary"> 90% </span>{" "}
          </div>{" "}
          <div className="progress" style={{ height: "12px" }}>
            {" "}
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            />{" "}
          </div>{" "}
        </div>{" "}
        {/* DATA SCIENCE */}{" "}
        <div className="mb-4" data-aos="fade-right" data-aos-delay="700">
          {" "}
          <div className="d-flex justify-content-between mb-2">
            {" "}
            <span className="fw-bold"> Data Science </span>{" "}
            <span className="badge bg-success"> 85% </span>{" "}
          </div>{" "}
          <div className="progress" style={{ height: "12px" }}>
            {" "}
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-success"
              role="progressbar"
              style={{ width: "85%" }}
              aria-valuenow={85}
              aria-valuemin={0}
              aria-valuemax={100}
            />{" "}
          </div>{" "}
        </div>{" "}
        {/* DATA ANALYTICS */}{" "}
        <div className="mb-4" data-aos="fade-left" data-aos-delay="800">
          {" "}
          <div className="d-flex justify-content-between mb-2">
            {" "}
            <span className="fw-bold"> Data Analytics </span>{" "}
            <span className="badge bg-info"> 90% </span>{" "}
          </div>{" "}
          <div className="progress" style={{ height: "12px" }}>
            {" "}
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-info"
              role="progressbar"
              style={{ width: "90%" }}
              aria-valuenow={90}
              aria-valuemin={0}
              aria-valuemax={100}
            />{" "}
          </div>{" "}
        </div>{" "}
        {/* NODE JS */}{" "}
        <div className="mb-4" data-aos="fade-right" data-aos-delay="900">
          {" "}
          <div className="d-flex justify-content-between mb-2">
            {" "}
            <span className="fw-bold"> Node JS </span>{" "}
            <span className="badge bg-warning text-dark"> 80% </span>{" "}
          </div>{" "}
          <div className="progress" style={{ height: "12px" }}>
            {" "}
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
              role="progressbar"
              style={{ width: "80%" }}
              aria-valuenow={80}
              aria-valuemin={0}
              aria-valuemax={100}
            />{" "}
          </div>{" "}
        </div>{" "}
        {/* PHP LARAVEL */}{" "}
        <div className="mb-4" data-aos="fade-left" data-aos-delay="1000">
          {" "}
          <div className="d-flex justify-content-between mb-2">
            {" "}
            <span className="fw-bold"> PHP Laravel </span>{" "}
            <span className="badge bg-danger"> 75% </span>{" "}
          </div>{" "}
          <div className="progress" style={{ height: "12px" }}>
            {" "}
            <div
              className="progress-bar progress-bar-striped progress-bar-animated bg-danger"
              role="progressbar"
              style={{ width: "75%" }}
              aria-valuenow={75}
              aria-valuemin={0}
              aria-valuemax={100}
            />{" "}
          </div>{" "}
        </div>{" "}
      </Container>
    </>
  );
}
