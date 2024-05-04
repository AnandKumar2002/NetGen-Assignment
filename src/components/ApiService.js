const BASE_URL = 'https://api.github.com';

const ApiService = {
// fetch Repositories in this code
  async getRepositories(username) {
    const response = await fetch(`${BASE_URL}/users/${username}/repos`);
    if (!response.ok) {
      throw new Error('Failed to fetch repositories');
    }
    return response.json();
  },

// fetch username to apply the avtar(image)
  async getUser(username) {
    const response = await fetch(`${BASE_URL}/users/${username}`);
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  },
  
};

export default ApiService;
