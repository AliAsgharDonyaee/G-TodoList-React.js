import React, { useState } from "react";
import data from "../../package.json";
import UseDarkSide from "../components/hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const SideBar = () => {
	const [colorTheme, setTheme] = UseDarkSide();
	const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<section id='SideBar' className='pb-16 w-48 h-full bg-white'>
			<article id='SideBar__article' className=' rounded-b-3xl bg-slate-200 dark:bg-slate-800 w-full h-full'>
				<div id='SideBar__article__div' className='px-2 w-full h-20 flex justify-between items-center'>
					<h1 className='text-2xl text-gray-800 font-bold'>Todo List</h1>
					<DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} size={24} />
				</div>
				<hr className='mx-auto w-11/12 border-slate-500' />
			</article>
			<footer id='Footer' className='p-2 text-center font-bold text-gray-600'>
				<p>Made with &#x2661; in Codawin - v {data.version}</p>
			</footer>
		</section>
	);
};

export default SideBar;
