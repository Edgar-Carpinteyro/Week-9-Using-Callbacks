function prepareIngredients(message1) {
  setTimeout(() => {
    message1("Ingredients are prepared.");
  }, 2000); // Simulate a 2-second delay
}

function assembleSandwich(message2) {
  setTimeout(() => {
    message2("Sandwich is assembled.");
  }, 1500);
}

function serveSandwich(message3) {
  setTimeout(() => {
    message3("Sandwich is served.");
  }, 1000);
}

function makeSandwich() {
  prepareIngredients((message1) => {
    console.log(message1);
    return message1;
  });

  assembleSandwich((message2) => {
    console.log(message2);
    return message2;
  });

  serveSandwich((message3) => {
    console.log(message3);
    return message3;
  });
}

makeSandwich();
