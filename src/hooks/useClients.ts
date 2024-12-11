import ClientCollection from "@/backend/db/ClientCollection";
import Client from "@/core/Client";
import ClientRepository from "@/core/ClientRepository";
import { useEffect, useState } from "react";
import useSwitchVisibility from "./useSwitchVisibility";

export default function useClients() {
  const repository: ClientRepository = new ClientCollection();
  const { tableIsVisible, displayForm, displayTable } = useSwitchVisibility();
  
  const [client, setClient] = useState<Client>(Client.emptyClientInstance());
  const [clientsArray, setClientsArray] = useState<Client[]>([]);
  
  function getAllClients() {
    repository.getAll().then((clients) => {
      setClientsArray(clients);
      displayTable;
    });
  }

  useEffect(getAllClients, []);
  
  function selectClient(client: Client) {
    setClient(client);
    displayForm;
  }

  async function deleteClient(client: Client){
    await repository.delete(client);
    getAllClients();
  }

  function newClient() {
    setClient(Client.emptyClientInstance());
    displayForm;
  }

  async function saveClientToDataBase(client: Client) {
    await repository.save(client);
    getAllClients();
  }

  return {
    client,
    clientsArray,
    getAllClients,
    selectClient,
    deleteClient,
    newClient,
    saveClientToDataBase,
    tableIsVisible,
    displayTable
  }
}