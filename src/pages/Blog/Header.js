import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Header(props) {
  const { title } = props;
  const { sections } = props;

  return (
    <React.Fragment>
      <Toolbar sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          sx={{ flex: 1 }}
        >
          {title}
        </Typography>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{ justifyContent: "space-between", overflowX: "auto" }}
      >
        {/* {sections.map(item => (
          <Link
            color="inherit"
            noWrap
            key={item[2]}
            variant="body2"
            href={item[1]}
            sx={{ p: 1, flexShrink: 0 }}
          >
            {item[0]}
          </Link>
        ))} */}
      </Toolbar>
    </React.Fragment>
  );
}

export default Header;
