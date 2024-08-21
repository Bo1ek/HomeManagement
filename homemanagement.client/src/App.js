import axios, { AxiosResponse} from 'axios';
import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  useEffect(() => {
    axios.get('http://localhost:5104/api/Tests/GetTests')
    .then((response: AxiosResponse<any>) => {
      console.log(response.data);
    })
    .catch(error => {
      if (error.response) {
        // The request was made, and the server responded with a status code
        // that falls out of the range of 2xx
        console.error('Server responded with an error:', error.response.status);
        console.error(error.response.data);
      } else if (error.request) {
        // The request was made, but no response was received
        console.error('No response received:', error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error('Error in setting up request:', error.message);
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Communication with ASP.NET Core
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
