import React from 'react';
import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

/*
  目的: リストの各アイテムを出力

*/

const ExpensesList = (props) => {
	// フィルターされたコンテンツ表示　-　条件合致なしの場合はメッセージ表示
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
	}

	return (
		<ul className="expenses-list">
			{props.items.map((expense) => (
				<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />
			))}
		</ul>
	);
};

export default ExpensesList;
