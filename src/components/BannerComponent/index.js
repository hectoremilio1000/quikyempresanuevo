import React from "react";
import { Typography } from "antd";
import styles from "./styles.css";

const { Title } = Typography;

function BannerComponent({ titulo, text1, background }) {
  return (
    <div className="banner d-flex justify-content-start">
      <header
        className="col jumbotron jumbotron-fluid bannerEnfermera"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container-fluid mt-4">
          <div className="col-12 col-sm-6 col-md-8 pl-1">
            <div className="col-6 col-sm-4 col-md-8 mt-4">
              <Title level={3} style={{ color: "white" }}>
                {titulo}
              </Title>
            </div>
            <div className="col-5 col-sm-7 col-md-9 mt-2">
              <h1 className="display-4 font-weight-bold pt-3 titleEnfermera text-white text-md-left text-sm-center">
                {text1}
              </h1>
            </div>
            <div className="col-12 col-sm-7 col-md-9 d-flex justify-content-start justify-content-md-start mb-4"></div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default BannerComponent;
