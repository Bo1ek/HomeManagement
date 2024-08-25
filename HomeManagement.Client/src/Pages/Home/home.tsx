import axios, { AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { HomeContainer, HomeLink, HomeHeader } from './home.styled'; // Zakładamy, że masz zdefiniowane te styled-components

function Home() {
  useEffect(() => {
    axios
      .get('http://localhost:5104/api/Tests/GetTests')
      .then((response: AxiosResponse<any>) => {
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response) {
          console.error('Server responded with an error:', error.response.status);
          console.error(error.response.data);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error in setting up request:', error.message);
        }
      });
  }, []);

  return (
    <HomeContainer>
      <HomeHeader>
        <HomeLink
          href="https://github.com/Bo1ek/HomeManagement"
          target="_blank"
          rel="noopener noreferrer"
        >
          Home Management Project
        </HomeLink>
        <p>Communication with ASP.NET Core</p>
        <HomeLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </HomeLink>
      </HomeHeader>
    </HomeContainer>
  );
}

export default Home;
