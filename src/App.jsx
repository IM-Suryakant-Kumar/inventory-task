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

  // Edit an existing item
  const editItem = (id, field, value) => {
    setInventory(
      inventory.map((item) =>
        item.id === id ? { ...item, [field]: field === 'quantity' ? parseInt(value, 10) : value } : item
      )
    );
  };

  // Delete an item
  const deleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  // Filter items by category
  const filteredInventory = filterCategory
    ? inventory.filter((item) => item.category === filterCategory)
    : inventory;

  // Sort items by quantity
  const sortedInventory = [...filteredInventory].sort((a, b) =>
    sortAscending ? a.quantity - b.quantity : b.quantity - a.quantity
  );


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

      {/* Inventory Table */}
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sortedInventory.map((item) => (
            <tr key={item.id} className={item.quantity < 10 ? 'low-stock' : ''}>
              <td>
                <input
                  type="text"
                  value={item.name}
                  onChange={(e) => editItem(item.id, 'name', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={item.category}
                  onChange={(e) => editItem(item.id, 'category', e.target.value)}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => editItem(item.id, 'quantity', e.target.value)}
                />
              </td>
              <td>
                <button onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
		</main>
	);
}

export default App;
