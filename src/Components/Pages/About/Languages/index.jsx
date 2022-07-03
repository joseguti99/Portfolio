import React from "react";

const Languajes = () => {
  return (
    <div className="row rounded text-center">
      <div className="mx-auto col-8 col-sm-7 col-md-3 col-xl-3 mx-5 my-3 shadow-lg radius border">
        <h5 className="rounded my-4 display-6 fs-2">ESPAÑOL</h5>
        <img
          className="w-100 rounded"
          src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/espa%C3%B1a-icon.png?raw=true"
          alt=""
        />
        <p className="rounded my-4 text-bold fs-4">Nativo</p>
      </div>
      <div className="mx-auto col-8 col-sm-7 col-md-3 col-xl-3 mx-5 my-3 shadow-lg radius border">
        <h5 className="rounded my-4 display-6 fs-2">PORTUGUÉS</h5>
        <img
          className="w-100 rounded"
          src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/portugal-icon.png?raw=true"
          alt=""
        />
        <p className="rounded my-4 text-bold fs-4">Nivel B1</p>
      </div>
      <div className="mx-auto col-8 col-sm-7 col-md-3 col-xl-3 mx-5 my-3 shadow-lg radius bg-white">
        <h5 className="rounded my-4 display-6 fs-2">INGLÉS</h5>
        <img
          className="w-100 rounded"
          src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/inglaterra-icon.png?raw=true"
          alt=""
        />
        <p className="rounded my-4 text-bold fs-4">Nivel A2</p>
      </div>
    </div>
  );
};

export default Languajes;
