import React from "react";
import { UnstyledButton } from "@mantine/core";

import classes from "./MenuOptions.module.css";

import { useNavigate } from "react-router-dom";

const MenuOptions = ({ list }) => {
	const navigate = useNavigate();

	return (
		<>
			{list.map((el) => (
				<>
					{el.typeLink === "I" && el.visibleMenuMain === "Y" && (
						<UnstyledButton
							className={classes.control}
							onClick={() => {
								navigate(el.link);
								window.scrollTo(0, 0);
							}}
						>
							{el.ico} {el.name}
						</UnstyledButton>
					)}
					{el.typeLink === "E" && (
						<UnstyledButton
							className={classes.control}
							onClick={() => window.open(el.link, "_blank")}
						>
							{el.ico} {el.name}
						</UnstyledButton>
					)}
				</>
			))}
		</>
	);
};

export default MenuOptions;
