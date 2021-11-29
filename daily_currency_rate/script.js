const selectRates = document.querySelectorAll(".input-select-value");
const amount = document.getElementById("selected-value");
const result = document.getElementById("result");
const submitBtn = document.getElementById("submitBtn");
const dateTime = document.getElementById("date");
let fromValueRate;
let toValueRate;

const currencyApi = async () => {
   const url = "https://v6.exchangerate-api.com/v6/2faf54e4b9b5b952ee161cf8/latest/USD"
   const response = await axios(url);
//    console.log(response);

   const {time_last_update_utc,conversion_rates} = response.data;


ratesArray = Object.keys(conversion_rates),

selectRates.forEach(option => {
ratesArray.forEach(rate => {
    
option.innerHTML += `<option value="${rate}">${rate}</option>`
})
});

selectRates.forEach((option,index) => {
    option.addEventListener("change", (a)=>{

        const valueRate = a.target.value;
        
        if(index == 0){
            fromValueRate = valueRate;
          
        }
        else {
            toValueRate = valueRate;
           
       
    }

    });
    
});


submitBtn.addEventListener("click",()=>{
    const compareRateUnit =   conversion_rates[toValueRate] /conversion_rates[fromValueRate] ;
    // console.log(compareRateUnit);
    const resultText = compareRateUnit * amount.value;
    // console.log(resultText);

    if(fromValueRate=="" || toValueRate=="" || amount.value ==""){
        alert("enter ")
    }
    else{
        result.innerText = `${amount.value} ${fromValueRate} = ${resultText.toFixed(2)}  ${toValueRate}`
    }


    
})

const newDate = time_last_update_utc.split(" ").slice(0,4);
// console.log(newDate);
let displayDate = "";
newDate.forEach (a=>{
    displayDate += `  ${a}`;
    
})

// console.log(displayDate);

const display = document.getElementById("display")

const euro = (conversion_rates.TRY/conversion_rates.EUR).toFixed(2);
const dolar = (conversion_rates.TRY/conversion_rates.USD).toFixed(2);
const pound = (conversion_rates.TRY/conversion_rates.GBP).toFixed(2);
display.innerHTML = `
<li><i class="fas fa-euro-sign"></i>${euro}</li>
<li><i class="fas fa-dollar-sign"></i>${dolar}</li>
<li><i class="fas fa-pound-sign"></i>${pound}</li>
`
dateTime.innerText = displayDate


}
currencyApi();