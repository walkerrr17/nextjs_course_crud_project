import Button from "@/components/Button";
import Form from "@/components/Form";
import Layout from "@/components/Layout";
import Table from "@/components/Table";
import useClients from "@/hooks/useClients";

export default function Home() {

  const { tableIsVisible, displayTable, client, clientsArray, newClient, saveClientToDataBase, deleteClient, selectClient } = useClients();

  return (
    <div className="flex h-screen justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 text-white">
      <Layout title="Simple Register">
        {tableIsVisible ? (
          <>
            <div className="flex justify-end">
              <Button onClick={newClient} color="green" className="mb-4">New Client</Button>
            </div>
            <Table clients={clientsArray} selectClient={selectClient} deleteClient={deleteClient} />
          </>
        ) : (
          <Form client={client} onCancel={displayTable} onClientChange={saveClientToDataBase}/>
        )}
      </Layout>
    </div>
  );
}
