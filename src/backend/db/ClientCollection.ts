import firebase from "@/backend/config";
import Client from "@/core/Client";
import ClientRepository from "@/core/ClientRepository";

export default class ClientCollection implements ClientRepository {

  #converter = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        age: client.age
      }
    },
    fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions): Client {
      const data = snapshot.data(options);
      return new Client(data.name, data.age, snapshot.id);
    }
  }

  async save(client: Client): Promise<Client> {
    if(client?.id) {
      await this.collection().doc(client.id).set(client);
      return client;
    } else {
      const documentReference = await this.collection().add(client);
      const document = await documentReference.get();
      return document.data();
    }
  }

  async delete(client: Client): Promise<void> {
    return this.collection().doc(client.id).delete();
  }

  async getAll(): Promise<Client[]> {
    const queryPromise = await this.collection().get();
    return queryPromise.docs.map(document => document.data()) ?? [];
  }

  private collection() {
    return firebase
      .firestore()
      .collection('clients')
      .withConverter(this.#converter)
  }
}