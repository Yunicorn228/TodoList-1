import React from 'react';
import './index.scss';
import classnames from 'classnames';

const Todo = ({ todo, todos, setTodos, index }) => {
	const { title, isActive } = todo;

	const handleDeleteTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	const handleFinishTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isActive = !newTodos[index].isActive;
		setTodos(newTodos);
	};

	return (
		<div className='todo'>
			<h2 className={classnames({ active: isActive })}>{title}</h2>
			<div>
				<button onClick={() => handleDeleteTodo(index)}>delete</button>
				<button onClick={() => handleFinishTodo(index)}>done</button>
			</div>
		</div>
	);
};

export default Todo;
