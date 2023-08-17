const mainContainer = document.querySelector('#mainContainer');


//Create grid of squares
for(i = 0; i < 16; i++){
    const container = document.createElement('div');
    container.className = 'container';
    mainContainer.appendChild(container);
    for(x = 0; x < 16; x++){
        const singleSquare = document.createElement('div');
        singleSquare.className = 'square';
        container.appendChild(singleSquare)
    }
}
//Draw system
const squares = document.querySelectorAll('.square');
squares.forEach((square)=>{
    square.addEventListener('mouseenter', ()=>{
        square.classList.add('blackSquare');
    })
})