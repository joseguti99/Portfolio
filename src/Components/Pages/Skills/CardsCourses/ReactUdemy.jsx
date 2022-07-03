import React from 'react'
import { FcOk } from 'react-icons/fc'
import Certificado from "../Images/reactUdemy.png"

const ReactUdemy = () => {
  return (
    <div
      className="col-10 col-sm-10 col-md-11 col-lg-10 col-xl-5 mx-auto border rounded bg-white my-3 shadow text-dark shadow2"
      data-bs-toggle="modal"
      data-bs-target="#MODALDREACTUDEMY"
    >
      <div className="row py-1 bg-warning"></div>
            <h4 className="h2 my-3 ">
              React Js - Udemy <FcOk />
            </h4>
            <p className="fs-5 ">
              En este curso pude reforzar mis conocimientos sobre React Js,
              donde pude obtener otro punto de vista de otro desarrollador,
              donde aprendí las técnicas que usa con respecto al manejo del
              virtual DOM, las props, los estados, como manipular los ciclos de
              vida de los componentes. También pude aprender fundamentos de
              programación y como plasmar un proyecto en MVC
              (Modelo-Vista-Controlador).
            </p>
            <p className="fs-5 ">Duracion: 2 Semanas</p>
            <p className="text-center my-5 text-warning fw-bold fs-5">
              Ver Certificado
            </p>

      <div
        className="modal fade"
        id="MODALDREACTUDEMY"
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
            
  )
}

export default ReactUdemy
