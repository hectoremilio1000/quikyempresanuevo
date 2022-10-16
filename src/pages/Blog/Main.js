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
          <Typography component="h2" variant="h5"  style={{fontWeight: 'bold'}}>
            {post.titulo}
          </Typography>

          <Typography variant="subtitle1" color="text.secondary">
            {post.fecha}
          </Typography>
          <Typography variant="text.secondary" style={{fontStyle: 'italic'}}>
            {post.autor}
          </Typography>
          <Image width={"100%"} src={post.url1} />
            <Typography component="h2" variant="h5"  className="mt-4" style={{fontWeight: 'bold'}}>
            {post.subtitulo}
          </Typography>
          <p
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            
          >
            {/* {truncate(post.body)} */}
            {post.texto1}
          </p>
          <Image width={"100%"} src={post.url2} />
          <p
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            className="mt-4"
          >
            {/* {truncate(post.body)} */}
            {post.texto2}
          </p>
          <Image width={"100%"} src={post.url3} />
          <p
            style={{ overflow: "hidden", textOverflow: "ellipsis" }}
            className="mt-4"
          >
            {/* {truncate(post.body)} */}
            {post.texto3}
          </p>
          
          
          <Divider/>
        </div>
      )).sort((a,b) =>{
        if (a?.props?.children[1]?.props?.children > b?.props?.children[1]?.props?.children) {
          return -1
  }
  
        return 0;
      })}
    </Grid>
  );
}

export default Main;
