import React from "react";

function Table({ columns, row, paths }) {
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
            {paths.map((path) => {
              console.log("data path", path);
              return (
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {data[path]}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
