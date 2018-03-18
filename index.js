const app = "I don't do much.";


  // let xhr = new XMLHttpRequest();
  // xhr.open('GET','https://api.github.com/repos/jquery/jquery/commits')
  // xhr.responseType = 'json';
  //
  // xhr.onload = function() {
  //   console.log(xhr.response);
  // };
  //
  // xhr.onerror = function() {
  //   console.log('Boo');
  // };
  //
  // xhr.send();

const token = '280c0ab5efbbc0b1774edf9998c1e9afb0255113'
fetch("https://api.github.com/user/repos", {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json))
