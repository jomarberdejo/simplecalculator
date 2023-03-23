let calculateBtn= document.querySelector('#calculate-btn');

calculateBtn.addEventListener('click', ()=>{
    let firstNum= document.querySelector('#first-num').value;
    let secondNum= document.querySelector('#second-num').value;
    let select= document.querySelector('#select-operator');
    let result= document.querySelector('#result');
    let errorText= document.querySelector('#error');

    
        if(select.value== "+"){
            let add= Number(firstNum) + Number(secondNum);
            result.innerHTML= `Result: ${add}`;
            result.style.display= 'block';
            errorText.style.display= 'block';
        
            
        }

        else if (select.value== "-"){
            let sub= Number(firstNum) - Number(secondNum);
            result.innerHTML= `Result: ${sub}`;
            result.style.display= 'block';
            errorText.style.display= 'block';
            
        }

        else if(select.value== "*"){
            let mul= Number(firstNum) * Number(secondNum);
            result.innerHTML= `Result: ${mul}`;
            result.style.display= 'block';
            errorText.style.display= 'block';
           
        }

        else if(select.value== "/"){
            let div= Number(firstNum) / Number(secondNum);
            result.innerHTML= `Result: ${div}`;
            result.style.display= 'block';
            errorText.style.display= 'block';
            
        }
        else{
            errorText.innerText= "Please input a number";
            result.style.display= 'none'
            errorText.style.display= 'block';
        }

    


    


})