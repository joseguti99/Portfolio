import React from "react";

const ExperienceTwo = () => {
  return (
    <div className="row m-3 bg-white rounded">
      <div className="col-12 col-md-6 col-xl-7">
        <h3 className="">Tecnicatura en Papiloscopia</h3>
        <p className="h5">
          Instituto Superior de Ciencias Economicas y Tecnologias
        </p>
        <p className="">Argentina, Córdoba</p>
      </div>
      <div className="col-12 col-md-2 col-xl-3 py-5 text-center">
        <a
          className="btn btn-danger"
          rel="noopener noreferrer"
          href="https://www.iscet.edu.ar/"
          target="_blank"
        >
          Ver Institucion
        </a>
      </div>
      <div className="col-12 col-md-1 col-xl-2 bg-white text-center">
        <img
          className="w-200"
          src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/logo-iscet.png?raw=true"
          alt="logo sanfra"
        />
      </div>
    </div>
  );
};

export default ExperienceTwo;
