import { useEffect, useState } from "react";
import { getValues } from "./API";
import { BsCheck2 } from "react-icons/bs";
import { MdModeEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { useContextBtn } from "./context/ContextProvider";
import axios from "axios";
import { baseUrl } from "./baseUrl";

const ShowTodos = () => {
	const [values, setValues] = useState([]);
	let data = useContextBtn();

	useEffect(() => {
		loadPercents();
	}, []);
	const loadPercents = () => getValues().then((v) => setValues(v));

	const displayTodos = (value) => {
		if (value.length == 0) {
			if (!data) {
				return <div className='text-gray-700 dark:text-white'>you have't todo</div>;
			}
		} else if (value.length > 0) {
			return value.map((e) => {
				return (
					<div
						key={e.id}
						className={`${"rounded-lg p-2 w-72 h-80 border-2 border-dashed group"} ${
							e.check
								? "border-slate-200 dark:border-slate-400"
								: "border-slate-400 dark:border-slate-200"
						}`}
					>
						<div className='w-full h-full dark:text-white font-bold text-gray-700 relative z-0'>
							<textarea
								disabled
								value={e.title}
								className={`${"w-full h-full bg-inherit"} ${e.check && "italic line-through"}`}
							>
								{e.title}
							</textarea>
						</div>
						<div className='shadow-lg rounded-lg mx-auto w-11/12 h-10 bg-gray-700 text-white -translate-y-2 opacity-0 transition-all group-hover:-translate-y-6 group-hover:opacity-100 flex justify-around items-center z-10'>
							<button
								id='check'
								onClick={async (ev) => {
									const data = values.filter((i) => i.id === e.id);
									const titleData = data[0].title;
									const idData = data[0].id;
									const c = data[0].check;
									await axios.put(`${baseUrl}/todos/` + idData, {
										id: idData,
										title: titleData,
										check: true,
									});
									if (c) {
										return;
									} else {
										window.location.reload();
									}
								}}
								className='w-10 h-10 text-2xl transition-all hover:text-blue-500 flex justify-center items-center'
							>
								<BsCheck2 />
							</button>
							{/* <button
								id='edit'
								onClick={async () => {
									const data = values.filter((i) => i.id === e.id);
									const idData = data[0].id;
									setTF({ ability: true, id: idData });
								}}
								className='w-10 h-10 text-xl transition-all hover:text-yellow-500 flex justify-center items-center'
							>
								{!TF.ability ? <MdModeEdit /> : <BsCheck2 className='text-2xl' />}
							</button> */}
							<button
								id='delete'
								onClick={async () => {
									const data = values.filter((i) => i.id === e.id);
									const idData = data[0].id;
									await axios.delete(`${baseUrl}/todos/` + idData);
									window.location.reload();
								}}
								className='w-10 h-10 text-xl transition-all hover:text-red-500 flex justify-center items-center'
							>
								<FaTrash />
							</button>
						</div>
					</div>
				);
			});
		}
	};
	return displayTodos(values);
};

export default ShowTodos;
