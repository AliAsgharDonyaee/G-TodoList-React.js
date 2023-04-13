import React, { useEffect, useRef, useState } from "react";

const SearchBox = () => {
	const [data, setData] = useState("");
	const inputRef = useRef();

	useEffect(() => {
		inputRef.current = data;
	}, [data]);

	return (
		<div
			id='search_box'
			className='rounded-xl px-1 w-96 h-12 bg-slate-200 dark:bg-slate-500 flex justify-around items-center'
		>
			<button id='search_btn' className=' w-10 h-10 flex justify-center items-center'>
				<kbd className='rounded-md border-2 border-gray-400 dark:text-gray-100'>Enter</kbd>
			</button>
			<input
				type='text'
				placeholder='Todo No 1'
				className='w-4/5 h-4/5 bg-inherit text-gray-700 dark:text-gray-100 font-bold'
				value={data}
				ref={inputRef}
				onChange={(e) => setData(e.target.value)}
			/>
		</div>
	);
};

export default SearchBox;
