import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export const Home = () => {
  const [info, getInfo] = useState({});

  useEffect(() => {
    const getInfos = async () => {
      let { data } = await axios.get("https://api.github.com/orgs/boomtownroi");
      getInfo(data);
    };
    getInfos();
  }, []);

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">NAME</th>
            <th scope="col">VERIFIED</th>
            <th scope="col">CREATED</th>
            <th scope="col">UPDATED</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{info.id}</th>
            <td>
              <a href={info.html_url}>{info.name}</a>
            </td>
            <td>{info.is_verified ? <p>false</p> : <p>true</p>}</td>
            <td>{info.created_at}</td>
            <td>{info.updated_at}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};
