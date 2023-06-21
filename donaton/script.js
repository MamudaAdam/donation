function processPayment(paymentMethod) {
    // Perform the necessary actions based on the selected payment method
    switch (paymentMethod) {
      case 'Bitcoin':
        // Redirect the user to the Bitcoin payment page or app
        window.location.href = 'https://your-bitcoin-app.com';
        break;
      case 'PayPal':
        // Redirect the user to the PayPal payment page or app
        window.location.href = 'https://www.paypal.com';
        break;
      case 'Credit Card':
        // Redirect the user to the credit card payment page or app
        window.location.href = 'https://your-credit-card-app.com';
        break;
      case 'Bank Transfer':
        // Redirect the user to the bank transfer instructions page or app
        window.location.href = 'https://your-bank-transfer-app.com';
        break;
      default:
        // Handle unrecognized payment methods or errors
        alert('Invalid payment method. Please try again.');
        break;
    }
  }
  function displayCreditCardForm() {
    // Show the credit card form section
    document.getElementById("credit-card-form").style.display = "block";
    
    // Redirect to the credit card payment page or app
    window.location.href = 'https://your-credit-card-payment-page.com';
  }
  
  