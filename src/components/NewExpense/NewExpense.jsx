import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

/*
  目的: ボタン出力or入力欄出力
  @parent: App.js
  @props: onAddExpense()

  @state: isEditing

  @child: ExpenseForm.jsx props渡す

*/

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false);

	// props関数。子にid,amount,date入れてもらう。その後にid付与する
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		// 親関数発動App。id付きの新規１件データのみが渡る
		props.onAddExpense(expenseData);
		setIsEditing(false);
	};

	const startEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className="new-expense">
			{!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
			{isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />}
		</div>
	);
};

export default NewExpense;
