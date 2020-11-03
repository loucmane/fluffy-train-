



 /* 
 1. Ta reda på vad som står i textrutan.

 2. Loopa igenom texten
 a) omvandla till ett tal parseInt()
 b) om i är ett jämt tall
 i) multiplicera med 2
 ii) multiplicera med 1


 c) är produkten större än eller lika med 10
 i) beräkna talsumman
 ii) lägg bara till produkten som den är

 3. beräkna kontrollsifran genom 10 -  sum % 10
 */


 function  checkpnr() {
     let pnr = document.getElementById('pnr').value;
     let sum = 0;
    for (let i = 0; i < pnr.length; i++) {
        console.log(pnr[i]);
        let currentNumber = parseInt(pnr[i]);
        console.log(currentNumber);        

           if (i % 2 == 0) {
              let double = currentNumber * 2;
               
              if (double >= 10 ) {
                sum += (double % 10) * 1

              }else {
                sum += double;
              }
           
            }else {
                currentNumber * 1;
                sum += currentNumber;
              }
        


    }

    let controlNumber = 10 - (sum % 10);
    document.getElementById('result').innerHTML = pnr + controlNumber;

 }