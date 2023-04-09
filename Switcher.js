import React, { useState } from "react";
import UseDarkSide from "./src/components/hooks/useDarkSide";

const Switcher = () => {
	const [colorTheme, setTheme] = UseDarkSide();
	const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false);

    const to

	return <div></div>;
};

export default Switcher;
