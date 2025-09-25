const API = 'http://localhost:4000/api';  // change to your backend URL
const token = localStorage.getItem('token');

function setToken(t) {
  localStorage.setItem('token', t);
}

function logout() {
  localStorage.removeItem('token');
  window.location = 'index.html';
}

async function apiGet(url) {
  const r = await fetch(API + url, { headers: { Authorization: 'Bearer ' + token }});
  return r.json();
}

async function apiPost(url, body) {
  const r = await fetch(API + url, {
    method: 'POST',
    headers: { 'Content-Type':'application/json', Authorization: 'Bearer ' + token },
    body: JSON.stringify(body)
  });
  return r.json();
}
