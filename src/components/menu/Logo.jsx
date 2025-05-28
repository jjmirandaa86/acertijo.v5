import React from "react";
import LogoBlack from "../../assets/png/acertijo-logo-black.png";
import LogoWhite from "../../assets/png/acertijo-logo-white.png";
import { useMantineColorScheme } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Logo = ({ width, height }) => {
	const { colorScheme } = useMantineColorScheme();
	const { t } = useTranslation();
	const dark = colorScheme === "dark";

	return (
		<>
			<img
				src={dark ? LogoWhite : LogoBlack}
				width={width}
				height={height}
				className="App-logo"
				alt={t("app.general.logo.alt")}
			/>
		</>
	);
};

export default Logo;
