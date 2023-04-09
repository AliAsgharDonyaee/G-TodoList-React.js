import React, { useState } from "react";
import data from "../../package.json";
import UseDarkSide from "../components/hooks/useDarkSide";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { BsPlusLg } from "react-icons/bs";
import ButtonSideBar from "../components/buttons/ButtonSideBar";

const SideBar = () => {
	const [colorTheme, setTheme] = UseDarkSide();
	const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

	const toggleDarkMode = (checked) => {
		setTheme(colorTheme);
		setDarkSide(checked);
	};

	return (
		<section id='SideBar' className='pb-16 w-[10%] h-full bg-white'>
			<article id='SideBar__article' className=' rounded-b-3xl bg-slate-300 dark:bg-slate-800 w-full h-full'>
				<div id='SideBar__article__box-title' className='px-2 w-full h-[8vh] flex justify-between items-center'>
					<h1 className='text-2xl text-gray-800 font-bold'>Todo List</h1>
					<DarkModeSwitch checked={darkSide} onChange={toggleDarkMode} color={"rgb(31,41,55)"} size={24} />
				</div>
				<hr className='mx-auto w-11/12 border-slate-400' />
				<div id='SideBar__article__box-btns' className='mt-4 grid grid-cols-1'>
					<ButtonSideBar id={"add_btn"} Icon={BsPlusLg} />
				</div>
			</article>
			<footer id='Footer' className='p-2 text-center font-bold text-gray-600'>
				<p>Made with &#x2661; in Codawin - v {data.version}</p>
			</footer>
		</section>
	);
};

export default SideBar;
