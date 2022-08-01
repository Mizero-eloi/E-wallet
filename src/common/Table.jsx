import React from "react";

function Table({ columns, row }) {
  return (
    <table className="min-w-full">
      <thead className="border-b bg-gray-900 ">
        <tr>
          {columns.map((c) => (
            <th
              scope="col"
              className="text-sm font-medium text-white px-6 py-4 text-left"
            >
              {c}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {row.map((data) => (
          <tr className="border-b bg-white p-[30px]">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              1
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-6 whitespace-nowrap">
              {data["label"]}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data["amount"]}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data["description"]}
            </td>
            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
              {data["date"]}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
