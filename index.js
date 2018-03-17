const app = "I don't do much.";

// //// OLD WAY USING XHR
// let xhr = new XMLHttpRequest()
//
// xhr.open("GET", 'https://api.github.com/repos/jquery/jquery/commits')
// xhr.responseType = 'json'
//
// xhr.onload = function() {
//   console.log(xhr.response)
// }
//
// xhr.onError = function() {
//   console.log('Booo')
// }
//
// xhr.send()

const token = 'bdfa03271b130f33c4b1bfa3636e1b7a48aba083'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }.then(res => res.json().then(json => console.log(json)))

// bdfa03271b130f33c4b1bfa3636e1b7a48aba083  -  Github token
