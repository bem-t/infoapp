import React from "react";
import { useEffect, useState } from "react";
import { getData } from "../service/service";
import { MyTable } from "../components/Table";

export const Events = () => {
  const [event, getEvent] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      let events = await getData("events");
      getEvent(events);
    };
    getEvents();
  }, []);

  const column = [
    { heading: "ID", value: "id" },
    { heading: "TYPE", value: "type" },
    { heading: "NAME", value: "repo.name" },
    { heading: "LINK", value: "repo.url" },
    { heading: "CREATED", value: "created_at" },
  ];

  return (
    <div>
      <MyTable data={event} column={column} />
    </div>
  );
};
