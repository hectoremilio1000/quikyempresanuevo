import React from "react";
import { Col, Menu, Row } from "antd";
import { Link } from "react-router-dom";

//styles

import styles from "./styles.css";

function NavBar() {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img
            alt="Quikyempresa"
            src={
              "https://imagenesrutalab.s3.amazonaws.com/quikyempresa/logoQuikyempresa3.png"
            }
            width="130px"
            height="40px"
          />
        </Link>
      </div>
    </>
  );
}

export default NavBar;
