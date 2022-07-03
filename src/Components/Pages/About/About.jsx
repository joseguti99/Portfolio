import React from "react";
import NavBar from "../../NavBar";
import { FcGraduationCap, FcManager } from "react-icons/fc";
import { FaReact } from "react-icons/fa";
import {
  BsFileEarmarkPdf,
  BsLinkedin,
  BsFacebook,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AboutMe from "./AboutMe"
import ExperienceOne from "./Experiencie/ExperiencieOne";
import ExperienceTwo from "./Experiencie/ExperienceTwo";
import ExperienceThree from "./Experiencie/ExperienceThree"
import Languages from "./Languages"

const About = () => {
  return (
    <>
      <div className="mb_nav">
        <NavBar />
      </div>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        <Paper elevation={3} className="d-flex my-3">
          <div className="container rounded">
            <div className="row pt-5">
              <div className="col-12 col-lg-3 rounded m-1 d-flex justify-content-center">
                <div className="content-img bg-primary-animate">
                  <img
                    src="https://github.com/joseguti99/DB-IMG-PUBLIC/blob/main/gift/PERFIL-BLANCO.png?raw=true"
                    alt="Foto de perfil José Gutierrez"
                    className="img-profile"
                  />
                </div>
              </div>
              <div className="col-12 col-lg-8 m-1">
                <h1 className="title-name">Jose Gabriel Gutierrez</h1>
                <p className="titleAgeLocation">22 Años | Argentina, Córdoba</p>
                <p>Interes en Desarrollo Frontend ReactJs - NextJs</p>
              </div>
            </div>
            <div className="my-3 row justify-content-center my-3">
              <div className="col-11 my-3">
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <p className="py-1 titleAcordion">Quien Soy</p>
                  </AccordionSummary>
                  <AccordionDetails className="bg-gray">
                    <AboutMe/>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="my-3 col-11">
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <p className="py-2 titleAcordion">Mi Educación</p>
                  </AccordionSummary>
                  <AccordionDetails className="bg-gray">
                    <ExperienceOne />
                    <ExperienceTwo />
                    <ExperienceThree/>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="my-3 col-11">
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <p className="py-2 titleAcordion">Mis Idiomas</p>
                  </AccordionSummary>
                  <AccordionDetails className="bg-gray">
                    <Languages/>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div className="my-3 col-11">
                <Accordion>
                  <AccordionSummary
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    expandIcon={<ExpandMoreIcon />}
                  >
                    <p className="py-2 titleAcordion">Descarga mi Curriculum</p>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className="row rounded text-center">
                      <a
                        href="https://drive.google.com/u/0/uc?id=1hPO0BWHEAxQHz_OIFLnkDYdiv7H5bB56&export=download"
                        download="CV-JOSÉ-GUTIERREZ"
                        className="col-12 col-lg-11 py-2"
                      >
                        <BsFileEarmarkPdf className="h1 text-danger" />
                      </a>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
            <p className="text-center">Buscame por las Redes</p>
            <p className="text-center h4 rounded display-6 text-white">
              <BsWhatsapp className="text-success h2 mx-3 pointer" />
              <BsFacebook className="text-primary h2 mx-3 pointer" />
              <BsInstagram className="text-danger h2 mx-3 pointer" />
              <BsLinkedin className="text-primary h2 mx-3 pointer" />
            </p>
          </div>
        </Paper>
      </Box>
    </>
  );
};

export default About;
