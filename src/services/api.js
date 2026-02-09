const BASE_URL = "https://forum-api.dicoding.dev/v1";

const api = {
  async register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data.data;
  },

  async login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data.data;
  },

  async getOwnProfile(token) {
    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.message);
    return data.data.user;
  },

  async getThreads() {
    const response = await fetch(`${BASE_URL}/threads`);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);
    return data.data.threads;
  },

  async getThreadDetail(id) {
    const response = await fetch(
      `https://forum-api.dicoding.dev/v1/threads/${id}`,
    );
    const json = await response.json();
    return json.data;
  },
};

export default api;
