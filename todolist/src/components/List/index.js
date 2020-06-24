import React from 'react';
import Todo from '../Todo';

const List = ({ todos, setTodos }) => {
	return (
		<div>
			{todos.map((todo, index) => (
				<Todo todo={todo} todos={todos} setTodos={setTodos} index={index} />
			))}
		</div>
	);
};

export default List;
