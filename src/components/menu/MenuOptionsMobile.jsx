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
} from "@mantine/core";
import { useNavigate } from "react-router-dom";

const MenuOptionsMobile = ({ list, toggle, type }) => {
	//type => I Internal - E External
	const navigate = useNavigate();

	const listMenuOptionsMobile = list.filter(
		(el) => el.typeLink === type && el.visibleMenuMobile === "Y",
	);

	return (
		<>
			{type === "I" && (
				<Container>
					{listMenuOptionsMobile.map((el) => (
						<>
							<UnstyledButton
								style={{ paddingLeft: 30, paddingBottom: 10 }}
								onClick={() => {
									navigate(el.link);
									window.scrollTo(0, 0);
									toggle();
								}}
							>
								{el.ico} {el.name}
							</UnstyledButton>
							<Space h="xs" />
						</>
					))}
				</Container>
			)}
			<Divider my="md" />
			<Space h="md" />
			<div>
				{type === "E" && (
					<Container>
						<Grid grow gutter="sm">
							{listMenuOptionsMobile.map((el) => (
								<Grid.Col span={12}>
									<Button
										fullWidth
										variant="filled"
										color="blue.9"
										size="xl"
										radius="md"
										onClick={() => {
											toggle();
											window.open(el.link, "_blank");
										}}
										leftSection={<div>{el.ico}</div>}
									>
										<Text ta="center" size="16">
											{el.name}
										</Text>
									</Button>
								</Grid.Col>
							))}
						</Grid>
					</Container>
				)}
			</div>
		</>
	);
};

export default MenuOptionsMobile;
