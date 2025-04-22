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
import { useMantineColorScheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { RadarChart } from "@mantine/charts";
import { Carousel } from "@mantine/carousel";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";

const ShowWork = ({ data }) => {
	const isMobile = useMediaQuery("(max-width: 30.25em)");
	const navigate = useNavigate();
	const [opened, setOpened] = useState(false);
	const [selectedImage, setSelectedImage] = useState({});

	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	const items = [
		{ title: "Works", href: "/projects" },
		{ title: `${data.name} - ${data.year}`, href: "#" },
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
		<div>
			<Title order={1} style={{ display: "none" }}>
				Jefferson Miranda
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
							{data.name}
						</Title>
					</Grid.Col>
					<Grid.Col span={{ base: 4, md: 2, lg: 2 }}>
						<Center>
							<Button
								onClick={() => window.open(data.gitHub, "_blank")}
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
					<Text>{data.description}</Text>
				</span>
				<Space h="xl" />
				<Title order={3}>Platform: {data.platform}</Title>
				<Space h="xl" />
				<Title order={3} style={{ display: "none" }}>
					Website: {data.website}
				</Title>
				<Title order={3} style={{ display: "none" }}>
					Stack: {data.stack}
				</Title>
				<Title order={3} style={{ display: "none" }}>
					Server: {data.Server}
				</Title>
				<div>
					<Container size="xs">
						<Grid>
							<Grid.Col span={{ base: 4, md: 3, lg: 3 }}>
								<Mark color="blue.9" style={{ padding: 5 }}>
									<Text c={"white"} fw={700} component="span">
										Platform:
									</Text>
								</Mark>
							</Grid.Col>
							<Grid.Col span={{ base: 8, md: 9, lg: 9 }}>{data.platform}</Grid.Col>
							<Grid.Col span={{ base: 4, md: 3, lg: 3 }}>
								<Mark color="blue.9" style={{ padding: 5 }}>
									<Text c={"white"} fw={700} component="span">
										Website:
									</Text>
								</Mark>
							</Grid.Col>
							<Grid.Col span={{ base: 8, md: 9, lg: 9 }}>
								{data.website === "" ? (
									"-"
								) : (
									<a>
										<UnstyledButton
											onClick={() => window.open(data.websiteLong, "_blank")}
											size="md"
											color="yellow.6"
										>
											{data.website} <RxOpenInNewWindow />
										</UnstyledButton>
									</a>
								)}
							</Grid.Col>
							<Grid.Col span={{ base: 4, md: 3, lg: 3 }}>
								<Mark color="blue.9" style={{ padding: 5 }}>
									<Text c={"white"} fw={700} component="span">
										Stack:
									</Text>
								</Mark>
							</Grid.Col>
							<Grid.Col span={{ base: 8, md: 9, lg: 9 }}>
								<span style={{ whiteSpace: "pre-line" }}>{data.stack}</span>
							</Grid.Col>
							<Grid.Col span={{ base: 4, md: 3, lg: 3 }}>
								<Mark color="blue.9" style={{ padding: 5 }}>
									<Text c={"white"} fw={700} component="span">
										Server:
									</Text>
								</Mark>
							</Grid.Col>
							<Grid.Col span={{ base: 8, md: 9, lg: 9 }}>
								<span style={{ whiteSpace: "pre-line" }}>{data.server}</span>
							</Grid.Col>
						</Grid>
					</Container>
				</div>
				<Space h="xl" />
				<div>
					<Title order={3} td={"underline"}>
						Contribution
					</Title>
					<RadarChart
						h={400}
						data={data.dataChart}
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
					<Text>{data.descriptionTech}</Text>
				</span>
				<Space h="xl" />
				{data.diagram && (
					<Image src={data.diagram.url} alt={data.diagram.alt} radius="sm" />
				)}
				<Space h="xl" />
				<div>
					<Title order={3} td={"underline"}>
						Screenshot
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
						{data.images.map((image) => (
							<Carousel.Slide>
								<Image
									onDoubleClick={() => handleDoubleClick(image)}
									w={data.carousel}
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
