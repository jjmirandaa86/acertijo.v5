import React, { useState } from "react";
import "@mantine/charts/styles.css";
import "@mantine/carousel/styles.css";
import {
	Breadcrumbs,
	Anchor,
	Space,
	Text,
	Image,
	Title,
	Mark,
	Grid,
	Button,
	Container,
	Modal,
	UnstyledButton,
	Center,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { RadarChart } from "@mantine/charts";
import { Carousel } from "@mantine/carousel";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

const ShowWork = ({ project }) => {
	const isMobile = useMediaQuery("(max-width: 30.25em)");
	const navigate = useNavigate();
	const [opened, setOpened] = useState(false);
	const [selectedImage, setSelectedImage] = useState({});

	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	const { t } = useTranslation();
	const {
		id,
		year,
		name,
		description,
		descriptionLonger,
		descriptionTech,
		website,
		websiteLong,
		platform,
		stack,
		server,
		gitHub,
		images,
		dataChart,
		diagram,
		carousel,
	} = t(project);

	const items = [
		{ title: t("app.projects.title"), href: "/projects" },
		{ title: `${name} - ${year}`, href: "#" },
	].map((item, index) => (
		<Anchor
			onClick={() => {
				navigate(`${item.href}`);
				window.scrollTo(0, 0);
			}}
			key={index}
		>
			<Button variant={dark ? "light" : "outline"} color="blue.9">
				{item.title}
			</Button>
		</Anchor>
	));

	const handleDoubleClick = (imageUrl) => {
		setSelectedImage(imageUrl);
		setOpened(true);
	};

	return (
		<div key={id}>
			<Title order={1} style={{ display: "none" }}>
				{t("app.home.name")}
			</Title>
			<Container size={"sm"}>
				<Space h="xl" />
				<Breadcrumbs separator="→" separatorMargin="md" mt="xs">
					{items}
				</Breadcrumbs>
				<Space h="xl" />
				<Grid style={{ padding: 5 }}>
					<Grid.Col span={{ base: 8, md: 10, lg: 10 }}>
						<Title order={2} size={"h1"} td={"underline"}>
							{name}
						</Title>
					</Grid.Col>
					<Grid.Col span={{ base: 4, md: 2, lg: 2 }}>
						<Center>
							<Button
								onClick={() => window.open(gitHub, "_blank")}
								size="md"
								color="yellow.6"
							>
								<FaGithub size={32} />
								<RxOpenInNewWindow />
							</Button>
						</Center>
					</Grid.Col>
				</Grid>
				<Space h="sm" />
				<span style={{ whiteSpace: "pre-line" }}>
					<Text>{descriptionLonger}</Text>
				</span>
				<Space h="xl" />
				<Title order={3}>
					{t("app.projects.platform")}: {platform}
				</Title>
				<Space h="xl" />
				<Title order={3} style={{ display: "none" }}>
					{t("app.projects.website")}: {website}
				</Title>
				<Title order={3} style={{ display: "none" }}>
					{t("app.projects.stack")}: {stack}
				</Title>
				<Title order={3} style={{ display: "none" }}>
					{t("app.projects.server")}: {server}
				</Title>
				<div>
					<Container size="xs">
						<Grid>
							<Grid.Col span={{ base: 4, md: 3, lg: 3 }}>
								<Mark color="blue.9" style={{ padding: 5 }}>
									<Text c={"white"} fw={700} component="span">
										{t("app.projects.platform")}:
									</Text>
								</Mark>
							</Grid.Col>
							<Grid.Col span={{ base: 8, md: 9, lg: 9 }}>{platform}</Grid.Col>
							<Grid.Col span={{ base: 4, md: 3, lg: 3 }}>
								<Mark color="blue.9" style={{ padding: 5 }}>
									<Text c={"white"} fw={700} component="span">
										{t("app.projects.website")}:
									</Text>
								</Mark>
							</Grid.Col>
							<Grid.Col span={{ base: 8, md: 9, lg: 9 }}>
								{website === "" ? (
									"-"
								) : (
									<a>
										<UnstyledButton
											onClick={() => window.open(websiteLong, "_blank")}
											size="md"
											color="yellow.6"
										>
											{website} <RxOpenInNewWindow />
										</UnstyledButton>
									</a>
								)}
							</Grid.Col>
							<Grid.Col span={{ base: 4, md: 3, lg: 3 }}>
								<Mark color="blue.9" style={{ padding: 5 }}>
									<Text c={"white"} fw={700} component="span">
										{t("app.projects.stack")}:
									</Text>
								</Mark>
							</Grid.Col>
							<Grid.Col span={{ base: 8, md: 9, lg: 9 }}>
								<span style={{ whiteSpace: "pre-line" }}>{stack}</span>
							</Grid.Col>
							<Grid.Col span={{ base: 4, md: 3, lg: 3 }}>
								<Mark color="blue.9" style={{ padding: 5 }}>
									<Text c={"white"} fw={700} component="span">
										{t("app.projects.server")}:
									</Text>
								</Mark>
							</Grid.Col>
							<Grid.Col span={{ base: 8, md: 9, lg: 9 }}>
								<span style={{ whiteSpace: "pre-line" }}>{server}</span>
							</Grid.Col>
						</Grid>
					</Container>
				</div>
				<Space h="xl" />
				<div>
					<Title order={3} td={"underline"}>
						{t("app.projects.contribution")}
					</Title>
					<RadarChart
						h={400}
						data={dataChart}
						dataKey="task"
						withPolarGrid={true}
						withPolarAngleAxis={true}
						withPolarRadiusAxis={true}
						polarRadiusAxisProps={{
							angle: 60,
							tickFormatter: (value) => `${value}%`,
						}}
						withLegend
						series={[
							{
								name: "Jefferson",
								color: "blue.9",
								opacity: 0.4,
							},
							{
								name: "Team",
								color: "yellow.6",
								opacity: 0.3,
							},
						]}
					/>
				</div>
				<Space h="xl" />
				<span style={{ whiteSpace: "pre-line" }}>
					<Text>{descriptionTech}</Text>
				</span>
				<Space h="xl" />
				{diagram && <Image src={diagram.url} alt={diagram.alt} radius="sm" />}
				<Space h="xl" />
				<div>
					<Title order={3} td={"underline"}>
						{t("app.projects.screenshot")}
					</Title>
					<Space h="xs" />
					<Carousel
						slideSize={isMobile ? "50%" : "30%"}
						slideGap="xs"
						controlsOffset="lg"
						controlSize={24}
						loop
						dragFree
						withIndicators
					>
						{images.map((image, index) => (
							<Carousel.Slide key={index}>
								<Image
									onDoubleClick={() => handleDoubleClick(image)}
									w={carousel}
									src={image.link}
									key={image.id}
									alt={image.alt}
									radius="sm"
									style={{ cursor: "pointer" }}
								/>
							</Carousel.Slide>
						))}
					</Carousel>
					<Modal
						title={selectedImage.alt}
						opened={opened}
						onClose={() => setOpened(false)}
						size="lg"
						centered
					>
						<Image src={selectedImage.link} alt={selectedImage.alt} />
					</Modal>
				</div>
			</Container>
		</div>
	);
};

export default ShowWork;
