import React from "react";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineColorScheme } from "@mantine/core";

import { Center, Text, Space, Button, Container } from "@mantine/core";
import FuzzyText from "./ReactBits/FuzzyText";

import Logo from "./menu/Logo";

const NotFound = () => {
	const navigate = useNavigate();
	const isMobile = useMediaQuery("(max-width: 30.25em)");

	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	return (
		<>
			<div style={{ paddingTop: 100 }}>
				<Center>
					<FuzzyText
						color={dark ? "white" : "#1a87af"}
						enableHover={true}
						baseIntensity={0.15}
						hoverIntensity={0.3}
						fontSize={`clamp(${isMobile ? "150px" : "250px"}, 10vw, 10rem)`}
					>
						404
					</FuzzyText>
				</Center>
				<Space h="xl" />
				{isMobile ? (
					<>
						<Space h="xl" />
						<Space h="xl" />
					</>
				) : (
					<></>
				)}
				<Container size={"sm"}>
					<Center>
						{isMobile ? (
							<>
								<div>
									<FuzzyText
										color={dark ? "white" : "#1a87af"}
										enableHover={true}
										baseIntensity={0.15}
										hoverIntensity={0.3}
										fontSize={"clamp(35px, 1vw, 1rem)"}
									>
										Page not found
									</FuzzyText>
								</div>
							</>
						) : (
							<FuzzyText
								color={dark ? "white" : "#1a87af"}
								enableHover={true}
								baseIntensity={0.15}
								hoverIntensity={0.3}
								fontSize={"clamp(50px, 1vw, 1rem)"}
							>
								Oops! Page not found
							</FuzzyText>
						)}
					</Center>
				</Container>
				<Space h="xl" />
				{isMobile ? (
					<>
						<Space h="xl" />
					</>
				) : (
					<></>
				)}
				<Center>
					<Button
						onClick={() => {
							navigate("/");
							window.scrollTo(0, 0);
						}}
						color="blue.9"
					>
						Go Home
					</Button>
				</Center>
				<Space h="xl" />
				<Space h="xl" />
				<div>
					<Center>
						<Logo height={isMobile ? 60 : 100} />
					</Center>
				</div>
				{isMobile ? (
					<>
						<Space h="xl" />
						<Space h="xl" />
					</>
				) : (
					<></>
				)}
			</div>
		</>
	);
};

export default NotFound;
