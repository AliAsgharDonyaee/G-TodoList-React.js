import React from "react";
import SearchBox from "./SearchBox";
import { BsCheck2 } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";

const TodoLists = () => {
	return (
		<section id='TodoList' className='w-[90%] h-full bg-white'>
			<article id='TodoList__header' className='shadow-lg w-full px-2 h-[8vh] flex items-center'>
				<SearchBox />
			</article>
			<article id='TodoList__body' className='rounded-xl p-2 w-full h-[86vh] grid grid-cols-5 gap-2'>
				{/*  */}
				<div id='box_todo' className='rounded-lg p-2 w-72 h-80 border-2 group'>
					<div className='w-full h-full relative z-0'>lorem...</div>
					<div className='shadow-lg rounded-lg mx-auto w-11/12 h-10 bg-gray-700 text-white -translate-y-2 opacity-0 transition-all group-hover:-translate-y-6 group-hover:opacity-100 flex justify-around items-center z-10'>
						<button className='w-10 h-10 text-2xl transition-all hover:text-blue-500 flex justify-center items-center'>
							<BsCheck2 />
						</button>
						<button className='w-10 h-10 text-xl transition-all hover:text-yellow-500 flex justify-center items-center'>
							<MdModeEdit />
						</button>
						<button className='w-10 h-10 text-xl transition-all hover:text-red-500 flex justify-center items-center'>
							<FaTrash />
						</button>
					</div>
				</div>
				{/*  */}
			</article>
			<article id='TodoList__footer' className='w-full h-[6vh] px-2'></article>
		</section>
	);
};

export default TodoLists;
