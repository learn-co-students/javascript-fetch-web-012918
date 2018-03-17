const app = "I don't do much.";

const token = 'd2ee1e2f901e8a3d57daddae5bad7b256a499659'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
