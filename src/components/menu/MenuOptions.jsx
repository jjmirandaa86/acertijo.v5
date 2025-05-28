import React from "react";
import { UnstyledButton } from "@mantine/core";

import classes from "./MenuOptions.module.css";

import { useNavigate } from "react-router-dom";
import ChooseFileCv from "../Cv/ChooseFileCv";

const MenuOptions = ({ list }) => {
	const navigate = useNavigate();

	return (
		<>
			{list.map((el, index) => (
				<div key={index}>
					{el.typeLink === "I" && el.visibleMenuMain === "Y" && (
						<UnstyledButton
							key={el.id}
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
							key={el.id}
							className={classes.control}
							onClick={() => window.open(el.link, "_blank")}
						>
							{el.ico} {el.name}
						</UnstyledButton>
					)}
					{el.typeLink === "C" && (
						<UnstyledButton key={el.id} className={classes.control}>
							<div id={"downloadFile"} style={{ display: "none" }}>
								<ChooseFileCv mobile={false} />
							</div>
							<div
								id={"showMenu"}
								style={{ display: "block" }}
								onClick={() => {
									document.getElementById("downloadFile").style.display = "block";
									document.getElementById("showMenu").style.display = "none";
								}}
							>
								{el.ico} {el.name}
							</div>
						</UnstyledButton>
					)}
				</div>
			))}
		</>
	);
};

export default MenuOptions;

/*
{
			id: 4,
			name: t("app.general.menu.cv.label"),
			link: "https://acertijo.dev/assets/pdf/CV-Jefferson Miranda.pdf",
			ico: <SiReaddotcv />,
			typeLink: "E",
			visibleMenuMain: "Y",
			visibleMenuMobile: "Y",
		},
*/
