import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
	return props.items.map((item) => {
		return (
			<div className="expenses">
				<ExpenseItem key={item.id} title={item.title} amount={item.amount} date={item.date} />;
			</div>
		);
	});
};

export default Expenses;
