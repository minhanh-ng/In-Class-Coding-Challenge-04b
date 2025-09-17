let products = [
    {sku: "M-001", name:"Lipstick", category: "makeup", price: 40.50, inventory: 50},
    {sku: "M-002", name: "Mascara", category: "makeup", price: 30, inventory: 100},
    {sku: "E-003", name: "Laptop", category: "electronics", price: 1000, inventory: 150},
    {sku: "H-004", name: "Carpet", category: "household", price: 100, inventory: 3},
    {sku: "A-005", name: "Jacket", category: "apparel", price: 200, inventory: 200}
];



for (let product of products) {
    let discount = 0

    switch (product.category) {
        case "electronics":
            discount = .20
            break;
        case "apparel":
            discount = .50
            break;
        case "household":
        case "makeup":
            discount = .10
            break;
        default:
            break;
    }

    let promoPrice = product.price - (product.price * discount);
    product.promoPrice = promoPrice.toFixed(2)
    
}

console.log(products);

const customers = [
    {
        id: 1,
        customerType: "regular",
        couponCode: "SAVE10",
        taxRate: 0.085,
        cart:[{sku:"E-003", qty: 1}, {sku:"H-004", qty: 2}]
    },
    {
        id: 2,
        customerType: "student",
        couponCode: "FREESHIP",
        taxRate: 0.085,
        cart:[{sku:"M-001", qty: 2}, {sku: "A-005", qty: 5}, {sku: "H-004", qty: 1}]

    },
    {
        id: 3,
        customerType: "senior",
        couponCode: "",
        taxRate: 0.085,
        cart: [{sku: "M-002", qty: 1}, {sku: "E-003", qty: 3}, {sku: "A-005", qty: 1}]
    }

]
 console.log(customers)
