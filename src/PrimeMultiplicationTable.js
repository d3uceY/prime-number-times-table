import React, {useState} from "react";


//to make sure it's a prime number

function itsPrime (number) {
    if (number < 2) return false;
    for (let i = 2; i < number; i++) {
        if(number % i === 0) return false;
    }
    return true;
}

//generating prime number from start

function generatePrimes(primeNums) {
    let primeNumbers = [];
    let i = 2;
    while (primeNumbers.length < primeNums){
        if (itsPrime(i)) {
            primeNumbers.push(i);
        }
        i++;
    }
    return (primeNumbers)
}


function PrimeMultiplicationTable(){
    //states
    const [primeNums, setPrimeNums] = useState(10);
    const [primeNumbers, setPrimeNumbers] = useState(generatePrimes(primeNums));

    function handlePrimeNumsUpdate(e){
        const newPrimeNums = parseInt(e.target.value);
        setPrimeNums(newPrimeNums);
        setPrimeNumbers(generatePrimes(newPrimeNums));
    }
     
    //if Value is NaN, return as Zero
    function ifNaN(){
        if (primeNums === NaN){
            return (0);
        }
        else return primeNums;
    }
    


    //JSX rendering 

    return (
        <div className="">
            <h1 className="main-header">Prime Number Multiplication Table</h1>
            <label>
            <p>Multiplication  Table For first {ifNaN()} Prime Numbers</p>  <br></br>
                <input className="prime-number-input" type= "number" value={primeNums} onChange={handlePrimeNumsUpdate} />
            </label> <br/> <br></br> <br></br>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {primeNumbers.map(primeNumbers => <th key={primeNumbers}>{primeNumbers}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {primeNumbers.map(primeNum1 =>(
                        <tr key = {primeNum1}>
                            <th>{primeNum1}</th>
                            {primeNumbers.map(primeNum2 => (
                                <td key={primeNum2}>{primeNum1 * primeNum2}</td>
                            ))}
                        </tr>
                    ) )}
                </tbody>
            </table>
        </div>
    )
}

export default PrimeMultiplicationTable;