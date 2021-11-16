// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------
//replacing the fetch 
function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

const hearts = document.querySelectorAll(".like-glyph")
for (heart of hearts){
  heart.addEventListener("click", likeCallback)
  console.log(heart);
}

function likeCallback(e){

let heart = e.target
mimicServerCall()
.then (() => {
  if(heart.target.innerText === EMPTY_HEART) {
    heart.target.innerText = FULL_HEART
  }
  else if (hearts.target.innerText=== FULL_HEART) {
    heart.target.innerText = EMPTY_HEART
  }
})
.catch(() => {
  const erMsg = document.getElementById("modal")
  console.log(erMsg)
  erMsg.className = "hidden"

  setTimeout(() => {
    const erMsg = document.getElementById("modal")
    console.log(erMsg)
    erMsg.className = "hidden"}, 3000)}
    )}
 
