import axios from "axios";
export const getValues = async () => {
	const { data } = await axios.get("http://localhost:4000/todos");
	return data;
};
