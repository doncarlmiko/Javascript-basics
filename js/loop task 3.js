 let totalCountNumber = 500;
 const para = document.createElement('p'); 

    function isPrime(num) {
        let getPrime;
        let i;
        

      for(i = 2; i <= num; i++) {
        //let numDivisors = num/i;
       // const sqrtOfEach
        //const PrimeNumbers = [];
        let sqrtNumber=Math.floor(Math.sqrt(i));
        
        for(let sqrtLoop =2; sqrtLoop <=sqrtNumber; sqrtLoop++){
            if(i % sqrtLoop === 0){
                console.log(i);
            }
        }
      }
    }

    // Add your code here

    para.textContent= `Prime numbers: ${isPrime(totalCountNumber)}`;
    // Don't edit the code below here!
    const section = document.querySelector('section');
    section.appendChild(para);