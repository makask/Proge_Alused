
var tellimus = { 
    "id": 2113, 
    "orderNumber": "E210126001", 
    "createdAt": "2021-01-26 16:04:24", 
    "clientName": "Kalle Tali", 
    "deliveryType": "Omniva smartpost", 
    "deliveryValue": 178, 
    "rows": [ 
      { 
        "article_id": 31, 
        "name": "Kohvimasin De'Longhi Dolce Gusto Piccolo EDG100.W", 
        "product_code": "257549", 
        "price": 49.1666666667, 
        "amount": 1, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23420, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Espresso Intenso, 128 g, 16 tk", 
        "product_code": "355836", 
        "price": 5.0666666667, 
        "amount": 2, 
        "vat": 0.2 
      }, 
      { 
        "article_id": 23421, 
        "name": "Kohvikapslid Nescafe Dolce Gusto Latte Macchiato, 194 g, 16 tk", 
        "product_code": "000000000501267301", 
        "price": 5.825, 
        "amount": 1, 
        "vat": 0.2 
      } 
    ] 
  } 
  
  console.log("Order number:" + tellimus.orderNumber);
  console.log("Client name:" + tellimus.clientName);
  
  let total = 0;

  for(let i = 0; i < tellimus.rows.length; i++){

    let itemNumber = i + 1;
    let itemName = tellimus.rows[i].name;
    let amount = tellimus.rows[i].amount;
    let price = parseFloat((tellimus.rows[i].price).toFixed(2));
    let sum = amount * price;
    let vat = tellimus.rows[i].vat;
    let priceIncVat = parseFloat((price + (price * vat)).toFixed(2));
    let sumIncVat = parseFloat((priceIncVat * amount).toFixed(2));
    

    console.log("Item " + itemNumber + ":\t" + itemName +
                "\nAmount:\t" + amount +    
                "\nPrice:\t" + price + " EUR €" +   
                "\nSum:\t" + sum + " EUR €"
                );

    total+=sumIncVat;
  }

  console.log("Total including vat: " + parseFloat((total).toFixed(2)) + " EUR €");

  

  