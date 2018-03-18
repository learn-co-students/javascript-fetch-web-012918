const app = "I don't do much.";

// fetch('https://api.github.com/user/repos').then(res => res.json()).then(json => console.log(json))

const token = 'YOUR_TOKEN_HERE'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
