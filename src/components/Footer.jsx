import React from "react";
import { ContainerFooter } from "../assets/styled/Footer";
import link from "../assets/img/link.png";
import github from "../assets/img/github.png";
export const Footer = () => {
  return (
    <ContainerFooter>
      <footer className="container contenedorFoder">
        <div className="contenedor_foder">
          <div className="footerIconos">
            <h5>Email: torcoromaarias@gmail.com</h5>
            &nbsp;
            <div className="fooderIcono">
              <a href="https://github.com/torco34">
                <img src={github} alt="foto" />
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/torco-arias-a20315227/"
                className="link"
              >
                <img src={link} alt="foto" />
                <span className="icon-linkedin linkedin"></span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </ContainerFooter>
  );
};
