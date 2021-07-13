import React from 'react';

export class InventoryTablePrint extends React.PureComponent {
	render() {
		return (
			<div className="w-full">
				<table
					id="inventory-table"
					className="min-w-full bg-white dark:bg-gray-800"
				>
					<thead>
						<tr className="w-full h-16 border-gray-300 dark:border-gray-200 border-b py-8">
							<th className="pl-14 text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
								Inventory No.
							</th>
							<th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4 w-2/12">
								Product Name
							</th>
							<th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4">
								Stock Added
							</th>
							<th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4 w-2/12">
								Supplier
							</th>

							<th className="text-gray-600 dark:text-gray-400 font-normal pr-6 text-left text-sm tracking-normal leading-4 w-2/12 ">
								<div>Date</div>
							</th>
						</tr>
					</thead>
					<tbody>
						{this.props.inventories.map((inventory) => (
							<tr
								key={inventory.id}
								className="h-24 border-gray-300 dark:border-gray-200 border-b"
							>
								<td className="pl-14 text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
									{inventory.inventory_id}
								</td>
								<td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
									{inventory.product}
								</td>
								<td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
									{inventory.new_stock}
								</td>

								<td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
									{inventory.supplier}
								</td>
								<td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
									{inventory.created_at}
								</td>
								<td className="text-sm pr-6 whitespace-no-wrap text-gray-800 dark:text-gray-100 tracking-normal leading-4">
									{inventory.description}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}
