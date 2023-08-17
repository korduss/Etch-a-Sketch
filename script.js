const container = document.querySelector('#container');

for(i = 0; i < 256; i++){
    const singleSquare = document.createElement('div');
    singleSquare.className = 'square';
    container.appendChild(singleSquare)
};
const squares = document.querySelectorAll('.square');

squares.forEach((square)=>{
    square.addEventListener('mouseenter', ()=>{
        square.classList.add('blackSquare');
    });
})