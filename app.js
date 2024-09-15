document.getElementById('postForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const content = document.getElementById('content').value;

  fetch('https://0beec862-6e17-4365-98f0-393e0dffb91f-00-1ux9enpoi0rl5.sisko.replit.dev/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ title, content })
  }).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
