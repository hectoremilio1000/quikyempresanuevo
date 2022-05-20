import React, { useState, useEffect } from "react";
import { Button } from "antd";
import { Auth, Hub } from "aws-amplify";
import Form from "../../components/Admin/Form/Form";

import LayoutAdministrador from "../../components/Admin/LayoutAdministrador";

function Usuario() {
  const [user, setUser] = useState(null);

  async function checkUser() {
    try {
      const data = await Auth.currentUserPoolUser();
      const userInfo = { username: data.username, ...data.attributes };
      setUser(userInfo);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  useEffect(() => {
    checkUser();
    Hub.listen("auth", data => {
      const { payload } = data;
      if (payload.event === "signOut") {
        setUser(null);
      }
    });
  }, []);

  function signOut() {
    Auth.signOut().catch(err => console.log("error signing out: ", err));
  }

  if (user) {
    return (
      <div>
        <LayoutAdministrador user={user} />

        <Button
          onClick={signOut}
          style={{ width: "100%", backgroundColor: "#fff242", border: 2 }}
        >
          <span style={{ fontWeight: 800, fontSize: 17 }}>Cerrar sesión</span>
        </Button>
      </div>
    );
  }
  return <Form setUser={setUser} />;
}

export default Usuario;
