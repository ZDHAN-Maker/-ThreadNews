const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  async function fetchWithAuth(url, options = {}) {
    const token = getAccessToken();

    return fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
  }

  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    });

    const json = await response.json();
    if (!response.ok) throw new Error(json.message);

    return json;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const json = await response.json();
    if (!response.ok) throw new Error(json.message);

    const token = json.data?.token;
    if (!token) throw new Error('Token tidak ditemukan dari API');

    putAccessToken(token);
    return token;
  }

  async function getOwnProfile() {
    const response = await fetchWithAuth(`${BASE_URL}/users/me`);
    const json = await response.json();

    if (!response.ok) throw new Error(json.message);
    return json.data?.user;
  }

  async function getThreads() {
    const response = await fetch(`${BASE_URL}/threads`);
    const json = await response.json();

    if (!response.ok) throw new Error(json.message);
    return json.data.threads;
  }

  async function getThreadDetail(id) {
    const response = await fetch(`${BASE_URL}/threads/${id}`);
    const json = await response.json();

    if (!response.ok) throw new Error(json.message);
    return json.data.detailThread;
  }

  async function createThread({ title, category, body }) {
    const response = await fetchWithAuth(`${BASE_URL}/threads`, {
      method: 'POST',
      body: JSON.stringify({ title, category, body }),
    });

    const json = await response.json();

    if (!response.ok) throw new Error(json.message);
    return json.data;
  }

  async function getUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    const json = await response.json();

    if (!response.ok) throw new Error(json.message);
    return json.data.users;
  }

  async function getLeaderboards() {
    const response = await fetch(`${BASE_URL}/leaderboards`);
    const json = await response.json();

    if (!response.ok) throw new Error(json.message);
    return json.data;
  }

  return {
    register,
    login,
    putAccessToken,
    getOwnProfile,
    getThreads,
    getThreadDetail,
    createThread, 
    getUsers,
    getLeaderboards,
  };
})();

export default api;