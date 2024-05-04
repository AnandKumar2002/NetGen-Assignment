import React, { useEffect, useState } from 'react';
import ApiService from './ApiService';
import './styles/GithubSearch-style/GitHubSearch.scss';

function GitHubSearch() {
  const [searchUsername, setSearchUsername] = useState('');
  const [username, setUsername] = useState('');
  const [repositories, setRepositories] = useState([]);
  const [avatarUrl, setAvatarUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (searchUsername === '') {
      alert('Enter Username');
      return;
    }
    setUsername(searchUsername);
    setSearchUsername('');
  };

  useEffect(() => {
    const fetchUserData = async () => {
      if (!username) {
        return;
      }

      setLoading(true);
      try {
        const user = await ApiService.getUser(username);
        setAvatarUrl(user.avatar_url);
        console.log(user);
        console.log(username);

        const repos = await ApiService.getRepositories(username);
        setRepositories(repos);
        console.log(repos);

        setError(null);

      } catch (error) {
        console.log(error);
        setError('Username not found');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [username]);

  return (
    <div className='container'>
      <h2>Search GitHub Username</h2>
      <div className='input-container'>
        <input
          type="text"
          placeholder="Enter a GitHub username"
          value={searchUsername}
          onChange={(e) => setSearchUsername(e.target.value)}
          className='search-input'
        />
        <button onClick={handleSearch} className='search-button'>Search</button>
      </div>
      {loading ? (
        <div><h1>Loading...</h1></div>
      ) : (
        <div>
          {error ? (
            <div className='error'>{error}</div>
          ) : (
            <>
              <div>
                <img src={avatarUrl} alt="User Avatar" className='avatar' />
                <h2>Repositories for {username}:</h2>
              </div>
              <ul className='lists'>
                {repositories.map(repo => (
                  <li key={repo.id}>
                    <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default GitHubSearch;
