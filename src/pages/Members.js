import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../service/service";
import { MyTable } from "../components/Table";

export const Members = () => {
  const [member, getMember] = useState([]);

  useEffect(() => {
    const getMembers = async () => {
      let members = await getData("members");
      getMember(members);
    };
    getMembers();
  }, []);
  const column = [
    { heading: "ID", value: "id" },
    { heading: "USER NAME", value: "login" },
    { heading: "LINK", value: "html_url" },
    { heading: "AVATAR", value: "avatar_url" },
    { heading: "TYPE", value: "type" },
    { heading: "ADMIN", value: "site_admin" },
  ];

  return (
    <div className="App">
      <MyTable data={member} column={column} />
    </div>
  );
};
