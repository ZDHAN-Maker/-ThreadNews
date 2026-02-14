const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();
    const { token } = responseJson.data;

    putAccessToken(token);
  }

  async function getOwnProfile() {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${getAccessToken()}`,
      },
    });

    const responseJson = await response.json();
    return responseJson.data.user;
  }

  async function getThreads() {
    const response = await fetch(`${BASE_URL}/threads`);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);
    return data.data.threads;
  }

  async function getThreadDetail(id) {
    const response = await fetch(
      `https://forum-api.dicoding.dev/v1/threads/${id}`,
    );
    const json = await response.json();
    return json.data;
  }

  return {
    login,
    getOwnProfile,
    putAccessToken,
    getThreadDetail,
    getThreads,
  };
})();

export default api;

