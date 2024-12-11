import { useState } from "react";
import Input from "./Input";
import Client from "@/core/Client";
import Button from "./Button";

interface FormProps {
  client: Client
  onClientChange?: (client: Client) => void
  onCancel?: () => void
}

export default function Form(props: FormProps) {
  const clientId = props.client?.id;
  const [clientName, setClientName] = useState(props.client?.name ?? '');
  const [clientAge, setClientAge] = useState(props.client?.age ?? 0);

  return (
    <div>
      {clientId && (
        <Input text="Code" value={clientId} readOnly />
      )}
      <Input text="Name" value={clientName} onChange={setClientName} />
      <Input text="Age" type="number" value={clientAge} onChange={setClientAge} />

      <div className="flex justify-end mt-7">
        <Button color="blue" className="mr-2" onClick={() => props.onClientChange?.(new Client(clientName, +clientAge, clientId))}>{clientId ? "Modify" : "Save"}</Button>
        <Button onClick={props.onCancel}>Cancel</Button>
      </div>
    </div>
  );
}