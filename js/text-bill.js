

//add an event listener for when the add button is pressed
function textBillTotalFactory(){
  //var billTypeEntered = billTypeText.trim();
  var callsTotal =0;
  var smsTotal = 0;
  var totalBill = 0 ;
  function textbillTotal(billTypeEntered) {
      if (billTypeEntered === "call"){
          callsTotal= callsTotal + 2.75;
      }
    else if (billTypeEntered === "sms"){
        smsTotal=smsTotal + 0.75;
      }

      totalBill  = callsTotal + smsTotal;
    }

  function returnCall() {
    return callsTotal.toFixed(2);;
  }

  function returnSms(){
    return smsTotal.toFixed(2);
  }
  function returnTotal(){
      return totalBill.toFixed(2);
  }

      return {

      callCost    :returnCall,
      smsCost     :returnSms,
      totalCost   :totalBill,
      billTotal   :textbillTotal,
      grandTotal :returnTotal

      }
}

    document.addEventListener('DOMContentLoaded', function() {

      var billTypeText = document.querySelector(".billTypeText");
      //get a reference to the add button
      var addToBillBtn	 = document.querySelector(".addToBillBtn");
      var callsTotalElem  = document.querySelector(".callTotalOne");
      var smsTotalElem	 = document.querySelector(".smsTotalOne");
      var totalCostElem	 = document.querySelector(".totalOne");
      //update the totals that is displayed on the screen.
      var billTextTotal  =  textBillTotalFactory();
      var totalCosts = billTextTotal.grandTotal();
    addToBillBtn.addEventListener("click" , function() {
      var billString = billStringElement.value;

      callsTotalElem.innerHTML = billTextTotal.callCost();
      smsTotalElem.innerHTML = billTextTotal.smsCost();
      totalCostElem.innerHTML = totalCosts;
      if (totalCost >= 50){
          // adding the danger class will make the text red
          totalCostElem.classList.add("danger");
      }
      else if (totalCost >= 30){
          totalCostElem.classList.add("warning");
      }
    })
  });
