export const addItem = (inventory, setInventory, newItem, setNewItem) => {
	if (newItem.name && newItem.category && newItem.quantity) {
		setInventory([
			...inventory,
			{
				id: Date.now(),
				name: newItem.name,
				category: newItem.category,
				quantity: parseInt(newItem.quantity, 10),
			},
		]);
		setNewItem({ name: "", category: "", quantity: "" });
	}
};
