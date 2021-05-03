import React from 'react';
import Chart from '../Chart/Chart';

/* 
  目的：月ごとの初期値オブジェクトがある。propsを受け取って、月ごとの数値を初期オブジェクトに反映させる
*/
const ExpensesChart = (props) => {
	const chartDataPoints = [
		{ label: 'Jan', value: 0 },
		{ label: 'Feb', value: 0 },
		{ label: 'Mar', value: 0 },
		{ label: 'Apr', value: 0 },
		{ label: 'May', value: 0 },
		{ label: 'Jun', value: 0 },
		{ label: 'Jul', value: 0 },
		{ label: 'Aug', value: 0 },
		{ label: 'Sep', value: 0 },
		{ label: 'Oct', value: 0 },
		{ label: 'Nov', value: 0 },
		{ label: 'Dec', value: 0 },
	];

	// props受け取って、月ごとの数値とする
	for (const expense of props.expenses) {
		const expenseMonth = expense.date.getMonth();
		chartDataPoints[expenseMonth].value += expense.amount;
		// console.log(chartDataPoints[expenseMonth].value);
	}

	return (
		<div>
			<Chart dataPoints={chartDataPoints} />
		</div>
	);
};

export default ExpensesChart;
