import axios from 'axios';

const api = (() => {
  const BASE_URL = 'https://forum-api.dicoding.dev/v1';

  const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  function putAccessToken(token) {
    localStorage.setItem('accessToken', token);
  }

  function getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  // interceptor untuk auth otomatis
  instance.interceptors.request.use((config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

  async function register({ name, email, password }) {
    const { data } = await instance.post('/register', {
      name,
      email,
      password,
    });

    return data;
  }

  async function login({ email, password }) {
    const { data } = await instance.post('/login', {
      email,
      password,
    });

    const token = data.data?.token;
    if (!token) throw new Error('Token tidak ditemukan dari API');

    putAccessToken(token);
    return token;
  }

  async function getOwnProfile() {
    const { data } = await instance.get('/users/me');
    return data.data.user;
  }

  async function getThreads() {
    const { data } = await instance.get('/threads');
    return data.data.threads;
  }

  async function getThreadDetail(id) {
    const { data } = await instance.get(`/threads/${id}`);
    return data.data.detailThread;
  }

  async function createThread({ title, category, body }) {
    const { data } = await instance.post('/threads', {
      title,
      category,
      body,
    });

    return data.data;
  }

  async function getUsers() {
    const { data } = await instance.get('/users');
    return data.data.users;
  }

  async function getLeaderboards() {
    const { data } = await instance.get('/leaderboards');
    return data.data;
  }

  async function createComment(threadId, { content }) {
    const { data } = await instance.post(`/threads/${threadId}/comments`, {
      content,
    });

    return data.data.comment;
  }

  async function upvoteComment(threadId, commentId) {
    const { data } = await instance.post(`/threads/${threadId}/comments/${commentId}/up-vote`);

    return data.data.comment;
  }

  async function downvoteComment(threadId, commentId) {
    const { data } = await instance.post(`/threads/${threadId}/comments/${commentId}/down-vote`);

    return data.data.comment;
  }

  async function neutralizeCommentVote(threadId, commentId) {
    const { data } = await instance.post(`/threads/${threadId}/comments/${commentId}/neutral-vote`);

    return data.data.comment;
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
    createComment,
    upvoteComment,
    downvoteComment,
    neutralizeCommentVote,
  };
})();

export default api;
