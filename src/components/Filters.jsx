/* eslint-disable react/prop-types */
export const Filters = ({ filterCategory, setFilterCategory, inventory, sortAscending, setSortAscending }) => {
	return (
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
	);
};
