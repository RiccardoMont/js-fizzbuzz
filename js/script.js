console.log('eccoci')

const square = document.querySelector('.w-100');


for (let i = 1; i <= 100; i++){
    console.log(i);

    /*Variabili metodo append*/
    const littleContainer = document.querySelector('.littleContainer');
    const div = document.createElement('div');
    

    if(i % 5 == 0 && i % 3 == 0){
        /*Metodo adjacent*/
        const squareMarkUp = `<div class="Fizz-Buzz d-flex justify-content-center align-items-center fs-5 fw-bold text-primary">&#161FizzBuzz!</div>`;
        square.insertAdjacentHTML('beforeend', squareMarkUp);

        /*Metodo append*/
        div.classList.add("Fizz-Buzz", "d-flex", "justify-content-center", "align-items-center", "fs-5", "fw-bold", "text-primary");
        div.append(`${i}`);
        littleContainer.append(div);

    } else if(i % 5 == 0){
        /*Metodo adjacent*/
        const squareMarkUp = `<div class="square-Buzz d-flex justify-content-center align-items-center fs-5 fw-bold text-warning">Buzz!</div>`;
        square.insertAdjacentHTML('beforeend', squareMarkUp);

        /*Metodo append*/
        div.classList.add("square-Buzz", "d-flex", "justify-content-center", "align-items-center", "fs-5", "fw-bold", "text-warning");
        div.append(`${i}`);
        littleContainer.append(div);
        
    } else if(i % 3 == 0){
        /*Metodo adjacent*/
        const squareMarkUp = `<div class="square-Fizz d-flex justify-content-center align-items-center fs-5 fw-bold text-danger">&#161Fizz</div>`;
        square.insertAdjacentHTML('beforeend', squareMarkUp);

        /*Metodo append*/
        div.classList.add("square-Fizz", "d-flex", "justify-content-center", "align-items-center", "fs-5", "fw-bold", "text-danger");
        div.append(`${i}`);
        littleContainer.append(div);

    } else {
        /*Metodo adjacent*/
        const squareMarkUp = `<div class="square d-flex justify-content-center align-items-center fs-5 fw-bold">${i}</div>`;
        square.insertAdjacentHTML('beforeend', squareMarkUp);

        /*Metodo append*/
        div.classList.add("square", "d-flex", "justify-content-center", "align-items-center", "fs-5", "fw-bold");
        div.append(`${i}`);
        littleContainer.append(div);
    }

    
    

}


