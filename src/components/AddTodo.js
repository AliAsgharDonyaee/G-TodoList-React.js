import React, { useEffect, useRef, useState } from "react";
import { BsCheck2 } from "react-icons/bs";
import { useContextBtn } from "./context/ContextProvider";
import axios from "axios";
import { baseUrl } from "./baseUrl";

const AddTodo = () => {
	let data = useContextBtn();
	let [text, setText] = useState("");

	return (
		<>
			{data && (
				<form
					onSubmit={(e) => e.preventDefault()}
					id='box_todo'
					className='rounded-lg p-2 w-72 h-80 border-2 border-slate-400 border-dashed dark:border-slate-400 group'
				>
					<textarea
						value={text}
						autoFocus
						onChange={(e) => setText(e.target.value)}
						className='w-full h-full font-bold text-gray-800 dark:text-white dark:bg-inherit relative z-0'
						placeholder='add you todo ...'
					></textarea>
					<div className='shadow-lg rounded-lg mx-auto w-11/12 h-10 bg-gray-700 text-white -translate-y-2 opacity-0 transition-all group-hover:-translate-y-6 group-hover:opacity-100 flex justify-around items-center z-10'>
						<button
							className='w-10 h-10 text-2xl transition-all hover:text-blue-500 flex justify-center items-center'
							onClick={async () => {
								await axios
									.post(`${baseUrl}/todos`, {
										id: Math.floor(Math.random() * 1000000),
										title: text,
										check: false,
									})
									.then((res) => console.log(res))
									.catch((err) => console.log(err));
								window.location.reload();
								data = true;
							}}
						>
							<BsCheck2 />
						</button>
					</div>
				</form>
			)}
		</>
	);
};

export default AddTodo;
