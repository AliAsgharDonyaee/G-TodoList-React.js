import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "./baseUrl";
import BoxTodo from "./BoxTodo";

const ShowTodos = () => {
	const [datas, setData] = useState();

	let effect = useEffect(() => {
		getAllTodos();
	}, []);

	const getAllTodos = () => {
		return axios
			.get(`${baseUrl}/todos`)
			.then((res) =>
				res.data.map((e) => {
					<BoxTodo item={e} />;
				}),
			)
			.catch((err) => console.log(`Error ${err}`));
	};
	return effect;
};

export default ShowTodos;
