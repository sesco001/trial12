const API = 'https://breact.onrender.com/api';

function setToken(t) {
  localStorage.setItem('token', t);
}

function logout() {
  localStorage.removeItem('token');
  window.location = 'index.html'; // or navigate('/') if using React Router
}

async function apiGet(url) {
  const token = localStorage.getItem('token');
  const r = await fetch(API + url, { headers: { Authorization: 'Bearer ' + token }});
  return r.json();
}

async function apiPost(url, body) {
  const token = localStorage.getItem('token');
  const r = await fetch(API + url, {
    method: 'POST',
    headers: { 'Content-Type':'application/json', Authorization: 'Bearer ' + token },
    body: JSON.stringify(body)
  });
  return r.json();
}

