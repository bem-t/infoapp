import React from "react";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";

export const MyTable = ({ data, column }) => {
  return (
    <Table responsive="sm" striped hover>
      <thead>
        <tr>
          {column.map((item, index) => (
            <TableHeadItem item={item} key={index} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow item={item} column={column} key={index} />
        ))}
      </tbody>
    </Table>
  );
};

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;

const TableRow = ({ item, column }) => (
  <tr>
    {column.map((columnItem, index) => {
      if (columnItem.value.includes("avatar")) {
        return (
          <td key={index}>
            <Image
              roundedCircle
              height={50}
              src={item[`${columnItem.value}`]}
            />
          </td>
        );
      }

      if (columnItem.value.includes("html")) {
        return (
          <td key={index}>
            <a href={item[`${columnItem.value}`]}>click</a>
          </td>
        );
      }

      if (columnItem.value.includes(".")) {
        const itemSplit = columnItem.value.split(".");
        if (columnItem.value.includes("url")) {
          return (
            <td key={index}>
              <a href={`${item[itemSplit[0]][itemSplit[1]]}`}>click</a>
            </td>
          );
        }
        return <td key={index}>{item[itemSplit[0]][itemSplit[1]]}</td>;
      }

      return <td key={index}>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);
