import React, { useState } from 'react';
import './index.scss';

const Input = ({ todos, setTodos }) => {
	const [input, setInput] = useState('');

	const handleInputChange = (e) => {
		setInput(e.target.value);
	};

	const handleSubmitTodo = () => {
		const newTodos = [...todos];
		if (input === '') {
			alert('please provide you todo item');
		} else {
			newTodos.push({
				title: input,
				isActive: false,
			});
			setTodos(newTodos);
			setInput('');
		}
	};

	return (
		<div className='input-form'>
			<input value={input} onChange={handleInputChange} />
			<button onClick={handleSubmitTodo}>Submit</button>
		</div>
	);
};

export default Input;
