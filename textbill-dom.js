document.addEventListener('DOMContentLoaded', function() {

  var billTypeText = document.querySelector(".billTypeText");
  //get a reference to the add button
  var addToBillBtn	 = document.querySelector(".addToBillBtn");
  var callsTotalElem  = document.querySelector(".callTotalOne");
  var smsTotalElem	 = document.querySelector(".smsTotalOne");
  var totalCostElem	 = document.querySelector(".totalOne");
  //update the totals that is displayed on the screen.
  var billTextTotal  =  TextBillTotalFactory();
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
