export const editItem = (id, field, value, inventory, setInventory) => {
	setInventory(
		inventory.map((item) =>
			item.id === id
				? { ...item, [field]: field === "quantity" ? parseInt(value, 10) : value }
				: item
		)
	);
};
