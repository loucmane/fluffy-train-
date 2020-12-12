window.onload = () => {
    localStorage.setItem('name', 'Loucmane')

        let car = {
            brand: 'Tesla',
            model: 'S',
            Year: 2022

        } 

        let car1 = {
            brand: 'Tesla',
            model: 'S',
            Year: 2022

        }

        let car2 = {
            brand: 'Tesla',
            model: 'S',
            Year: 2022

        }



        let cars = [car, car1, car2]

        let carAsText = JSON.stringify(car);
        localStorage.setItem('car', carAsText);



    document.getElementById('getFromLS').addEventListener('click', getFromLS);
    document.getElementById('getCarFromLS').addEventListener('click', getCarFromLS);
}




function getCarFromLS() {
    let CarFromLS = localStorage.getItem('car')

        console.log(CarFromLS);

    let car = JSON.parse(CarFromLS);

    console.log(car);
    
    let container

}

function getFromLS() {
    let nameFromLS = localStorage.getItem('name');




    let container = document.getElementById('container');
    container.innerHTML = '';
    

    let pTag = document.createElement('p');
    pTag.innerHTML = nameFromLS;
    container.appendChild(pTag);

}