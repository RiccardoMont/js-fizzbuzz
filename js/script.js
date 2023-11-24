console.log('eccoci')

const square = document.querySelector('.w-100');


for (let i = 1; i <= 100; i++){
    console.log(i);
    

    if(i % 5 == 0 && i % 3 == 0){
        const squareMarkUp = `<div class="Fizz-Buzz d-flex justify-content-center align-items-center fs-5 fw-bold text-primary">&#161FizzBuzz!</div>`;
        square.insertAdjacentHTML('beforeend', squareMarkUp);

    } else if(i % 5 == 0){
        const squareMarkUp = `<div class="square-Buzz d-flex justify-content-center align-items-center fs-5 fw-bold text-warning">Buzz!</div>`;
        square.insertAdjacentHTML('beforeend', squareMarkUp);
        
    } else if(i % 3 == 0){
        const squareMarkUp = `<div class="square-Fizz d-flex justify-content-center align-items-center fs-5 fw-bold text-danger">&#161Fizz</div>`;
        square.insertAdjacentHTML('beforeend', squareMarkUp);

    } else {
        const squareMarkUp = `<div class="square d-flex justify-content-center align-items-center fs-5 fw-bold">${i}</div>`;
        square.insertAdjacentHTML('beforeend', squareMarkUp);
    }


}