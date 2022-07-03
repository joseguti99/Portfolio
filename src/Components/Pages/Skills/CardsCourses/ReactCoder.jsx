import React from "react";
import { FcOk } from "react-icons/fc";
import Certificado from "../Images/reactCoder.jpg";

const ReactCoder = () => {
  return (
    <div
      className="col-10 col-sm-10 col-md-11 col-lg-10 col-xl-5 mx-auto border rounded bg-white my-3 shadow text-dark shadow2"
      data-bs-toggle="modal"
      data-bs-target="#MODALDREACTCODER"
    >
      <div className="row py-1 bg-warning"></div>
      <h3 className="h2 my-3">
        React Js - Coder House <FcOk />
      </h3>
      <p className="fs-5 ">
        En este curso que es el tercer nivel de la carrera de programación
        Front-end en Coder House, aprendí a programar por componentes, mediante
        Javascript, JS, ES6, y también conocí las ventajas de la utilización de
        flujos de datos. Asimismo como aplicar el manejo de rutas utilizando
        Firebase, y la utilización del virtual DOM mediante los desarrollos de
        React JS. Al finalizar, pude crear mis propias aplicaciones SPA, y
        estarás en condiciones de hacer cualquier desarrollo con uno de los
        frameworks más populares y avanzados del momento.
      </p>
      <p className="">Duracion: 8 Semanas</p>
      <p className="text-center text-warning fw-bold fs-5">Ver Certificado</p>

      <div
        className="modal fade"
        id="MODALDREACTCODER"
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

export default ReactCoder;
