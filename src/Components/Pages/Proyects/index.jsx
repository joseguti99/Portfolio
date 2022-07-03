import React from "react";
import NavBar from "../../NavBar";
import { FcOpenedFolder } from "react-icons/fc";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaFolderOpen } from "react-icons/fa";

const Proyects = () => {
  return (
    <>
      <div className="mb_nav">
        <NavBar />
      </div>
      <div className="container vh-75 rounded">
        <h1 className="display-5 text-center">
          Mis Proyectos <FcOpenedFolder />
        </h1>
        <div className="row mx-2 my-2">
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow className="justify-content-center">
                  <TableCell component="th" scope="row"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow
                  className="pointer"
                  hover
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://joseguti99.github.io/E-commerce/"
                      className="d-flex text-decoration-none"
                      tabIndex="0"
                      data-toggle="tooltip"
                      title="VER PROYECTO JAVASCRIPT JOSÉ GUTIERREZ"
                    >
                      <FaFolderOpen className="fs-2 text-warning" />
                      <p className="mt-2 mx-3">E-commerce Javascript Vanila</p>
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="pointer"
                  hover
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://joseguti99.github.io/E-commerce-React-App/"
                      className="d-flex text-decoration-none"
                      tabIndex="0"
                      data-toggle="tooltip"
                      title="VER PROYECTO JAVASCRIPT JOSÉ GUTIERREZ"
                    >
                      <FaFolderOpen className="fs-2 text-warning" />
                      <p className="mt-2 mx-3">
                        E-commerce React.js - Firebase
                      </p>
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="pointer"
                  hover
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://vivianalozahys.com/"
                      className="d-flex text-decoration-none"
                      tabIndex="0"
                      data-toggle="tooltip"
                      title="VER PROYECTO JAVASCRIPT JOSÉ GUTIERREZ"
                    >
                      <FaFolderOpen className="fs-2 text-warning" />
                      <p className="mt-2 mx-3">Higiene y Seguridad</p>
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="pointer"
                  hover
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://joseguti99.github.io/appVentas/"
                      className="d-flex text-decoration-none"
                      tabIndex="0"
                      data-toggle="tooltip"
                      title="VER PROYECTO JAVASCRIPT JOSÉ GUTIERREZ"
                    >
                      <FaFolderOpen className="fs-2 text-warning" />
                      <p className="mt-2 mx-3">Aplicacion de ventas React</p>
                    </a>
                  </TableCell>
                </TableRow>
                <TableRow
                  className="pointer"
                  hover
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://joseguti99.github.io/AppMeli/"
                      className="text-decoration-none"
                      tabIndex="0"
                      data-toggle="tooltip"
                      title="VER PROYECTO JAVASCRIPT JOSÉ GUTIERREZ"
                    >
                      <div className="d-flex">
                        <FaFolderOpen className="fs-2 text-warning" />
                        <p className="mt-2 mx-3">App clon Mercado Libre</p>
                      </div>
                      <p className="mt-2 mx-5">(en desarrollo)</p>
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Proyects;
