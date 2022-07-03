import React from "react";
import { FcOk } from "react-icons/fc";
import Certificado from "../Images/mongoDbUdemy.png";

const MongoDbUdemy = () => {
  return (
    <div
      className="col-10 col-sm-10 col-md-11 col-lg-10 col-xl-5 mx-4 mx-md-5 border rounded bg-white my-3 shadow text-decoration-none text-dark shadow2"
      data-bs-toggle="modal"
      data-bs-target="#MODALDMONGODBUDEMY"
    >
      <div className="row py-1 bg-warning"></div>
      <h4 className="h2 my-3 ">
        MongoDB - Udemy <FcOk />
      </h4>
      <p className="fs-5 ">
        En este curso aprendi todo lo relacionado con MongoDB, sobre bases de
        datos NoSQL, ABM, realizar consultas, tambien aprendi a agilizar
        búsquedas con la Indexación de datos y administrar accesos con la
        administración de usuarios de MongoDB, asi como tambien identificar y
        analizar problemáticas de la vida cotidiana e implementarlas.
      </p>
      <p className="fs-5 ">Duracion: 1 Semanas</p>
      <p className="text-center my-5 text-warning fw-bold fs-5">
        Ver Certificado
      </p>

      <div
        className="modal fade"
        id="MODALDMONGODBUDEMY"
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
  );
};

export default MongoDbUdemy;
