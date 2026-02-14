const BASE_URL = "https://forum-api.dicoding.dev/v1";

async function fetchWithAuth(url, options = {}) {
  const token = localStorage.getItem("accessToken");

  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
}

const api = {
  async getThreads() {
    const response = await fetch(`${BASE_URL}/threads`);
    const json = await response.json();
    return json.data;
  },

  async getThreadDetail(id) {
    const response = await fetch(`${BASE_URL}/threads/${id}`);
    const json = await response.json();
    return json.data;
  },

  async register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    return response.json();
  },

  async login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return response.json();
  },

  async getOwnProfile() {
    const response = await fetchWithAuth(`${BASE_URL}/users/me`);
    const json = await response.json();
    return json.data;
  },

  async getLeaderboards() {
    const response = await fetch(
      "https://forum-api.dicoding.dev/v1/leaderboards",
    );

    const responseJson = await response.json();
    return responseJson.data;
  },
};

export default api;
