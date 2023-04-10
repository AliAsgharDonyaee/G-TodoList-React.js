import { useState } from "react";
import { useContextBtn, useContextBtnAction } from "../context/ContextProvider";

const ButtonSideBar = ({ id, Icon }) => {
	const data = useContextBtn();
	const dispatch = useContextBtnAction();
	return (
		<button
			id={id}
			onClick={() => dispatch(!data)}
			className='shadow-lg shadow-slate-400 dark:shadow-lg dark:shadow-gray-900 rounded-xl bg-gray-700 mx-auto w-12 h-12 group'
		>
			{!data ? (
				<Icon className='mx-auto text-3xl text-white transition-all group-hover:text-4xl ' />
			) : (
				<Icon className='mx-auto text-3xl text-white transition-all group-hover:text-4xl rotate-45' />
			)}
		</button>
	);
};

export default ButtonSideBar;
