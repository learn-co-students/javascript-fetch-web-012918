const token = 'bedf97107328a76da90ecb94d7bd50e13b84c436'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
