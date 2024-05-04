import React from 'react'
import { useAuth } from "./Auth";
import './styles/Home-style/Home.scss'

function Home() {
  const auth = useAuth();

  return (
    <div className='home-container'>
      <h1>WELCOME</h1>
      {
        !auth.email ? (
          <h2>Please login before searching for GitHub repositories. But if you click, it's not gonna work. 😁</h2>
        ) : (
          <h2>Now You are ready to Search. ✌️</h2>
        )
      }
    </div>
  );
};

export default Home;