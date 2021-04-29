import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
	return props.items.map((item) => {
		return (
			<Card className="expenses">
				<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />;
			</Card>
		);
	});
};

export default Expenses;
