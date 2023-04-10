import React from "react";
import SearchBox from "./SearchBox";
import AddTodo from "./AddTodo";
import ShowTodos from "./ShowTodos";

const TodoLists = () => {
	return (
		<section id='TodoList' className='w-[90%] h-full bg-white dark:bg-slate-600'>
			<article id='TodoList__header' className='w-full px-2 h-[8vh] flex items-center'>
				<SearchBox />
			</article>
			<article id='TodoList__body' className='rounded-xl p-2 w-full h-[86vh] grid grid-cols-5 gap-2'>
				<AddTodo />
				<ShowTodos />
			</article>
			<article id='TodoList__footer' className='w-full h-[6vh] px-2'></article>
		</section>
	);
};

export default TodoLists;
