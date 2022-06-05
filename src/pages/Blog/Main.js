import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import { Image } from "antd";
// import Markdown from "./Markdown";

function Main({ posts, url, title }) {
  const truncate = str => {
    return str.length > 10 ? str.substring(0, 150) + "..." : str;
  };

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        "& .markdown": {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map(post => (
        <div className="markdown" key={post.id}>
          <Typography component="h2" variant="h5">
            {post.title}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            {post.date}
          </Typography>
          <Typography component="subtitle2" variant="text.secondary">
            {post.nombre}
          </Typography>
          <Image width={"100%"} src={post.image1} />
          <p
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            className="mt-4"
          >
            {/* {truncate(post.body)} */}
            {post.body}
          </p>
          {/* <Link to={`${url}/${post.id}`}>
            <Typography variant="subtitle1" color="primary">
              Continuar leyendo
            </Typography>
          </Link> */}
        </div>
      ))}
    </Grid>
  );
}

export default Main;
