import React from "react";
import { BsCheck2 } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const BoxTodo = ({ item }) =>
{
    console.log(item);
	// const displayTodos = (item) => {
	// 	if (item.length > 0) {
	// 		return <div>you have not todos</div>;
	// 	} else {
	// 		return (
	// 			<>
	// 				<div
	// 					id='box_todo'
	// 					className='rounded-lg p-2 w-72 h-80 border-2 border-slate-400 border-dashed dark:border-slate-400 group'
	// 				>
	// 					<div className='w-full h-full dark:text-white relative z-0'>lorem...</div>
	// 					<div className='shadow-lg rounded-lg mx-auto w-11/12 h-10 bg-gray-700 text-white -translate-y-2 opacity-0 transition-all group-hover:-translate-y-6 group-hover:opacity-100 flex justify-around items-center z-10'>
	// 						<button className='w-10 h-10 text-2xl transition-all hover:text-blue-500 flex justify-center items-center'>
	// 							<BsCheck2 />
	// 						</button>
	// 						<button className='w-10 h-10 text-xl transition-all hover:text-yellow-500 flex justify-center items-center'>
	// 							<MdModeEdit />
	// 						</button>
	// 						<button className='w-10 h-10 text-xl transition-all hover:text-red-500 flex justify-center items-center'>
	// 							<FaTrash />
	// 						</button>
	// 					</div>
	// 				</div>
	// 				;
	// 			</>
	// 		);
	// 	}
	// };
	// return displayTodos(data);
};

export default BoxTodo;
