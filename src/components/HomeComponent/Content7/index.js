import React from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const listItems = [
  {
    href: "/blog",
    title: "¿Centaurus 5 veces más contagiosa?",
    avatar: "https://joeschmoe.io/api/v1/jon",
    description:
      "¿Sabes cual prueba de COVID es la que debes solicitar en caso de que presentes Síntomas?",
    content:
      "La OMS comenta que se está expandiendo a una velocidad mayor que Omicrón...",
    image:
      "https://quikyempresanuevo-storage-03418b58110747-dev.s3.amazonaws.com/public/images/imagenesblog/centaurus+covid+child+muerte+mexico.png",
  },
];

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

function Content7() {
  return (
    <Container className="mb-4">
      <div className="pt-4 text-center ps-2 pe-2">
        <h1 className="fw-bold fs-2">
          Conoce las noticias más relevantes de medicina en general
        </h1>
      </div>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 1,
        }}
        dataSource={listItems}
        footer={
          <div>
            <Link to="/blog">
              <p className="fs-4 fw-bold text-center">Visita nuestro blog</p>
            </Link>
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={StarOutlined}
                text="156"
                key="list-vertical-star-o"
              />,
              <IconText
                icon={LikeOutlined}
                text="156"
                key="list-vertical-like-o"
              />,
              <IconText
                icon={MessageOutlined}
                text="2"
                key="list-vertical-message"
              />,
            ]}
            extra={
              <img
                width={272}
                alt="logo"
                src={listItems[0].image}
                style={{ borderRadius: 5 }}
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    </Container>
  );
}

export default Content7;
