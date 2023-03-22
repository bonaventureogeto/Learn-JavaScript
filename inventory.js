//inventrory management system

class InventoryItem {
    constructor(name, quantity, price) {
        this.name = name;
        this.quantity = quantity;
        this.price = price;
    }
}

class InventoryManagementSystem {
    constructor() {
        this.inventory = [];
    }

    addInventoryItem(inventoryItem) {
        this.inventory.push(inventoryItem);
    }

    getInventoryItem(name) {
        return this.inventory.find(item => item.name === name);
    }

    updateInventoryItemQuantity(name, quantity) {
        const item = this.getInventoryItem(name);
        item.quantity = quantity;
    }

    deleteInventoryItem(name) {
        const item = this.getInventoryItem(name);
        const index = this.inventory.indexOf(item);
        this.inventory.splice(index, 1);
    }

    getInventoryValue() {
        return this.inventory.reduce((total, item) => total + (item.quantity * item.price), 0);
    }
}

const inventoryManagementSystem = new InventoryManagementSystem();
console.log(inventoryManagementSystem.getInventoryValue());
console.log(inventoryManagementSystem.addInventoryItem(new InventoryItem('Pencil', 10, 1)));
console.log(inventoryManagementSystem.addInventoryItem(new InventoryItem('Eraser', 5, 2)));
console.log(inventoryManagementSystem.getInventoryValue());