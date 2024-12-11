import Client from "@/core/Client";
import { DeleteIcon, EditIcon } from "./Icons";

interface TableProps{
  clients: Client[]
  selectClient?: (client: Client) => void
  deleteClient?: (client: Client) => void
}

export default function Table(props: TableProps) {
  const renderActions = props.deleteClient || props.selectClient;

  function renderTableColumns() {
    return (
      <tr>
        <th className="text-left p-4">Code</th>
        <th className="text-left p-4">Name</th>
        <th className="text-left p-4">Age</th>
        {renderActions && <th className="p-4">Actions</th>}
      </tr>
    )
  }

  function renderTableData() {
    return props.clients?.map((client, index) => {
      return (
        <tr key={client.id} className={`${index % 2 === 0 ? "bg-purple-200" : "bg-purple-100"}`}>
          <td className="text-left p-4">{client.id}</td>
          <td className="text-left p-4">{client.name}</td>
          <td className="text-left p-4">{client.age}</td>
          {renderActions && renderActionsColumn(client)}
        </tr>
      )
    })
  }

  function renderActionsColumn(client: Client) {
    return (
      <td className="flex justify-center items-center">
        {props.selectClient && (
          <button onClick={() => props.selectClient?.(client)} className="flex justify-center items-center text-green-600 rounded-full p-2 m-1 hover:bg-purple-50">{EditIcon}</button>
        )}

        {props.deleteClient && (
          <button onClick={() => props.deleteClient?.(client)}  className="flex justify-center items-center text-red-500 rounded-full p-2 m-1 hover:bg-purple-50">{DeleteIcon}</button>
        )}
      </td>
    )
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="bg-gradient-to-r from-purple-500 to-purple-800 text-gray-100">
        {renderTableColumns()}
      </thead>
      <tbody>
        {renderTableData()}
      </tbody>
    </table>
  );
}