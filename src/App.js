import "./styles.css";
import { useLazyLoadQuery } from "react-relay";
import graphql from 'babel-plugin-relay/macro';
import React from "react"

const query = graphql`
  query AppQuery {
    test
  }
`;

const QueryThing = () => {
  const data = useLazyLoadQuery(
    query, 
    {}, 
    {
      fetchPolicy: 'network-only',
      networkCacheConfig: {
        poll: 1000,
      }
    }
  );
  console.log(data)
  return (
    <div className="App">
      <h1>Test query</h1>
      <h2>result: {data.test}</h2>
    </div>
  );
}

export default function App() {
  const [show, set] = React.useState(true)

  React.useEffect(() => {
    setTimeout(() => {
      set(false)
    }, 5000)
  }, [])
  
  return show ? <QueryThing /> : null
}
