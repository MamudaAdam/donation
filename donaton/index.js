document.getElementById("custom-amount-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var customAmount = document.getElementById("custom-amount").value;
    
    if (customAmount === "") {
      alert("Please enter a custom amount");
      return;
    }
    
    // Store the selected amount in localStorage for the next page
    localStorage.setItem("donationAmount", customAmount);
  
    // Redirect to the payment method selection page
    window.location.href = "payment.html";
  });
  
  var amountButtons = document.getElementsByClassName("amount-button");
  
  for (var i = 0; i < amountButtons.length; i++) {
    amountButtons[i].addEventListener("click", function() {
      var amount = this.value;
      
      // Store the selected amount in localStorage for the next page
      localStorage.setItem("donationAmount", amount);
  
      // Redirect to the payment method selection page
      window.location.href = "payment.html";
    });
  }
  