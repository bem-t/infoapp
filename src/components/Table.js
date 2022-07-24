import React from "react";
import Table from "react-bootstrap/Table";

export const MyTable = ({ data, column }) => {
  return (
    <Table responsive="sm">
      <thead>
        <tr>
          {column.map((item, index) => (
            <TableHeadItem item={item} key={index}/>
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
      if (columnItem.value.includes("url")) {
        return (
          <td key={index}>
            <a href={item[`${columnItem.value}`]}>click</a>
          </td>
        );
      }
      return <td key={index}>{item[`${columnItem.value}`]}</td>;
    })}
  </tr>
);
