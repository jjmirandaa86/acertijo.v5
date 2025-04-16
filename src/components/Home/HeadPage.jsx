import React from "react";
import Coding from "../../assets/jpg/work-933061_1280_Desktop.jpg";
import {
	BackgroundImage,
	Center,
	Container,
	Card,
	Box,
	Text,
	Space,
} from "@mantine/core";
import BlurText from "../ReactBits/BlurText";

const HeadPage = ({ isMobile }) => {
	const title = "Hello, I am full stack developer based in Sydney!";
	return (
		<>
			<div class="ocean">
				<div class="wave"></div>
				<div class="wave"></div>
			</div>
			<Space h="xl" />

			{/* <div style={{ width: 10, height: 10 }}>
				<div
					class="ocean"
					style={{
						position: "absolute",
						transform: "rotate(180deg)",
						margin: 800,
						zIndex: 1,
						width: "100%",
						height: "100%",
					}}
				>
					<div class="wave"></div>
					<div class="wave"></div>
				</div>
			</div> */}
			<Container size="sm" style={{ zIndex: 9 }}>
				<div style={{ zIndex: 9, position: "relative" }}>
					<BackgroundImage src={Coding} radius="lg" h={isMobile ? 300 : 350}>
						<Center p="md">
							<Container size="md">
								<div
									style={{
										paddingTop: isMobile ? 200 : 250,
									}}
								>
									<Card shadow="sm" padding="lg" radius="md" withBorder>
										<div>
											<Card.Section>
												<Center>
													<Text
														ta={"center"}
														size={isMobile ? "md" : "xl"}
														style={{
															paddingTop: 0,
															paddingBottom: 0,
															paddingLeft: isMobile ? 10 : 25,
															paddingRight: isMobile ? 10 : 25,
														}}
													>
														<BlurText
															text={title}
															delay={200}
															animateBy="words" // 'words' or 'letters'
															className=""
															direction="top" // 'top' or 'bottom'
															threshold={0.8}
															rootMargin="0px"
															easing="easeOutCubic"
														/>
													</Text>
												</Center>
											</Card.Section>
										</div>
									</Card>
								</div>
							</Container>
						</Center>
					</BackgroundImage>
				</div>
			</Container>
		</>
	);
};

export default HeadPage;
