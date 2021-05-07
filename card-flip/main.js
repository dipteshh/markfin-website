const cards= document.querySelectorAll(".card-inner")
function flipbtn(obj , i){
  cards[i-1].classList.toggle('is-flipped')
}
