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
#### getAll
Parameters

#### getById
Parameters
-  id

### Employees
#### getAll
Parameters
-  locationId

#### getById
Parameters
-  locationId
-  employeeId

### Order Types
#### getAll
Parameters
-  locationId

#### getById
Parameters
-  locationId
-  orderTypeId

### Tables
#### getAll
Parameters
-  locationId

#### getById
Parameters
-  locationId
-  tableId

### Tender Types
#### getAll
Parameters
-  locationId

#### getById
Parameters
-  locationId
-  tenderTypeId

### Revenue Centers
#### getAll
Parameters
-  locationId

#### getById
Parameters
-  locationId
-  revenueCenterId

### Discounts
#### getAll
Parameters
-  locationId

#### getById
Parameters
-  locationId
-  discountId

### Tickets
#### getAll
Parameters
-  locationId

#### openTicket
Parameters
-  locationId
-  body

#### getById
Parameters
-  locationId
-  ticketId

#### voidById
Parameters
-  locationId
-  ticketId
-  body

#### getTicketDiscounts
Parameters
-  locationId
-  ticketId

#### applyTicketDiscount
Parameters
-  locationId
-  ticketId
-  body

#### getTicketDiscount
Parameters
-  locationId
-  ticketId
-  ticketDiscountId

#### getTicketItems
Parameters
-  locationId
-  ticketId

#### addTicketItem
Parameters
-  locationId
-  ticketId
-  body

#### voidTicketItem
Parameters
-  locationId
-  ticketId
-  ticketItemId

#### getTicketItemById
Parameters
-  locationId
-  ticketId
-  ticketItemId

#### getTicketItemModifiers
Parameters
-  locationId
-  ticketId
-  ticketItemId

#### getTicketItemModifierById
Parameters
-  locationId
-  ticketId
-  ticketItemId
-  ticketItemModifierId

#### getTicketItemDiscounts
Parameters
-  locationId
-  ticketId
-  ticketItemId

#### getTicketItemDiscountById
Parameters
-  locationId
-  ticketId
-  ticketItemId
-  ticketItemDiscountId

#### getPayments
Parameters
-  locationId
-  ticketId

#### getTicketPaymentById
Parameters
-  locationId
-  ticketId
-  paymentId

### Menus
#### get
Parameters
-  locationId

#### getCategories
Parameters
-  locationId

#### getCategoryById
Parameters
-  locationId
-  categoryId

#### getItems
Parameters
-  locationId

#### getMenuItemById
Parameters
-  locationId
-  menuItemId

#### getModifiers
Parameters
-  locationId

#### getModifierById
Parameters
-  locationId
-  modifierId

#### getModifierGroups
Parameters
-  locationId
-  menuItemId

#### getModifierGroupById
Parameters
-  locationId
-  menuItemId
-  modifierGroupId
