import { Table } from "antd";
import { DataStore } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { BLOG } from "../../../../models/index";


function ListaBlog() {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();

  const fetchBlog = async () => {
    const blog = await DataStore.query(BLOG);
    setBlog(blog)
  }

  useEffect(() => {
    fetchBlog();
  }, [])
  

  console.log(blog);

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Título",
      dataIndex: "titulo",
      key:"titulo"
    },
    {
      title: "Fecha",
      dataIndex: "fecha",
      key:"fecha"
    }
  ]

  return (
    <>
      <Table columns={columns} dataSource={blog} rowKey="id" onRow={(blogItem) => ({
        onClick:()=>navigate(`/admin2/blog/${blogItem.id}`),
      })}/>
    </>
  )
}

export default ListaBlog;
