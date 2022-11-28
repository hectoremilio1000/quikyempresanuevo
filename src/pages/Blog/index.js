import React, {useState, useEffect} from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import { API, DataStore, graphqlOperation } from "aws-amplify";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Spin } from 'antd';
import { Amplify, Hub } from "@aws-amplify/core";




import blog from "../../assets/data2/blog";
import { BLOG } from "../../models";
// import { listBLOGS } from "../../graphql/queries";
import { useBlogContext } from "../../Contexts/BlogContexts";

const post = {
  title: "Covid en México",
  description: "Sabes cual es la prueba indicada para ti?",
  image: "../../assets/images/blog/centaurus covid child muerte mexico.png",
  imageText: "main image description",
  linkText: "",
};

const portada = [
  {
    id: 1,
    imagenportada:
      "https://img.freepik.com/free-photo/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room_657921-879.jpg",
    fechaportada: "25-09-22",
    textoprincipal: "¿La venopunción es un procedimiento invasivo? ",
    textosecundario:
      "¿Es necesario un consentimiento informado?",
  },
  {
    id: 2,
    imagenportada:
      "https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2020-03/blue-covid-banner.jpg?itok=N2g8afH3",
    fechaportada: "10-07-22",
    textoprincipal: "Covid en México",
    textosecundario: "Sabes cual es la prueba indicada para ti?",
  },
];



const sidebar = {
  title: "San Mateo",
  description:
    "Creemos que la información actualizada y de mayor impacto debe de estar al alcance de nuestros pacientes en tiempo real",
  archives: [{ title: "2022", url: "#" }],
  social: [
    {
      name: "Instagram",
      icon: InstagramIcon,
      url: "https://www.instagram.com/laboratoriossanmateo/",
    },
    {
      name: "Facebook",
      icon: FacebookIcon,
      url: "https://ms-my.facebook.com/pg/Laboratorios-San-Mateo-100768022337271",
    },
  ],
};

const theme = createTheme();

function Blog() {
  const { blogCon } = useBlogContext();
  const [blogNuevos, setBlogNuevos] = useState([])
  const [postBlog, setPostBlog] = useState([]);
  const [showSpin, setShowSpin] = useState(true);

  // const fetchBlogNuevos = async () => {
  //   try {
  //     const blogsFinales = await API.graphql(graphqlOperation(listBLOGS));
  //     setBlogNuevos(blogsFinales);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // useEffect(() => {
  //   fetchBlogNuevos();
  // }, [])
  

  const fetchBlog = async () => {
    const postFetch = await DataStore.query(BLOG)
    setPostBlog(postFetch);
    setShowSpin(false);
  }

  useEffect(() => {
    setShowSpin(true);
   
    fetchBlog();
    
  }, [])
  
  console.log(postBlog);
  console.log(blogNuevos)

  console.log(blogCon);

  const { url } = useNavigate();

  let seccionesHeader = blog.map(a => [a.secciones, a.key, a.id]);



  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog San Mateo" sections={seccionesHeader} />
        <main>
          <MainFeaturedPost portada={portada} post={post} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <Grid container spacing={5} sx={{ mt: 3 }}>
            {showSpin ? (
              <Spin size="large" />
            ) : (
              <Main
                title="Todo lo relevante a la salud lo podrás encontrar Aquí"
                posts={postBlog}
                url={url}
              />
            )}

            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid>
        </main>
      </Container>
      <Footer
        title="Blog San Mateo"
        description="Todo lo escrito en este medio es propiedad de San Mateo Laboratorios"
      />
    </ThemeProvider>
  );
}

export default Blog;
