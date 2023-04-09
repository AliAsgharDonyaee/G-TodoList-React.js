import "./App.css";
import TodoLists from "./components/TodoLists";
import SideBar from "./layout/SideBar";

//!  not responsive page. size page for best view 1920*1080

function App() {
	return (
		<section id='App' className='w-full h-full flex'>
			<SideBar />
			<TodoLists />
		</section>
	);
}

export default App;
