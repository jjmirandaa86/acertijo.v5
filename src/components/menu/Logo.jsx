import React from "react";
import LogoBlack from "../../assets/png/acertijo-logo-black.png";
import LogoWhite from "../../assets/png/acertijo-logo-white.png";
import { useMantineColorScheme } from "@mantine/core";

const Logo = ({ width, height }) => {
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	return (
		<img
			src={dark ? LogoWhite : LogoBlack}
			width={width}
			height={height}
			className="App-logo"
			alt="Acertijo logo, personal brand"
		/>
	);
};

export default Logo;
