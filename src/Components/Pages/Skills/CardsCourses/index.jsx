import React from "react";
import { FcOk } from "react-icons/fc";
import Certificado from "../Images/desarrolloWeb.png";
const index = () => {
  return (
    <div
      className="col-10 col-sm-10 col-md-11 col-lg-10 col-xl-5 mx-auto border rounded bg-white my-3 shadow text-dark shadow2"
      data-bs-toggle="modal"
      data-bs-target="#MODALDWEB"
    >
      <div className="row py-1 bg-warning"></div>
      <h3 className="h2 text-center my-2">
        Desarrollo Web <FcOk />
      </h3>
      <p className="fs-5 ">
        En este curso aprendí a crear un sitio web partiendo del prototipo en
        papel me sumergí en las mejores prácticas del desarrollo web, trabajando
        con HTML y CSS. Conocí herramientas para optimizar al máximo un sitio
        web, implementando prácticas de versionado de código con GIT, y
        preprocesadores como SASS. Al finalizar, supe cómo aplicar Bootstrap a
        mis proyectos, y comprendí lo importante del SEO en tus desarrollos.
        También aprendí a subir mi sitio a un servidor, y a como interactuar con
        este servicio.
      </p>
      <p className="">Duracion: 9 Semanas</p>
      <p className="text-center text-warning fw-bold fs-5">Ver Certificado</p>

      <div
        className="modal fade"
        id="MODALDWEB"
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

export default index;
