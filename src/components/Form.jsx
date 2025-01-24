/* eslint-disable react/prop-types */
import { addItem } from "../utils";

export const Form = ({ newItem, setNewItem, inventory, setInventory }) => {
	// Add a new item to the inventory
	const handleAddItem = () => addItem(inventory, setInventory, newItem, setNewItem);

	return (
		<div className="form">
			<input
				type="text"
				placeholder="Item Name"
				value={newItem.name}
				onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
			/>
			<input
				type="text"
				placeholder="Category"
				value={newItem.category}
				onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
			/>
			<input
				type="number"
				placeholder="Quantity"
				value={newItem.quantity}
				onChange={(e) => setNewItem({ ...newItem, quantity: e.target.value })}
			/>
			<button onClick={handleAddItem}>Add Item</button>
		</div>
	);
};
