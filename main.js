
function validator(input){
    const amexPattern1 = /^34\d\d\d\d\d\d\d\d\d\d\d\d\d$/
    const amexPattern2 = /^37\d\d\d\d\d\d\d\d\d\d\d\d\d$/
    const visaPattern1 = /^4\d\d\d\d\d\d\d\d\d\d\d\d\d\d\d$/
    const visaPattern2 = /^4\d\d\d\d\d\d\d\d\d\d\d\d$/
    const masterPattern = /^5[12345]\d\d\d\d\d\d\d\d\d\d\d\d\d\d$/
    const l =[amexPattern1, amexPattern2, visaPattern1, visaPattern2, masterPattern];

    function whichCard(n, l){
        if (l[0].test(n)){
            return 'AMEX';
        }
        if (l[1].test(n)){
            return 'AMEX';
        }
        if (l[2].test(n)){
            return 'VISA';
        }
        if (l[3].test(n)){
            return 'VISA';
        }
        if (l[4].test(n)){
            return 'MASTER';
        }
        return 'INVALID';
    }

    function luhn(cardNumber){
        let sum = 0;
        let firstSum = [];
        let firstSplit = [];
        for (let i = cardNumber.length - 2; i >= 0; i = i-2) {
            firstSplit.push(cardNumber[i]);
        }
        firstSplit.forEach((x) => {
            if (Number(x) != 0){
                firstSum.push(x*2);
            };
        })
        firstSum.forEach((x) => {
            if (x >= 10){
                sum = sum + 1 + (x%10);
            }
            else {
                sum += x;
            };
        });

        for (let i = cardNumber.length -1; i >= 0; i -= 2){
            sum += Number(cardNumber[i]);
        }
        
        if (sum%10 == 0){
            return true;
        }
        else{
            return false;
        }
    }

    const card = input;

    let result = whichCard(card ,l);

    if (result == 'INVALID'){
        return "INVALID CARD";
    }
    else {
        if (luhn(card)){
            return result;
        }
        else {
            return "INVALID CARD";
        }
    }
};

const btn = document.querySelector('#submit');
const container = document.querySelector(".container");

let counter = 0;

btn.addEventListener("click", () => {
    

    let cardNumber = document.querySelector("#card-number").value
    let valid = validator(cardNumber);
    console.log(valid);

    let resultBanner = document.createElement("div");
    resultBanner.classList.add("res");
    if (counter == 0){
        container.appendChild(resultBanner);
    }
    

    if (valid == "INVALID CARD"){
        if (container.classList.contains("container-result-valid")){
            container.classList.remove("container-result-valid")
        }
        container.classList.add("container-result-invalid");
        resultBanner = document.querySelector(".res")
        resultBanner.textContent = "";
        resultBanner.textContent = "INVALID";
        console.log(valid)
        counter++;
        
    }
    else {
        if (container.classList.contains("container-result-invalid")){
            container.classList.remove("container-result-invalid")
        }
        container.classList.add("container-result-valid");
        resultBanner = document.querySelector(".res")
        resultBanner.textContent = "";
        resultBanner.textContent = valid;
        console.log(valid)
        counter++;
    }
})




