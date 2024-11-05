fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=151a1d9a8b274e81b7976ef6782c322d")
.then((result)=>{
    // console.log(result);
    let mydata=result.json()
    console.log(mydata);
    return mydata
}).then((currency)=>{
    // console.log(currency.rates)
    // console.log(currency.rates.SAR);
   let eurprice=document.querySelector(".eur span");
   let egpprice=document.querySelector(".egp span");
   let sarprice=document.querySelector(".sar span");
   let aedprice=document.querySelector(".aed span");
   let yemprice=document.querySelector(".yem span");
   let trkprice=document.querySelector(".trk span");
   let cadprice=document.querySelector(".cad span");




   let input=document.querySelector(".input input");


   input.onkeyup=function(){
     eurprice.innerHTML=Math.round(input.value*currency.rates["EUR"]).toFixed(2);
     sarprice.innerHTML=Math.round(input.value*currency.rates["SAR"]).toFixed(2);
     aedprice.innerHTML=Math.round(input.value*currency.rates["AED"]).toFixed(2);
     egpprice.innerHTML=Math.round(input.value*currency.rates["EGP"]).toFixed(2);
     yemprice.innerHTML=Math.round(input.value*currency.rates["YER"]).toFixed(2);
     trkprice.innerHTML=Math.round(input.value*currency.rates["TRY"]).toFixed(2);
     cadprice.innerHTML=Math.round(input.value*currency.rates["CAD"]).toFixed(2);
   }

    console.log(currency.rates["YER"]);
    console.log(currency.rates["EGP"]);
    console.log(currency.rates["TRY"]);
    console.log(currency.rates["EUR"]);
    console.log(currency.rates["CAD"]);
    console.log(currency.rates["AED"]);






});