const cards= document.querySelectorAll(".card-inner")
function flipbtn(obj , i){
  cards[i-1].classList.toggle('is-flipped')
}
for(i=1;i<=cards.length;i++)
{
    console.log(cards[i-1])
    
}
console.log(cards)