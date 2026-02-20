const api = (() => {
  const BASE_URL = "https://forum-api.dicoding.dev/v1";

  function putAccessToken(token) {
    localStorage.setItem("accessToken", token);
  }

  function getAccessToken() {
    return localStorage.getItem("accessToken");
  }

  async function register({ name, email, password }) {
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const responseJson = await response.json();

    if (!response.ok) {
      throw new Error(responseJson.message);
    }

    return responseJson;
  }

  async function login({ email, password }) {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const responseJson = await response.json();

    if (!response.ok) {
      throw new Error(responseJson.message);
    }

    // 🔥 PERBAIKAN DI SINI
    const token = responseJson.data?.token;

    if (!token) {
      throw new Error("Token tidak ditemukan di response API");
    }

    putAccessToken(token);

    return token;
  }

  async function getOwnProfile() {
    const token = getAccessToken();

    if (!token) {
      throw new Error("Token tidak ditemukan");
    }

    const response = await fetch(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const responseJson = await response.json();

    if (!response.ok) {
      throw new Error(responseJson.message);
    }

    if (!responseJson.data || !responseJson.data.user) {
      throw new Error("Data user tidak tersedia");
    }

    return responseJson.data.user;
  }

  async function getThreads() {
    const response = await fetch(`${BASE_URL}/threads`);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);
    return data.data.threads;
  }

  async function getThreadDetail(id) {
    const response = await fetch(`${BASE_URL}/threads/${id}`);
    const json = await response.json();
    return json.data.detailThread;
  }

  async function getUsers() {
    const response = await fetch(`${BASE_URL}/users`);
    const data = await response.json();

    if (!response.ok) throw new Error(data.message);

    return data.data.users;
  }

  return {
    register,
    login,
    getOwnProfile,
    putAccessToken,
    getThreadDetail,
    getThreads,
    getUsers,
  };
})();

export default api;
