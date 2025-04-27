import React from "react";
import SplitText from "../ReactBits/SplitText";
import CountUp from "../ReactBits/CountUp";
import { Center, Container, Space, Title, Image, Flex } from "@mantine/core";
import Logo from "../menu/Logo";
import LoadingImage from "../../assets/svg/Loading.svg";

const Loading = () => {
	return (
		<Flex justify="center" align="center" style={{ height: "100vh" }}>
			<Container>
				<Space h="md" />
				<Space h="md" />
				<Space h="md" />
				<Center>
					<div>
						<Logo height={70} />
					</div>
				</Center>

				<Center>
					<Image radius="md" h={100} w="auto" fit="contain" src={LoadingImage} />
				</Center>
				<Center>
					<Space h="md" />
					<div>
						<Title>
							<SplitText
								text="Loading!"
								className="text-2xl font-semibold text-center"
								delay={150}
								animationFrom={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
								animationTo={{ opacity: 1, transform: "translate3d(0,0,0)" }}
								easing="easeOutCubic"
								threshold={0.1}
								rootMargin="-50px"
							/>
						</Title>
					</div>
				</Center>
			</Container>
		</Flex>
	);
};

export default Loading;
