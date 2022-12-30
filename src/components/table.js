import * as React from "react"

const Table = ({ data }) => {
  return (
    <table className="flex flex-row w-full h-auto p-2 m-2 items-baseline">
      <tbody>
        <tr className="justify-between text-justify p-4 m-4 font-sourceserifpro">
          <th>Image</th>
          <th>Name</th>
          <th>Post</th>
          <th>Profession</th>
        </tr>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.image}</td>
            <td>{item.name}</td>
            <td>{item.post}</td>
            <td>{item.profession}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
