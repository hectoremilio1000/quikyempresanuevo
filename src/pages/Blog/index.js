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
import { DataStore } from 'aws-amplify'
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { Spin } from 'antd';


import blog from "../../assets/data2/blog";
import { BLOG } from "../../models";

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

const post = {
  title: "Covid en México",
  description: "Sabes cual es la prueba indicada para ti?",
  image: "../../assets/images/blog/centaurus covid child muerte mexico.png",
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

const posts = [
  {
    id: 1,
    title:
      "De acuerdo con la Organización Mundial de la Salud (OMS), la variante Centaurus es más contagiosa que Omicrón",
    subtitle:"¿Por qué muta tanto el virus?",
    body: "Después de un repunte masivo en casos de COVID en la quinta ola, dos nuevas subvariantes habían salido a la luz y son conocidas como BA.4 y BA.5, lo cual hace que se pongan en alerta algunos países. Ya que son consideradas las más contagiosas, porque tienen mutaciones que les permiten evadir la inmunidad.",
    date: "10/07/22",
    nombre: "Héctor Emilio Velásquez Pérez",
    image1:
      "https://www.prensa-latina.cu/wp-content/uploads/2022/04/Covid-India-9.jpg",
    image2:
      "https://www.informador.mx/__export/1657070203806/sites/elinformador/img/2022/07/05/covid___por_que_omicro_x8222603x_crop1657070203341.jpg_1970638775.jpg",
    text1:
      "Tom Peacock, virólogo del Departamento de Enfermedades Infecciosas del Imperial College de Londres, detectó los primeros casos de la variante Peacock, el 30 de junio. Al observar más a Centaurus aseguró que ésta cuenta con 45 mutaciones en común con otras variantes y con 15 mutaciones particulares.",
    text2:
      "Las primeras evidencias del extranjero sugirieron que la nueva subvariante 2.75 tenía algunas características que pueden mejorar su capacidad para evadir la inmunidad similar a las subvariantes BA.4 y BA.4 y la BA.2.75 puede ser más transmisible que BA.2, dijo el Ministerio de Salud.",
    image3:
      "https://www.prensa-latina.cu/wp-content/uploads/2022/04/Covid-India-9.jpg",
    text3:
      "Centaurus es como se le conoce por el hecho de que tiene 16 mutaciones que fueron adquiridas al momento. Lo cual significa que no se adquirieron las variaciones de una en una, sino todas a la vez. Ocho de esas mutaciones se encuentran dentro de la proteína espiga S, la cual es la que más se relaciona con la transmisibilidad del SARS-CoV-2, así como también dos de ellas se muestran ser demasiado eficaces, ya que pueden evadir los anticuerpos que generan las vacunas, esto según el Bloom Lab.",
    image4: "https://pbs.twimg.com/media/FWpmc54aMAAcmIf?format=jpg&name=small",
  },
  {
    id: 2,
    title:
      "De acuerdo con la Organización Mundial de la Salud (OMS), la variante Centaurus es más contagiosa que Omicrón",
    body: "Es importante entender que la prueba COVID que solicites depende de muchos factores, por ejemplo si es para salir de vacaciones con tu Familia al extranjero, si es porque te lo solicitan en el trabajo o si quieres saber si ya no contagias a tus seres queridos. Por tanto, lo primero que tienes que comentar con tu Laboratorio de confianza es el motivo por el cual la realizas. Además de esto, existe la denominada Prueba de Anticuerpos. Pruebas de anticuerpos Una prueba de anticuerpos (también conocida como prueba serológica) permite detectar los anticuerpos para el SARS-CoV-2 en su sangre. Los anticuerpos son proteínas que produce su sistema inmunitario para ayudar a combatir infecciones y protegerlo para que no se enferme en el futuro. No se deben usar las pruebas de anticuerpos para diagnosticar una infección en curso, pero sí podrían servir para indicar que tuvo una infección previa. Con las pruebas de anticuerpos, se puede conocer cómo se defiende el sistema inmunitario del virus, además de conocer el nivel de protección de la población. Si se hace una prueba de anticuerpos después de recibir la vacuna, es posible que algunos tipos de prueba de anticuerpos (aunque no todos) den un resultado positivo. Esto depende del tipo específico de anticuerpos que detecta la prueba particular. Las pruebas de anticuerpos no se recomiendan en la actualidad para determinar: Si tiene una infección en curso. Si tiene inmunidad contra el SARS-CoV-2 después de haberse vacunado contra el COVID-19. Si debe recibir una dosis de refuerzo después de haberse vacunado contra el COVID-19. Si tiene que hacer cuarentena después de una exposición confirmada o presunta al COVID-19.",
    date: "07/06/22",
    nombre: "Héctor Emilio Velásquez Pérez",
    image1:
      "https://ciencia.unam.mx/uploads/infografias/if_pruebas_covid_14092020.jpg",
    image2: "",
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
  const [postBlog, setPostBlog] = useState([])

  const fetchBlog = async () => {
    const postFetch = await DataStore.query(BLOG)
    setPostBlog(postFetch);
  }

  useEffect(() => {
    fetchBlog();
  }, [])

  console.log(postBlog);
  

  const { url } = useNavigate();

  let seccionesHeader = blog.map(a => [a.secciones, a.key, a.id]);

  if (!postBlog) {
    return (<Spin size="large"/>)
  }

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
            <Main
              title="Todo lo relevante a la salud lo podrás encontrar Aquí"
              posts={postBlog}
              url={url}
            />
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
