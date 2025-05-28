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
import RotatingText from "./ReactBits/RotatingText";
import ScrollVelocity from "./ReactBits/ScrollVelocity";
import DecryptedText from "./ReactBits/DecryptedText";

import { useTranslation } from "react-i18next";
import FocusText from "./Home/FocusText";

const Home = () => {
	const isMobile = useMediaQuery("(max-width: 30.25em)");
	const navigate = useNavigate();
	const { t } = useTranslation();

	const name = t("app.home.name"),
		jobTitle = t("app.home.job-title"),
		tech = t("app.home.tech-description"),
		description = t("app.home.work.description");
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
										key={name}
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
										key={jobTitle}
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
										key={tech}
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
					<FocusText />
				</div>
				<Space h="xl" />
				<div>
					<Title order={2} td={"underline"} ta={"left"}>
						{t("app.home.work.title")}
					</Title>
					<Space h="xs" />
					<Text>{description}</Text>
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
								text={t("app.home.work.portfolio")}
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
						{t("app.home.bio.title")}
					</Title>
					<Space h="md" />
					<Container size={"md"}>
						<Grid>
							<GridCol span={{ base: 2, md: 1, lg: 1 }}>
								{t("app.home.bio.event-1.date")}
							</GridCol>
							<GridCol span={{ base: 10, md: 11, lg: 11 }}>
								{t("app.home.bio.event-1.description")}
							</GridCol>
							<GridCol span={{ base: 2, md: 1, lg: 1 }}>
								{t("app.home.bio.event-2.date")}
							</GridCol>
							<GridCol span={{ base: 10, md: 11, lg: 11 }}>
								{t("app.home.bio.event-2.description")}
							</GridCol>
							<GridCol span={{ base: 2, md: 1, lg: 1 }}>
								{t("app.home.bio.event-3.date")}
							</GridCol>
							<GridCol span={{ base: 10, md: 11, lg: 11 }}>
								{t("app.home.bio.event-3.description")}
							</GridCol>
							<GridCol span={{ base: 2, md: 1, lg: 1 }}>
								{t("app.home.bio.event-4.date")}
							</GridCol>
							<GridCol span={{ base: 10, md: 11, lg: 11 }}>
								{t("app.home.bio.event-4.description")}
							</GridCol>
							<GridCol span={{ base: 2, md: 1, lg: 1 }}>
								{t("app.home.bio.event-5.date")}
							</GridCol>
							<GridCol span={{ base: 10, md: 11, lg: 11 }}>
								{t("app.home.bio.event-5.description")}
							</GridCol>
							<GridCol span={{ base: 2, md: 1, lg: 1 }}>
								{t("app.home.bio.event-6.date")}
							</GridCol>
							<GridCol span={{ base: 10, md: 11, lg: 11 }}>
								{t("app.home.bio.event-6.description")}
							</GridCol>
						</Grid>
					</Container>
				</div>
				<Space h="xl" />
				<div style={{ fontSize: "10px" }}>
					<Title order={2} td={"underline"}>
						{t("app.home.tech.title")}
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

					<Center>
						<Button
							color="blue.9"
							//fullWidth
							ta={"center"}
							mt="md"
							size="xl"
							radius="md"
							onClick={() => {
								navigate("/certificates");
								window.scrollTo(0, 0);
							}}
							component="h3"
						>
							<ShinyText
								text={t("app.home.tech.certificate")}
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
						{t("app.home.love.title")}
					</Title>
					<Space h="md" />
					<Container size={"md"}>
						<Text>{t("app.home.love.description")}</Text>
					</Container>
				</div>
				<Space h="xl" />
				<div>
					<Title order={2} td={"underline"}>
						{t("app.home.social-media.title")}
					</Title>
					<Space h="md" />
					<div style={{ paddingLeft: 30 }}>
						{network.map((el, index) => (
							<div key={index}>
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
