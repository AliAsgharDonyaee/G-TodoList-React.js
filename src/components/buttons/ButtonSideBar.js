const ButtonSideBar = ({ id, Icon }) => {
	return (
		<button
			id={id}
			className='shadow-lg shadow-slate-400 dark:shadow-lg dark:shadow-gray-900 rounded-xl bg-gray-700 mx-auto w-12 h-12'
		>
			<Icon className='mx-auto text-3xl text-white transition-all hover:text-4xl ' />
		</button>
	);
};

export default ButtonSideBar;
