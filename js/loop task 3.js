 let totalCountNumber = 500;
 const para = document.createElement('p'); 

    function isPrime(num) {
        let i;
        const primeNumbers = [];

      for(i = 2; i <= num; i++) {
        let sqrtNumber=Math.floor(Math.sqrt(i));
        let isPrime = true;

        //inner loop to get the non-prime numbers
        //Formula for getting prime numbers: 
        // Divide the i variable from 2 up to it's square root.
        for(let sqrtLoop =2; sqrtLoop <=sqrtNumber; sqrtLoop++){
           if(i % sqrtLoop === 0){
              isPrime = false;
              console.log(i);
              break;
            }
        }
          if (isPrime) {
            primeNumbers.push(i);
            
        }
      }
      return primeNumbers.join(", ");
    }

    // Add your code here

    para.textContent= `Prime numbers: ${isPrime(totalCountNumber)}`;
    // Don't edit the code below here!
    const section = document.querySelector('section');
    section.appendChild(para);