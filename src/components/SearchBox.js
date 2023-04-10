import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
	return (
		<div
			id='search_box'
			className='rounded-xl px-1 w-96 h-12 bg-slate-200 dark:bg-slate-500 flex justify-around items-center'
		>
			<button id='search_btn' className=' w-10 h-10 flex justify-center items-center'>
				<kbd className='rounded-md border-2 border-gray-400 dark:text-gray-100'>Enter</kbd>
				{/* <IoSearch className="text-gray-800"/> */}
			</button>
			<input
				type='text'
				placeholder='Todo No 1'
				className='w-4/5 h-4/5 bg-inherit text-gray-700 dark:text-gray-100 font-bold'
			/>
		</div>
	);
};

export default SearchBox;
