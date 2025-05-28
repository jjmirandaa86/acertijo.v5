import React from "react";
import {
	Grid,
	UnstyledButton,
	Space,
	Button,
	Text,
	Divider,
	Image,
	Container,
	ActionIcon,
	Group,
} from "@mantine/core";
import { useTranslation } from "react-i18next";

const ChooseFileCv = ({ mobile }) => {
	const { t } = useTranslation();

	return (
		<>
			{!mobile && (
				<div
					onClick={() => {
						document.getElementById("downloadFile").style.display = "none";
						document.getElementById("showMenu").style.display = "block";
					}}
				>
					CV:
					<ActionIcon
						size={40}
						radius="md"
						color="blue.9"
						onClick={() => {
							window.open("/assets/pdf/CV-Jefferson Miranda-es.pdf", "_blank");
						}}
					>
						ES
					</ActionIcon>{" "}
					<ActionIcon
						size={40}
						radius="md"
						color="blue.9"
						onClick={() => {
							window.open("/assets/pdf/CV-Jefferson Miranda-en.pdf", "_blank");
						}}
					>
						EN
					</ActionIcon>
				</div>
			)}

			{mobile && (
				<>
					<Grid.Col span={12} key={"CV-label"}>
						{t("app.general.language.title")}
					</Grid.Col>
					<Grid.Col span={12} key={"CV"}>
						<Button.Group justify="center">
							<Button
								fullWidth
								variant="filled"
								color="blue.9"
								size="xl"
								radius="md"
								leftSection={"🇪🇸"}
								onClick={() => {
									//toggle();
									window.open("/assets/pdf/CV-Jefferson Miranda-es.pdf", "_blank");
								}}
							>
								<Text ta="center" size="16">
									ES
								</Text>
							</Button>
							<Space w="lg" />
							<Button
								fullWidth
								variant="filled"
								color="blue.9"
								size="xl"
								radius="md"
								leftSection={"🇺🇸"}
								onClick={() => {
									//toggle();
									window.open("/assets/pdf/CV-Jefferson Miranda-en.pdf", "_blank");
								}}
							>
								<Text ta="center" size="16">
									EN
								</Text>
							</Button>
						</Button.Group>
					</Grid.Col>
				</>
			)}
		</>
	);
};

export default ChooseFileCv;
