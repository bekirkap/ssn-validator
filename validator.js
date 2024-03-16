//--SELECTORS--//
const input = document.getElementById("input")
const button = document.getElementById("btn")
const feedBack = document.getElementById("feedback")

let ssn = input.value


input.addEventListener('change', () =>{

    ssn = input.value
})

button.addEventListener('click', () => {

    let ssnlength = ssn.length
    let ssnfp = ssn.substr(0, 3)
    let ssnsp = ssn.substr(4, 2)
    let ssntp = ssn.substr(7, 4)
    let checker = Number(ssnfp+ssntp+ssnsp) 

    if(ssnlength > 11 || ssnlength < 11){
        feedBack.textContent = "SSN must be 11 characters (9 numbers and 2 hypens)"
    }
    else if(ssn[3]!= "-" || ssn[6] != "-"){
        feedBack.textContent = "Please enter a valid SSN number(please use 2 hypens)"
    }
    else if(ssn[0] == 9 || ssnfp == "000" || ssnfp == "666"){
        feedBack.textContent = "Please enter a valid SSN number (first part can not be between 900-999 or can not star with 000-666)"
    }
    else if(+ssnsp > 99 || +ssnsp < 1){
        feedBack.textContent = "The second part should have 2 digits and it should be from 01 to 99."
    }
    
    else if(+ssntp < 1 || +ssntp > 9999){
        feedBack.textContent = "The third part should have 4 digits and it should be from 0001 to 9999."
    }
    else if(isNaN(checker)){
        feedBack.textContent = "Please enter a valid SSN number(9 numbers and 2 hypens)"
        console.log(checker);
    }
    else{
        feedBack.textContent = `Entered SSN (${ssn}) is valid`
    }
    
    console.log(Boolean(checker));

    
})







