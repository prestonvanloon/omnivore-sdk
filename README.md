# omnivore-sdk

## Usage

```javascript
const Omnivore = require('omnivore-sdk');
const omnivore = new Omnivore('my-omnivore-api-key');

omnivore.Locations.getAll().then(locations => {
  // Do something with locations!
  console.log(locations);

  const locationId = location[0].id;

  omnivore['Tender Types'].getAll({
    locationId
  }).then(tenderTypes => {
    console.log(tenderTypes);
  });

}).catch(error => {
  // Handle errors
  console.error(error);
});

```

## Operations

### Locations
#### getAll

#### getById
-  id

### Employees
#### getAll
-  locationId

#### getById
-  locationId
-  employeeId

### Order Types
#### getAll
-  locationId

#### getById
-  locationId
-  orderTypeId

### Tables
#### getAll
-  locationId

#### getById
-  locationId
-  tableId

### Tender Types
#### getAll
-  locationId

#### getById
-  locationId
-  tenderTypeId

### Revenue Centers
#### getAll
-  locationId

#### getById
-  locationId
-  revenueCenterId

### Discounts
#### getAll
-  locationId

#### getById
-  locationId
-  discountId

### Tickets
#### getAll
-  locationId

#### openTicket
-  locationId
-  body

#### getById
-  locationId
-  ticketId

#### voidById
-  locationId
-  ticketId
-  body

#### getTicketDiscounts
-  locationId
-  ticketId

#### applyTicketDiscount
-  locationId
-  ticketId
-  body

#### getTicketDiscount
-  locationId
-  ticketId
-  ticketDiscountId

#### getTicketItems
-  locationId
-  ticketId

#### addTicketItem
-  locationId
-  ticketId
-  body

#### voidTicketItem
-  locationId
-  ticketId
-  ticketItemId

#### getTicketItemById
-  locationId
-  ticketId
-  ticketItemId

#### getTicketItemModifiers
-  locationId
-  ticketId
-  ticketItemId

#### getTicketItemModifierById
-  locationId
-  ticketId
-  ticketItemId
-  ticketItemModifierId

#### getTicketItemDiscounts
-  locationId
-  ticketId
-  ticketItemId

#### getTicketItemDiscountById
-  locationId
-  ticketId
-  ticketItemId
-  ticketItemDiscountId

#### getPayments
-  locationId
-  ticketId

#### getTicketPaymentById
-  locationId
-  ticketId
-  paymentId

### Menus
#### get
-  locationId

#### getCategories
-  locationId

#### getCategoryById
-  locationId
-  categoryId

#### getItems
-  locationId

#### getMenuItemById
-  locationId
-  menuItemId

#### getModifiers
-  locationId

#### getModifierById
-  locationId
-  modifierId

#### getModifierGroups
-  locationId
-  menuItemId

#### getModifierGroupById
-  locationId
-  menuItemId
-  modifierGroupId
