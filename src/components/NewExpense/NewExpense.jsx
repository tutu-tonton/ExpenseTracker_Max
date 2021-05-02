import React from 'react';
import ExpenseForm from './ExpenseForm';

import './NewExpense.css';

/* 
  @parent: App.js
  @props: onAddExpense()

  @child: ExpenseForm.jsx props渡す

*/

const NewExpense = (props) => {
	// props関数。子にid,amount,date入れてもらう。その後にid付与する
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		// 親関数発動App。id付きの新規１件データのみが渡る
		props.onAddExpense(expenseData);
	};
	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpense;
