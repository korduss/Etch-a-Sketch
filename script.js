const mainContainer = document.querySelector('#mainContainer');
const sqrNumber = document.querySelector('.sqrNumber');

function createGrid(number){
    for(i = 0; i < number; i++){
        const container = document.createElement('div');
        container.className = 'container';
        mainContainer.appendChild(container);
        for(x = 0; x < number; x++){
            const singleSquare = document.createElement('div');
            singleSquare.className = 'square';
            container.appendChild(singleSquare)
        }
    }
}
createGrid(16);

sqrNumber.addEventListener('click', ()=>{
    while(mainContainer.hasChildNodes()){
        mainContainer.removeChild(mainContainer.lastChild);
    }
    const number = prompt("Please enter square number");
    if(number > 100){
        alert("Too many squares");
    }else{
    createGrid(number);
    const squares = document.querySelectorAll('.square');
    squares.forEach((square)=>{
        square.addEventListener('mouseenter', ()=>{
            square.classList.add('blackSquare');
        })
})
    }
})


//Draw system
const squares = document.querySelectorAll('.square');
squares.forEach((square)=>{
    square.addEventListener('mouseenter', ()=>{
        square.classList.add('blackSquare');
    })
})