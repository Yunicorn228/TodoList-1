import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Input from './components/Input';
import todoData from './constant/todos';

function App() {
	const [todos, setTodos] = useState(todoData);

	return (
		<div className='App'>
			<h1>SIMPLE TODO LIST</h1>
			<List todos={todos} setTodos={setTodos} />
			<Input todos={todos} setTodos={setTodos} />
		</div>
	);
}

export default App;
