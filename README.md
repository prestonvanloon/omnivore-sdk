# omnivore-sdk

## Usage

```javascript
const Omnivore = require('omnivore-sdk');

omnivore('my-omnivore-api-key').then(sdk => {
  sdk.Locations.getAll().then(locations => {
    // Do something with locations!
    console.log(locations);

    const locationId = location[0].id;
    
    sdk['Tender Types'].getAll({
      locationId
    }).then(tenderTypes => {
      console.log(tenderTypes);
    });

  }).catch(error => {
    // Handle errors
    console.error(error);
  });



});

```

## Operations

### Locations
getAll
getById

### Employees
getAll
getById

### Order Types
getAll
getById

### Tables
getAll
getById

### Tender Types
getAll
getById

### Revenue Centers
getAll
getById

### Discounts
getAll
getById

### Tickets
getAll
openTicket
getById
voidById
getTicketDiscounts
applyTicketDiscount
getTicketDiscount
getTicketItems
addTicketItem
voidTicketItem
getTicketItemById
getTicketItemModifiers
getTicketItemModifierById
getTicketItemDiscounts
getTicketItemDiscountById
getPayments
getTicketPaymentById

### Menus
get
getCategories
getCategoryById
getItems
getMenuItemById
getModifiers
getModifierById
getModifierGroups
getModifierGroupById
