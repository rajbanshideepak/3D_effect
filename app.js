const main = document.querySelector('.main')
const card = document.querySelector('.card');
const king = document.querySelector('img');

// main.addEventListener('mouseover',(e)=>{
//     let xaxis =(window.innerWidth / 2 - e.pageX) / 15;
//     let yaxis =(window.innerHeight / 2 - e.pageY) / 15;
//     card.style.transform =`rotateY(${xaxis}deg) rotateX(${yaxis}deg)`;  
// })

main.addEventListener('mouseover',()=>{
    king.classList.add('zoom')
    card.classList.add('cardrot')

    king.classList.remove('zoomOut')
    card.classList.remove('cardOut')
})
main.addEventListener('mouseout',()=>{
    king.classList.remove('zoom')
    card.classList.remove('cardrot')

    king.classList.add('zoomOut')
    card.classList.add('cardOut')
})