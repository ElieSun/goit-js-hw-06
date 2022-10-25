/* 
<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1> 
*/

const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

input.addEventListener("input", (event)=> {
    output.textContent = event.currentTarget.value;
});




// <form class="form" autocomplete="off">
//   <input type="text" name="login" placeholder="Login">
//   <input type="password" name="password" placeholder="Password">
//   <button class="btn" type="submit">Register</button>
// </form>


