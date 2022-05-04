import { Environment, Network, Store, RecordSource, Observable } from "relay-runtime";

// Define a function that fetches the results of an operation (query/mutation/etc)
// and returns its results as a Promise:
function fetchQuery(...args) {
  return Observable.create((sink) => {

    sink.next({ data: { test: Math.floor(Math.random() * 100) } });
    sink.complete();
  })
}

// Create a network layer from the fetch function
const network = Network.create(fetchQuery);

// Create an environment using this network:
const environment = new Environment({
  network,
  store: new Store(new RecordSource())
});

export default environment;
