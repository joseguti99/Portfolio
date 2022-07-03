import React from "react";
import Certificado from "../Images/certificado-frontend.png";
const ExperienceThree = () => {
  return (
    <>
      <div className="row m-3 bg-white">
        <div className="col-12 col-md-5 col-xl-7">
          <h3 className="">Desarrollo Frontend React</h3>
          <p className="h5">Coder House</p>
          <p className="">Argentina, Buenos Aires</p>
        </div>
        <div className="col-12 col-md-3 col-xl-3 py-5 text-center">
          <button
            className="btn btn-dark text-decoration-none my-3 mx-2"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ver Certificado
          </button>
          <div
            className="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog  modal-xl">
              <div class="row justify-content-end">
                <button
                  type="button"
                  className="btn-close bg-white pointer"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-content bg-transparent">
                <div class="modal-body">
                  <div className="row justify-content-center">
                    <div className="col-10">
                      <img
                        src={Certificado}
                        className="w-100"
                        alt="certificado frontend developer"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2 col-xl-2 rounded text-center">
          <img
            className="w-200"
            src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/png/logo-coder.png?raw=true"
            alt="logo sanfra"
          />
        </div>
      </div>
    </>
  );
};

export default ExperienceThree;
