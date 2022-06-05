import React from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const listItems = [
  {
    href: "/blog",
    title: "¿Cuál es la prueba COVID que necesito?",
    avatar: "https://joeschmoe.io/api/v1/random",
    description:
      "¿Sabes cual prueba de COVID es la que debes solicitar en caso de que presentes Síntomas?",
    content:
      "Es importante entender que la prueba que solicites depende de muchos factores, por ejemplo...",
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
          Quieres conocer las noticias más relevantes de medicina en general
        </h1>
        <h4 className="h5">
          Visita nuestro <b>Blog</b>
        </h4>
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
                src="https://www.paho.org/sites/default/files/styles/max_1500x1500/public/2020-03/blue-covid-banner.jpg?itok=N2g8afH3"
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
