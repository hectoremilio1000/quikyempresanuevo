import { Button, Card, DatePicker, Divider, Input, Space } from 'antd';
import { DataStore, Storage } from 'aws-amplify';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BLOG } from '../../../../models';
import { Typography } from 'antd';
import { Image } from "antd";
import { v4 as uuidv4 } from "uuid"

import config from "../../../../aws-exports";
import {useNavigate} from 'react-router-dom'


const { Title, Text } = Typography;


const {aws_user_files_s3_bucket_region: region, aws_user_files_s3_bucket: bucket} = config

function EditarBlog() {
  const [blog, setBlog] = useState(null);
  const [mostrarEditarTitulo, setMostrarEditarTitulo] = useState(false);
  const [nuevoTitulo, setNuevoTitulo] = useState("");

  const [mostrarEditarSubtitulo, setMostrarEditarSubtitulo] = useState(false);
  const [nuevoSubtitulo, setNuevoSubtitulo] = useState("");

  const [mostrarEditarFecha, setMostrarEditarFecha] = useState(false);
  const [nuevoFecha, setNuevoFecha] = useState("");

  const [mostrarEditarTexto1, setMostrarEditarTexto1] = useState(false);
  const [nuevoTexto1, setNuevoTexto1] = useState("");

  const [mostrarEditarImagen1, setMostrarEditarImagen1] = useState(false);
  const [nuevoImagen1, setNuevoImagen1] = useState("");
  const [nuevoUrl1, setNuevoUrl1] = useState("");
  const [nuevoKey1, setNuevoKey1] = useState("");

  const [mostrarEditarTexto2, setMostrarEditarTexto2] = useState(false);
  const [nuevoTexto2, setNuevoTexto2] = useState("");

  const [mostrarEditarImagen2, setMostrarEditarImagen2] = useState(false);
  const [nuevoImagen2, setNuevoImagen2] = useState("");
  const [nuevoUrl2, setNuevoUrl2] = useState("");
  const [nuevoKey2, setNuevoKey2] = useState("");

  const [mostrarEditarTexto3, setMostrarEditarTexto3] = useState(false);
  const [nuevoTexto3, setNuevoTexto3] = useState("");

  const [mostrarEditarImagen3, setMostrarEditarImagen3] = useState(false);
  const [nuevoImagen3, setNuevoImagen3] = useState("");
  const [nuevoUrl3, setNuevoUrl3] = useState("");
  const [nuevoKey3, setNuevoKey3] = useState("");

  const navigate = useNavigate();

  let titulo = blog?.titulo;
  let subtitulo = blog?.subtitulo;
  let texto1 = blog?.texto1;
  let texto2 = blog?.texto2;
  let texto3 = blog?.texto3;
  let imagen1 = blog?.url1;
  let imagen2 = blog?.url2;
  let imagen3 = blog?.url3;
  let fecha = blog?.fecha;

  const { id } = useParams();

  

  const fetchBlog = async () => {
    const blog = await DataStore.query(BLOG, id);
    setBlog(blog);
  };

  useEffect(() => {
    fetchBlog();
  }, [id]);

  // Editar Título

  const MostrarEditarTitulo = () => {
    setMostrarEditarTitulo(!mostrarEditarTitulo);
  };

  const guardarTitulo = async () => {
    const updateBlog = await DataStore.save(
      BLOG.copyOf(blog, updated => {
        updated.titulo = nuevoTitulo;
      })
    );
    setBlog(updateBlog);
    window.location.reload(false);
  };

  //Editar Subtitulo //

  const MostrarEditarSubtitulo = () => {
    setMostrarEditarSubtitulo(!mostrarEditarSubtitulo);
  };

  const guardarSubtitulo = async () => {
    const updateBlog = await DataStore.save(
      BLOG.copyOf(blog, updated => {
        updated.subtitulo = nuevoSubtitulo;
      })
    );
    setBlog(updateBlog);
    window.location.reload(false);
  };

  //Editar Fecha

  const MostrarEditarFecha = () => {
    setMostrarEditarFecha(!mostrarEditarFecha);
  };

  const NuevaFecha = (value, dateString) => {
    setNuevoFecha(dateString);
  };

  const guardarFecha = async () => {
    const updateBlog = await DataStore.save(
      BLOG.copyOf(blog, updated => {
        updated.fecha = nuevoFecha;
      })
    );
    setBlog(updateBlog);
    window.location.reload(false);
  };

  //editar Texto1

  const MostrarEditarTexto1 = () => {
    setMostrarEditarTexto1(!mostrarEditarTexto1);
  };

  const guardarTexto1 = async () => {
    const updateBlog = await DataStore.save(
      BLOG.copyOf(blog, updated => {
        updated.texto1 = nuevoTexto1;
      })
    );
    setBlog(updateBlog);
    window.location.reload(false);
  };

  //Editar Imagen 1

  const MostrarEditarImagen1 = () => {
    setMostrarEditarImagen1(!mostrarEditarImagen1);
  };

  const onChangeImagen1 = async e => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      await Storage.put(key, file, {
        level: "public",
        acl: "public-read",
        contentType: file.type,
      });
      const image = await Storage.get(key, { level: "public" });
      setNuevoImagen1(image);
      setNuevoUrl1(url);
      setNuevoKey1(key);
      console.log("archivo guardado");
    } catch (error) {
      console.log(error);
    }
  };

  const guardarImagen1 = async () => {
    const updateBlog = await DataStore.save(
      BLOG.copyOf(blog, updated => {
        updated.imagen1 = nuevoImagen1;
        updated.url1 = nuevoUrl1;
      })
    );
    setBlog(updateBlog);
    window.location.reload(false);
  };

  //Editar Texto2
  const MostrarEditarTexto2 = () => {
    setMostrarEditarTexto2(!mostrarEditarTexto2);
  };

  const guardarTexto2 = async () => {
    const updateBlog = await DataStore.save(
      BLOG.copyOf(blog, updated => {
        updated.texto2 = nuevoTexto2;
      })
    );
    setBlog(updateBlog);
    window.location.reload(false);
  };

  //Editar Imagen2
  const MostrarEditarImagen2 = () => {
    setMostrarEditarImagen2(!mostrarEditarImagen2);
  };

  const onChangeImagen2 = async e => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      await Storage.put(key, file, {
        level: "public",
        acl: "public-read",
        contentType: file.type,
      });
      const image2 = await Storage.get(key, { level: "public" });
      setNuevoImagen2(image2);
      setNuevoUrl2(url);
      setNuevoKey2(key);
      console.log("archivo guardado");
    } catch (error) {
      console.log(error);
    }
  };

  const guardarImagen2 = async () => {
    const updateBlog = await DataStore.save(
      BLOG.copyOf(blog, updated => {
        updated.imagen2 = nuevoImagen2;
        updated.url2 = nuevoUrl2;
      })
    );
    setBlog(updateBlog);
    window.location.reload(false);
  };

  //Editar Texto3
  const MostrarEditarTexto3 = () => {
    setMostrarEditarTexto3(!mostrarEditarTexto3);
  };

  const guardarTexto3 = async () => {
    const updateBlog = await DataStore.save(
      BLOG.copyOf(blog, updated => {
        updated.texto3 = nuevoTexto3;
      })
    );
    setBlog(updateBlog);
    window.location.reload(false);
  };

  //Editar Imagen2
  const MostrarEditarImagen3 = () => {
    setMostrarEditarImagen3(!mostrarEditarImagen3);
  };

  const onChangeImagen3 = async e => {
    e.preventDefault();
    const file = e.target.files[0];
    const extension = file.name.split(".")[1];
    const name = file.name.split(".")[0];
    const key = `images/${uuidv4()}${name}.${extension}`;
    const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
    try {
      await Storage.put(key, file, {
        level: "public",
        acl: "public-read",
        contentType: file.type,
      });
      const image3 = await Storage.get(key, { level: "public" });
      setNuevoImagen3(image3);
      setNuevoUrl3(url);
      setNuevoKey3(key);
      console.log("archivo guardado");
    } catch (error) {
      console.log(error);
    }
  };

  const guardarImagen3 = async () => {
    const updateBlog = await DataStore.save(
      BLOG.copyOf(blog, updated => {
        updated.imagen3 = nuevoImagen3;
        updated.url3 = nuevoUrl3;
      })
    );
    setBlog(updateBlog);
    window.location.reload(false);
  };
  const EliminarEntrada = async () => {
    await DataStore.delete(BLOG, id);
    navigate("/admin2");
  }

  return (
    <>
      <Card >
        <div style={{marginBottom:4}}>
          <Typography>Blog Id: {id}</Typography>
          <Button onClick={EliminarEntrada} type="danger"> Eliminar Entrada de Blog</Button>
        </div>
        <Divider/>
        <Card size="small" title="Editar Entrada de Blog">
          <Title level={4}>{titulo}</Title>
          <Button type="primary" onClick={MostrarEditarTitulo}>
            Editar
          </Button>

          {mostrarEditarTitulo && (
            <Card size="small">
              <Input
                placeholder={titulo}
                onChange={e => setNuevoTitulo(e.target.value)}
                value={nuevoTitulo}
              />
              <Button onClick={guardarTitulo}>Guardar</Button>
            </Card>
          )}
        </Card>

        <Card size="small" style={{ marginTop: 10 }}>
          <Title level={5}>{subtitulo}</Title>
          <Button type="primary" onClick={MostrarEditarSubtitulo}>
            Editar
          </Button>

          {mostrarEditarSubtitulo && (
            <Card size="small">
              <Input
                placeholder={subtitulo}
                onChange={e => setNuevoSubtitulo(e.target.value)}
                value={nuevoSubtitulo}
              />
              <Button onClick={guardarSubtitulo}>Guardar</Button>
            </Card>
          )}
        </Card>

        <Card size="small" style={{ marginTop: 10 }}>
          <Text type="secondary">{fecha}</Text>
          <br />
          <Button type="primary" onClick={MostrarEditarFecha}>
            Editar
          </Button>

          {mostrarEditarFecha && (
            <Card size="small">
              <DatePicker
                onChange={NuevaFecha}
                style={{
                  width: 125,
                  margin: 10,
                  backgroundColor: "white",
                  padding: 8,
                  borderRadius: 5,
                }}
                size="middle"
                placeholder={fecha}
              />
              <Button onClick={guardarFecha}>Guardar</Button>
            </Card>
          )}
        </Card>

        <Card size="small" style={{ marginTop: 10 }}>
          <Text>{texto1}</Text> <br />
          <Button type="primary" onClick={MostrarEditarTexto1}>
            Editar
          </Button>
          {mostrarEditarTexto1 && (
            <Card size="small">
              <Input
                placeholder={texto1}
                onChange={e => setNuevoTexto1(e.target.value)}
                value={nuevoTexto1}
              />
              <Button onClick={guardarTexto1}>Guardar</Button>
            </Card>
          )}
        </Card>

        <Space direction="vertical" size="middle" style={{ display: "flex" }}>
          <Card size="small" style={{ marginTop: 10 }}>
            <Image width={200} src={imagen1} /> <br />
            <Button
              type="primary"
              onClick={MostrarEditarImagen1}
              style={{ marginTop: 4 }}
            >
              Editar
            </Button>
            {mostrarEditarImagen1 && (
              <Card size="small">
                <p>
                  Sube la nueva imagen 1 en formato .jpg:
                  <br />
                  <input
                    type="file"
                    accept="jpg"
                    onChange={e => onChangeImagen1(e)}
                  />
                </p>
                <Button onClick={guardarImagen1}>Guardar</Button>
              </Card>
            )}
          </Card>

          <Card size="small" style={{ marginTop: 10 }}>
            <Text>{texto2}</Text> <br />
            <Button type="primary" onClick={MostrarEditarTexto2}>
              Editar
            </Button>
            {mostrarEditarTexto2 && (
              <Card size="small">
                <Input
                  placeholder={texto2}
                  onChange={e => setNuevoTexto2(e.target.value)}
                  value={nuevoTexto2}
                />
                <Button onClick={guardarTexto2}>Guardar</Button>
              </Card>
            )}
          </Card>

          <Card size="small" style={{ marginTop: 10 }}>
            <Image width={200} src={imagen2} /> <br />
            <Button
              type="primary"
              onClick={MostrarEditarImagen2}
              style={{ marginTop: 4 }}
            >
              Editar
            </Button>
            {mostrarEditarImagen2 && (
              <Card size="small">
                <p>
                  Sube la nueva imagen 2 en formato .jpg:
                  <br />
                  <input
                    type="file"
                    accept="jpg"
                    onChange={e => onChangeImagen2(e)}
                  />
                </p>
                <Button onClick={guardarImagen2}>Guardar</Button>
              </Card>
            )}
          </Card>

          <Card size="small" style={{ marginTop: 10 }}>
            <Text>{texto3}</Text> <br />
            <Button type="primary" onClick={MostrarEditarTexto3}>
              Editar
            </Button>
            {mostrarEditarTexto3 && (
              <Card size="small">
                <Input
                  placeholder={texto3}
                  onChange={e => setNuevoTexto3(e.target.value)}
                  value={nuevoTexto3}
                />
                <Button onClick={guardarTexto3}>Guardar</Button>
              </Card>
            )}
          </Card>

          <Card size="small" style={{ marginTop: 10 }}>
            <Image width={200} src={imagen3} /> <br />
            <Button
              type="primary"
              onClick={MostrarEditarImagen3}
              style={{ marginTop: 4 }}
            >
              Editar
            </Button>
            {mostrarEditarImagen3 && (
              <Card size="small">
                <p>
                  Sube la nueva imagen 3 en formato .jpg:
                  <br />
                  <input
                    type="file"
                    accept="jpg"
                    onChange={e => onChangeImagen3(e)}
                  />
                </p>
                <Button onClick={guardarImagen3}>Guardar</Button>
              </Card>
            )}
          </Card>
        </Space>
      </Card>
    </>
  );
}

export default EditarBlog