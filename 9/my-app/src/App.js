import './App.css';

import APOD from "./Nasa/APOD";
import Sorry from './Nasa/Sorry';
import { useQuery } from 'react-query'

/*
 name: str it is name of user
 */
const apiCallAPOD = () => {
  // call your API
  return fetch(
    "https://api.nasa.gov/planetary/apod?api_key=qSXNaJsdruq6nHTmBfLGLSXa1Ecxpo4fC9UyR3Gw"
  ).then(response => response.json());
}
const config = {
  staleTime: 10000,
  cacheTime: 50000000, // 10 seconds
}
function App() {
  const { data, status} = useQuery('apod', apiCallAPOD , config);

  

  if (status === 'loading') {
    return <span>Loading by merr dev...</span>;
  }

  if (data && Object.keys(data).length > 0) {
    return (
      <APOD {...data} />
    );
  }

  return (
    <div className="App">
       <Sorry />
    </div>
  );
}
export default App;