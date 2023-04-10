import "./App.css";
import ContextProvider from "./components/context/ContextProvider";
import TodoLists from "./components/TodoLists";
import SideBar from "./layout/SideBar";

//!  not responsive page. size page for best view 1920*1080

function App() {
	return (
		<section id='App' className='w-full h-full flex'>
			<ContextProvider>
				<SideBar />
				<TodoLists />
			</ContextProvider>
		</section>
	);
}

export default App;
