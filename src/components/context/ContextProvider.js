import React, { useContext, useState } from "react";

const ContextProvider = ({ children }) => {
	const [Data, dispatch] = useState(false);

	return (
		<ContextBtn.Provider value={Data}>
			<ContextDispatcher.Provider value={dispatch}>{children}</ContextDispatcher.Provider>
		</ContextBtn.Provider>
	);
};

export default ContextProvider;

// btn add
const ContextBtn = React.createContext();
export const useContextBtn = () => useContext(ContextBtn);
// btn add
const ContextDispatcher = React.createContext();
export const useContextBtnAction = () => useContext(ContextDispatcher);
