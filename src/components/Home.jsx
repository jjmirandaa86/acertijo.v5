import React from "react";
import {
	Container,
	Image,
	Text,
	Center,
	Box,
	Grid,
	Space,
	Title,
	Button,
	GridCol,
	Flex,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import Jeff from "../assets/jpg/jeff-happy-light.jpg";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiVite } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { GrOracle } from "react-icons/gr";
import { DiMsqlServer } from "react-icons/di";
import { SiPostgresql } from "react-icons/si";
import { FaDigitalOcean } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { TbBrandMantine } from "react-icons/tb";
import { DiWordpress } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiNginx } from "react-icons/di";
import { DiMongodb } from "react-icons/di";
import { DiLinux } from "react-icons/di";
import { DiJavascript1 } from "react-icons/di";
import { DiDocker } from "react-icons/di";

import { SiMysql } from "react-icons/si";
import HeadPage from "./Home/HeadPage";
import SplitText from "./ReactBits/SplitText";
import ShinyText from "./ReactBits/ShinyText";
import GradientText from "./ReactBits/GradientText";
import TrueFocus from "./ReactBits/TrueFocus";
import RotatingText from "./ReactBits/RotatingText";
import ScrollVelocity from "./ReactBits/ScrollVelocity";
import DecryptedText from "./ReactBits/DecryptedText";

const Home = () => {
	const isMobile = useMediaQuery("(max-width: 30.25em)");
	const navigate = useNavigate();

	const name = "Jefferson Miranda",
		jobTitle = "Full Stack Developer",
		tech = "React JS / Javascript / TypeScript / Node JS",
		intro =
			"Jefferson is a freelance full-stack developer based in Sydney with over 12 years of experience crafting scalable and user-focused digital solutions. I thrive on turning ideas into real-world applications—handling everything from planning and design to clean, functional code. I'm especially passionate about building products that solve problems and create value through technology. Outside of work, I enjoy staying active—usually out for a run or exploring new places.";
	const network = [
		{
			id: 1,
			name: "@jjmirandaa86",
			link: "https://github.com/jjmirandaa86",
			ico: <FaGithub />,
		},
		{
			id: 5,
			name: "@jjmirandaa86",
			link: "https://www.linkedin.com/in/jjmirandaa86/",
			ico: <FaLinkedinIn />,
		},
		{
			id: 3,
			name: "@jjmirandaa",
			link: "https://www.instagram.com/jjmirandaa/",
			ico: <FaInstagram />,
		},
		{
			id: 4,
			name: "@jjmirandaa",
			link: "https://www.facebook.com/jjmirandaa",
			ico: <FaFacebook />,
		},
		{
			id: 2,
			name: "@2jmiranda",
			link: "https://x.com/2jmiranda",
			ico: <FaTwitter />,
		},
	];

	return (
		<div>
			{<HeadPage isMobile={isMobile} />}
			<Space h="md" />
			<Container size={"sm"}>
				<Space h="md" />
				<div>
					<Grid>
						<Grid.Col
							span={{ base: 12, md: 8, lg: 8 }}
							style={{ alignContent: "center", justifyItems: "flex-end" }}
						>
							<Title order={1} size="h1" lh={"xs"}>
								<div
									style={{
										textAlign: isMobile ? "center" : "left",
									}}
								>
									<DecryptedText
										animateOn="view"
										text={name}
										speed={80}
										maxIterations={20}
										className="revealed"
										parentClassName="all-letters"
										encryptedClassName="encrypted"
									/>
								</div>
							</Title>
							<Title order={2} size="h2" lh={"xs"}>
								<div style={{ textAlign: isMobile ? "center" : "left" }}>
									<DecryptedText
										animateOn="view"
										text={jobTitle}
										speed={160}
										maxIterations={20}
										className="revealed"
										parentClassName="all-letters"
										encryptedClassName="encrypted"
									/>
								</div>
							</Title>
							<Title order={3} size="h5" lh={"xs"}>
								<div style={{ textAlign: isMobile ? "center" : "left" }}>
									<DecryptedText
										animateOn="view"
										text={tech}
										speed={240}
										maxIterations={20}
										className="revealed"
										parentClassName="all-letters"
										encryptedClassName="encrypted"
									/>
								</div>
							</Title>
						</Grid.Col>
						<Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
							<Center>
								<Box>
									<Image radius="40%" w={120} src={Jeff} />
								</Box>
							</Center>
						</Grid.Col>
					</Grid>
				</div>
				<Space h="xl" />
				<div>
					<TrueFocus
						sentence="FrontEnd BackEnd Database DevOps"
						manualMode={false}
						blurAmount={5}
						borderColor={"rgba(27, 139, 179, 1)"}
						glowColor={"rgba(27, 139, 179, 1)"}
						animationDuration={1}
						pauseBetweenAnimations={2}
					/>
				</div>
				<Space h="xl" />
				<div>
					<Title order={2} td={"underline"} ta={"left"}>
						Work
					</Title>
					<Space h="xs" />
					<Text>{intro}</Text>
					<Center>
						<Button
							color="blue.9"
							//fullWidth
							ta={"center"}
							mt="md"
							size="xl"
							radius="md"
							onClick={() => {
								navigate("/projects");
								window.scrollTo(0, 0);
							}}
							component="h3"
						>
							<ShinyText
								text="My Portfolio"
								disabled={false}
								speed={3}
								className="custom-class"
							/>
						</Button>
					</Center>
				</div>
				<Space h="xl" />
				<div>
					<Title order={2} td={"underline"}>
						Bio
					</Title>
					<Space h="md" />
					<Container size={"md"}>
						<Grid>
							<GridCol span={{ base: 2, md: 1, lg: 1 }}>1986</GridCol>
							<GridCol span={{ base: 10, md: 11, lg: 11 }}>
								Born in Guayaquil, Ecuador.
							</GridCol>
							<GridCol span={{ base: 2, md: 1, lg: 1 }}>2010</GridCol>
							<GridCol span={{ base: 10, md: 11, lg: 11 }}>
								Completed my degree in computer systems engineering, Guayaquil /
								Ecuador.
							</GridCol>
							<GridCol span={{ base: 2, md: 1, lg: 1 }}>2011</GridCol>
							<GridCol span={{ base: 10, md: 11, lg: 11 }}>
								Worked in Birobid S.A., Guayaquil / Ecuador.
							</GridCol>
							<GridCol span={{ base: 2, md: 1, lg: 1 }}>2012</GridCol>
							<GridCol span={{ base: 10, md: 11, lg: 11 }}>
								Worked in SYL Trading Company, Guayaquil / Ecuador.
							</GridCol>
							<GridCol span={{ base: 2, md: 1, lg: 1 }}>2015</GridCol>
							<GridCol span={{ base: 10, md: 11, lg: 11 }}>
								Worked in Tesalia CBC, Guayaquil / Ecuador.
							</GridCol>
							<GridCol span={{ base: 2, md: 1, lg: 1 }}>2024</GridCol>
							<GridCol span={{ base: 10, md: 11, lg: 11 }}>
								Studying a diploma in FrontEnd-Backend, Sydney, Australia.
							</GridCol>
						</Grid>
					</Container>
				</div>
				<Space h="xl" />
				<div style={{ fontSize: "10px" }}>
					<Title order={2} td={"underline"}>
						Tech
					</Title>
					<Space h="md" />
					<ScrollVelocity
						damping={30}
						texts={[
							<>
								<DiJavascript1 />
								<FaReact /> <SiVite />
								<SiRedux />
								<SiAxios />
								<FaHtml5 />
								<TbBrandMantine />
								<DiBootstrap />
								<FaCss3Alt />
								<DiWordpress />
							</>,
							<>
								<SiExpress />
								<DiPhp />
								<FaNodeJs />
								<GrOracle />
								<DiMsqlServer />
								<SiPostgresql />
								<DiMongodb />
								<SiMysql />
							</>,
							<>
								<FaAws />
								<FaGitAlt />
								<FaGithub />
								<DiDocker />
								<FaDigitalOcean />
								<DiLinux />
								<DiNginx />
							</>,
						]}
						velocity={50}
						//className="custom-scroll-text"
					/>
				</div>
				<Space h="xl" />
				<div>
					<Title order={2} td={"underline"}>
						I ♥
					</Title>
					<Space h="md" />
					<Container size={"md"}>
						<Text>
							swimming 🏊‍♂️, running 🏃‍♂️, trekking 🧗‍♂️, coding 👨‍💻, coding 👨‍💻 and more
							coding 👨‍💻.
						</Text>
					</Container>
				</div>
				<Space h="xl" />
				<div>
					<Title order={2} td={"underline"}>
						On the web
					</Title>
					<Space h="md" />
					<div style={{ paddingLeft: 30 }}>
						{network.map((el) => (
							<div>
								<Button
									style={{ margin: 4 }}
									component="h3"
									onClick={() => window.open(el.link, "_blank")}
									leftSection={el.ico}
									size="md"
									color="blue.9"
									variant="subtle"
								>
									{el.name}
								</Button>
							</div>
						))}
					</div>
				</div>
			</Container>
		</div>
	);
};

export default Home;
