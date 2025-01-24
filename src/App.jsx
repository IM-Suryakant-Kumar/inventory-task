import { useState } from "react";

function App() {
	// State to manage inventory items
	const [inventory, setInventory] = useState([
		{ id: 1, name: "Item A", category: "Category 1", quantity: 15 },
		{ id: 2, name: "Item B", category: "Category 2", quantity: 5 },
		{ id: 3, name: "Item C", category: "Category 1", quantity: 20 },
	]);

	const [newItem, setNewItem] = useState({ name: "", category: "", quantity: "" });
	const [filterCategory, setFilterCategory] = useState("");
	const [sortAscending, setSortAscending] = useState(true);

	// Add a new item to the inventory
	const addItem = () => {
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

	return (
		<main>
			<h1>Inventory Management</h1>
			{/* Form to add new items */}
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
				<button onClick={addItem}>Add Item</button>
			</div>

			{/* Filter by category */}
			<div className="filters">
				<select onChange={(e) => setFilterCategory(e.target.value)} value={filterCategory}>
					<option value="">All Categories</option>
					{[...new Set(inventory.map((item) => item.category))].map((category) => (
						<option key={category} value={category}>
							{category}
						</option>
					))}
				</select>

				<button onClick={() => setSortAscending(!sortAscending)}>
					Sort by Quantity ({sortAscending ? "Ascending" : "Descending"})
				</button>
			</div>
		</main>
	);
}

export default App;
