import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";

import { withAuthenticator } from "@aws-amplify/ui-react";
import { Auth, DataStore } from "aws-amplify";

//models
import { User, Roles } from "../../models";
import Profile from "../Profile/";
import { Button } from "antd";

import { useNavigate } from "react-router-dom";

function Admin(props) {
  let navigate = useNavigate();

  const Salir = async event => {
    event.preventDefault();
    await Auth.signOut();
    navigate("/");
  };

  return (
    <>
      soy admin nuevo final
      <Button onClick={Salir}>Salir</Button>
    </>
  );
}

export default withAuthenticator(Admin);
