import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { useEffect, useState } from "react";
import { getData } from "../service/service";
import { MyTable } from "../components/Table";

export const Repo = () => {
  const [repo, getRepo] = useState([]);

  useEffect(() => {
    const getRepos = async () => {
      let repos = await getData("repos");
      getRepo(repos);
    };
    getRepos();
  }, []);

  const column = [
    {heading: 'ID', value: 'id'},
    {heading: 'NAME', value: 'name'},
    {heading: 'LINK', value: 'html_url'},
    {heading: 'DESCRIPTION', value: 'description'},
    {heading: 'LANGUAGE', value: 'language'},
    {heading: 'CREATED', value: 'created_at'},
    {heading: 'UPDATED', value: 'updated_at'},
    {heading: 'PUSHED', value: 'pushed_at'},
  ]

  return (
    <div className="App">
      <MyTable data={repo} column={column} />
    </div>
  );
};
