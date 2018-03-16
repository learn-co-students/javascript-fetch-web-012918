const token = '0e5ce23189998ed9107de8331083506e66823c1c'

const app = "I don't do much.";
fetch('https://api.github.com/repos/jquery/jquery/commits',{
  headers: {
    Authorization: `token ${token}`
  }

}).then(res => res.json())
  .then(json => console.log(json));
