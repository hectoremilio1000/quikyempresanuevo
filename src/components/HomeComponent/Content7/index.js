import React from "react";
import { List, Avatar, Space } from "antd";
import { MessageOutlined, LikeOutlined, StarOutlined } from "@ant-design/icons";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const listItems = [
  {
    href: "/blog",
    title: "La venopunción es un procedimiento invasivo ¿es necesario un consentimiento informado?",
    avatar: "https://joeschmoe.io/api/v1/jon",
    description:
      "Buenas prácticas de flebotomía de la OMS considera la toma de muestra sanguíneas como un procedimiento invasivo.",
    content:
      "Al introducir un objeto extraño dentro del cuerpo perforando el epitelio es suficiente..",
    image:
      "https://img.freepik.com/free-photo/friendly-hospital-phlebotomist-collecting-blood-sample-from-patient-lab-preparation-blood-test-by-female-doctor-medical-uniform-table-white-bright-room_657921-879.jpg",
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
              <p className="fs-3 fw-bold text-center">Visita nuestro blog</p>
            </Link>
          </div>
        }
        renderItem={item => (
          <List.Item
            key={item.title}
            // actions={[
            //   <IconText
            //     icon={StarOutlined}
            //     text="156"
            //     key="list-vertical-star-o"
            //   />,
            //   <IconText
            //     icon={LikeOutlined}
            //     text="156"
            //     key="list-vertical-like-o"
            //   />,
            //   <IconText
            //     icon={MessageOutlined}
            //     text="2"
            //     key="list-vertical-message"
            //   />,
            // ]}
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
