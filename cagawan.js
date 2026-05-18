let grandTotal = 0;
let orders = [];

function calculateTotal() {
    let food = document.getElementById("food");
    let foodName = food.options[food.selectedIndex].text;
    let foodPrice = parseInt(food.value);
    let quantity = parseInt(document.getElementById("quantity").value);

    if (quantity <= 0 || isNaN(quantity)) {
        alert("Please enter a valid quantity.");
        return;
    }

    let total = foodPrice * quantity;
    grandTotal += total;
    orders.push(`${foodName} x ${quantity} = ₱${total}`);

    displayOrders();
}

function displayOrders() {
    let orderList = document.getElementById("orderList");
    orderList.innerHTML = "";
    orders.forEach(order => {
        orderList.innerHTML += `<div class="order-item">${order}</div>`;
    });
    document.getElementById("result").innerHTML = "Total: ₱" + grandTotal;
}

function clearOrders() {
    grandTotal = 0;
    orders = [];
    document.getElementById("orderList").innerHTML = "<p>No orders yet.</p>";
    document.getElementById("result").innerHTML = "Total: ₱0";
}

function placeOrder() {
    let email = document.getElementById("customerEmail").value;
    if (email === "" || !email.includes("@")) {
        alert("Please enter a valid email.");
        return;
    }
    if (orders.length === 0) {
        alert("Add items first!");
        return;
    }
    alert("Order Placed! (Configure EmailJS IDs in JS to send)");
}

function validateForm() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    if (name === "" || email === "") {
        document.getElementById("formMessage").innerHTML = "Please fill all fields.";
        return false;
    }
    document.getElementById("formMessage").innerHTML = "Submitted successfully!";
    return false;
}
