import React from "react";
import { FcOk } from "react-icons/fc";
import Certificado from "../Images/javascript.png";
const Javascript = () => {
  return (
    <div
      className="col-10 col-sm-10 col-md-11 col-lg-10 col-xl-5 mx-auto border rounded bg-white my-3 shadow text-dark shadow2"
      data-bs-toggle="modal"
      data-bs-target="#MODALDJAVASCRIPT"
    >
      <div className="row py-1 bg-warning"></div>
      <h4 className="h2 text-center my-2">
        Javascript <FcOk />
      </h4>
      <p className="fs-5 ">
        En este curso aprendí los fundamentos del lenguaje de programación más
        usado en la actualidad, con el cual es posible crear aplicaciones de
        todo tipo. Explore inicialmente herramientas propias del mismo,
        indagando casos prácticos de aplicación. Conocí la utilidad de las
        librerías estudiando jQuery, y cómo aplicar técnicas de desarrollo para
        apps modernas con AJAX. Entendí como poder desarrollar web interactivas,
        y trasladar los conocimientos del curso a cualquier framework
        JavaScript.
      </p>
      <p className="">Duracion: 8 Semanas</p>
      <p className="text-center my-5 text-warning fw-bold fs-5">
        Ver Certificado
      </p>

      <div
        className="modal fade"
        id="MODALDJAVASCRIPT"
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

export default Javascript;
