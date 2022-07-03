import React from "react";
import NavBar from "../../NavBar";
import { FcIdea, FcOk } from "react-icons/fc";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import CourseDWeb from "./CardsCourses"
import CourseJavascript from "./CardsCourses/Javascript"
import CourseReactCoder from "./CardsCourses/ReactCoder"
import CourseReactUdemy from "./CardsCourses/ReactUdemy"
import CourseMongoDbUdemy from "./CardsCourses/MongoDbUdemy"

const Skills = () => {
  return (
    <>
      <div className="mb_nav ">
        <NavBar />
      </div>
      <div className="container-fluid">
        {/* FILA UNO */}
        <div className="container">
          <h2 className="display-3 text-center mb-3">
            {" "}
            <FcIdea className="rotated" /> Mis Habilidades{" "}
            <FcIdea className="rotated" />{" "}
          </h2>
          <div className="row text-center my-3 justify-content-center">
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 shadow rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/html5.png?raw=true"
                alt=""
              />
              <p className="fs-5 shadow bg-primary text-white mb-3">HTML5</p>
            </div>
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 shadow rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/JS.png?raw=true"
                alt=""
              />
              <p className="fs-5 shadow bg-primary text-white mb-3">
                JAVASCRIPT
              </p>
            </div>
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 shadow rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/CSS.png?raw=true"
                alt=""
              />
              <p className="fs-5 shadow bg-primary text-white mb-3">CSS</p>
            </div>
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 shadow rounded shadow2">
              <img
                className="img-icon my-3 p-1"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/react.png?raw=true"
                alt=""
              />
              <p className="fs-5 shadow bg-primary text-white mb-3">REACT JS</p>
            </div>
          </div>
          {/* FILA DOS */}
          <div className="row text-center my-3 justify-content-center">
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 shadow rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/nodeJss.png?raw=true"
                alt=""
              />
              <p className="fs-5 bg-primary text-white mb-3">NODE JS</p>
            </div>
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 shadow rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/Firebase.png?raw=true"
                alt=""
              />
              <p className="fs-5 bg-primary text-white mb-3">FIREBASE</p>
            </div>
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 shadow rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/Git.png?raw=true"
                alt=""
              />
              <p className="fs-5 bg-primary text-white mb-3">GIT</p>
            </div>
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 shadow rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/GitHub.png?raw=true"
                alt=""
              />
              <p className="fs-5 bg-primary text-white mb-3">GITHUB</p>
            </div>
          </div>
          {/* FILA TRES */}
          <div className="row text-center my-3 justify-content-center">
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/VScode.png?raw=true"
                alt=""
              />
              <p className="fs-5 bg-primary text-white mb-3">VS CODE</p>
            </div>
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/Jquery.png?raw=true"
                alt=""
              />
              <p className="fs-5 bg-primary text-white mb-3">JQUERY</p>
            </div>
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/bootstap.png?raw=true"
                alt=""
              />
              <p className="fs-5 bg-primary text-white mb-3">BOOTSTRAP</p>
            </div>
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/lenguajes/sass.png?raw=true"
                alt=""
              />
              <p className="fs-5 bg-primary text-white mb-3">SASS</p>
            </div>
          </div>
          <div className="row text-center my-3 justify-content-center">
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/express.png?raw=true"
                alt=""
              />
              <p className="fs-5 bg-primary text-white mb-3">EXPRESS JS</p>
            </div>
            <div className="col-5 col-sm-5 col-md-2 mx-md-3 bg-white m-2 rounded shadow2">
              <img
                className="img-icon my-3"
                src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/mongodb.png?raw=true"
                alt=""
              />
              <p className="fs-5 bg-primary text-white mb-3">MONGODB</p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="display-4 my-5 text-center">
        Mis Certificaciones <FcOk />{" "}
      </h2>
      <div className="container">
        <div className="row">
            <CourseDWeb/>
            <CourseJavascript/>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <CourseReactCoder/>
          <CourseReactUdemy/>
        </div>
        <div className="container my-5">
          <div className="row justify-content">
            <CourseMongoDbUdemy/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
