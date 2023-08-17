const container = document.querySelector('#container');
// const singleSquare = document.createElement('div');
//singleSquare.className = 'square';
//singleSquare.setAttribute('style','background-color: grey;');
//singleSquare.textContent = 'i';

for(i = 0; i < 256; i++){
    const singleSquare = document.createElement('div');
    singleSquare.className = 'square';
    singleSquare.setAttribute('style','background-color: grey;');
    
    container.appendChild(singleSquare)

}