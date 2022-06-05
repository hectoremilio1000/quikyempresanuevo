import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Header from "./Header";
import MainFeaturedPost from "./MainFeaturedPost";
import FeaturedPost from "./FeaturedPost";
import Main from "./Main";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

import blog from "../../assets/data2/blog";

// const sections = [
//   { title: "Technology", url: "#" },
//   { title: "Design", url: "#" },
//   { title: "Culture", url: "#" },
//   { title: "Business", url: "#" },
//   { title: "Politics", url: "#" },
//   { title: "Opinion", url: "#" },
//   { title: "Science", url: "#" },
//   { title: "Health", url: "#" },
//   { title: "Style", url: "#" },
//   { title: "Travel", url: "#" },
// ];

const mainFeaturedPost = {
  title: "Covid en México",
  description: "Sabes cual es la prueba indicada para ti?",
  image:
    "https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2020-03/blue-covid-banner.jpg?itok=N2g8afH3",
  imageText: "main image description",
  linkText: "",
};

// const featuredPosts = [
//   {
//     title: "Entiende tus resultados de laboratorio",
//     date: "Nov 12",
//     description: "Sabes cómo entender tus resultados de laboratorio?",
//     image:
//       "https://imagenesrutalab.s3.amazonaws.com/sanmateo/servicios/PCR.jpg",
//     imageLabel: "pcr",
//   },
//   {
//     title: "Qué es una química sanguínea?",
//     date: "Nov 11",
//     description: "Entiende todo sobre las químicas sanguíneas",
//     image:
//       "https://imagenesrutalab.s3.amazonaws.com/sanmateo/sanmateonuevo/imagenesservicios/anticuerposantihiv/Anticuerpos+Anti-HIV.jpg",
//     imageLabel: "química sanguínea",
//   },
// ];

const posts = [
  {
    id: "1",
    title:
      "¿Sabes cual prueba de COVID es la que debes solicitar en caso de que presentes Síntomas?",
    body:
      "Es importante entender que la prueba COVID que solicites depende de muchos factores, por ejemplo si es para salir de vacaciones con tu Familia al extranjero, si es porque te lo solicitan en el trabajo o si quieres saber si ya no contagias a tus seres queridos. Por tanto, lo primero que tienes que comentar con tu Laboratorio de confianza es el motivo por el cual la realizas. Además de esto, existe la denominada Prueba de Anticuerpos. Pruebas de anticuerpos Una prueba de anticuerpos (también conocida como prueba serológica) permite detectar los anticuerpos para el SARS-CoV-2 en su sangre. Los anticuerpos son proteínas que produce su sistema inmunitario para ayudar a combatir infecciones y protegerlo para que no se enferme en el futuro. No se deben usar las pruebas de anticuerpos para diagnosticar una infección en curso, pero sí podrían servir para indicar que tuvo una infección previa. Con las pruebas de anticuerpos, se puede conocer cómo se defiende el sistema inmunitario del virus, además de conocer el nivel de protección de la población. Si se hace una prueba de anticuerpos después de recibir la vacuna, es posible que algunos tipos de prueba de anticuerpos (aunque no todos) den un resultado positivo. Esto depende del tipo específico de anticuerpos que detecta la prueba particular. Las pruebas de anticuerpos no se recomiendan en la actualidad para determinar: Si tiene una infección en curso. Si tiene inmunidad contra el SARS-CoV-2 después de haberse vacunado contra el COVID-19. Si debe recibir una dosis de refuerzo después de haberse vacunado contra el COVID-19. Si tiene que hacer cuarentena después de una exposición confirmada o presunta al COVID-19.",
    date: "04/06/22",
    nombre: "Héctor Emilio Velásquez Pérez",
    image1:
      "https://ciencia.unam.mx/uploads/infografias/if_pruebas_covid_14092020.jpg",
    image2: "",
  },
  // {
  //   id: "2",
  //   title: "hector1",
  //   body:
  //     "This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur",
  //   date: "11/02/21",
  // },
  // {
  //   id: "3",
  //   title: "hector1",
  //   body:
  //     "This blog post shows a few different types of content that are supported and styled with Material styles. Basic typography, images, and code are all supported. You can extend these by modifying Markdown.js Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum. Curabitur blandit tempus porttitor. **Nullam quis risus eget urna mollis** ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit. Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur",
  //   date: "11/01/22",
  // },
];

// const sidebar = {
//   title: "About",
//   description:
//     "Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.",
//   archives: [
//     { title: "March 2020", url: "#" },
//     { title: "February 2020", url: "#" },
//     { title: "January 2020", url: "#" },
//     { title: "November 1999", url: "#" },
//     { title: "October 1999", url: "#" },
//     { title: "September 1999", url: "#" },
//     { title: "August 1999", url: "#" },
//     { title: "July 1999", url: "#" },
//     { title: "June 1999", url: "#" },
//     { title: "May 1999", url: "#" },
//     { title: "April 1999", url: "#" },
//   ],
//   social: [
//     { name: "GitHub", icon: GitHubIcon },
//     { name: "Twitter", icon: TwitterIcon },
//     { name: "Facebook", icon: FacebookIcon },
//   ],
// };

const theme = createTheme();

function Blog() {
  const { url } = useNavigate();

  let seccionesHeader = blog.map(a => [a.secciones, a.key, a.id]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header title="Blog San Mateo" sections={seccionesHeader} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map(post => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          {/* <Grid container sx={{ mt: 3 }}> */}
          <Main
            title="Todo lo relevante a la salud lo podrás encontrar en este Blog..."
            posts={posts}
            url={url}
          />
          {/* </Grid> */}
          {/* <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            /> */}
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
