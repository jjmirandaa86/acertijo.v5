import React from "react";
import { useMediaQuery } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";
import {
	Grid,
	Space,
	Title,
	Card,
	Image,
	Group,
	Text,
	Button,
	Container,
	Divider,
} from "@mantine/core";
import { useTranslation } from "react-i18next";

import HeadPage from "./Home/HeadPage";
import LlamaRemovals from "../assets/webp/llamaRemovals.webp";
import LearningWords from "../assets/webp/learningWords.webp";
import ApiLlamaRemovals from "../assets/webp/apillamaremovals.webp";
import SurveyTesalia from "../assets/webp/surveyTesalia.webp";

const Projects = () => {
	const isMobile = useMediaQuery("(max-width: 30.25em)");
	const navigate = useNavigate();
	const { t } = useTranslation();

	const listProjects = [
		{
			id: 1,
			name: t("app.projects.list.project-1.name"),
			description: t("app.projects.list.project-1.description"),
			url: "https://llamaremovals.com.au",
			moreInfo: "/projects/llamaremovals",
			image: LlamaRemovals,
			type: "W",
		},
		{
			id: 2,
			name: t("app.projects.list.project-2.name"),
			description: t("app.projects.list.project-2.description"),
			url: "https://learningwords-pi.vercel.app/",
			moreInfo: "/projects/learningwords",
			image: LearningWords,
			type: "W",
		},
		{
			id: 3,
			name: t("app.projects.list.project-3.name"),
			description: t("app.projects.list.project-3.description"),
			url: "https://api.llamaremovals.com.au",
			moreInfo: "/projects/apillamaremovals",
			image: ApiLlamaRemovals,
			type: "W",
		},
		{
			id: 4,
			name: t("app.projects.list.project-4.name"),
			description: t("app.projects.list.project-4.description"),
			url: "",
			moreInfo: "/projects/surveytesalia",
			image: SurveyTesalia,
			type: "OW",
		},
	];

	const listProjectsWork = listProjects.filter((el) => el.type === "W");
	const listProjectsOldWork = listProjects.filter((el) => el.type === "OW");

	return (
		<div>
			<HeadPage isMobile={isMobile} />
			<Space h="xl" />
			<Title order={1} style={{ display: "none" }}>
				{t("app.home.name")}
			</Title>
			<Container size={"sm"}>
				<Title order={2} td={"underline"}>
					{t("app.projects.title")}
				</Title>
				<Grid>
					{listProjectsWork.map((el, index) => (
						<Grid.Col span={{ base: 12, md: 6, lg: 6 }} key={index}>
							<Card shadow="sm" padding="lg" radius="md" withBorder>
								<Card.Section>
									<Image src={el.image} height={160} alt="Norway" />
								</Card.Section>
								<Group justify="space-between" mt="md" mb="xs">
									<Text component="h3" fw={500}>
										{el.name}
									</Text>
								</Group>
								<Text size="sm" c="dimmed">
									{el.description}
								</Text>
								<Group grow>
									<Button
										color="blue.9"
										mt="md"
										radius="md"
										onClick={() => {
											navigate(`${el.moreInfo}`);
											window.scrollTo(0, 0);
										}}
									>
										{t("app.projects.more-info")}
									</Button>
									<Button
										color="blue.9"
										mt="md"
										radius="md"
										onClick={() => window.open(el.url, "_blank")}
									>
										{t("app.projects.website")}
									</Button>
								</Group>
							</Card>
						</Grid.Col>
					))}
				</Grid>
			</Container>
			<Space h="xl" />
			<Divider my="md" />
			<Container size={"sm"}>
				<Title order={2} td={"underline"}>
					{t("app.projects.title-2")}
				</Title>
				<Grid>
					{listProjectsOldWork.map((el, index) => (
						<Grid.Col span={{ base: 12, md: 6, lg: 6 }} key={index}>
							<Card shadow="sm" padding="lg" radius="md" withBorder>
								<Card.Section>
									<Image src={el.image} height={160} alt="Norway" />
								</Card.Section>
								<Group justify="space-between" mt="md" mb="xs">
									<Text component="h3" fw={500}>
										{el.name}
									</Text>
								</Group>
								<Text size="sm" c="dimmed">
									{el.description}
								</Text>
								<Group grow>
									<Button
										color="blue.9"
										mt="md"
										radius="md"
										onClick={() => {
											navigate(`${el.moreInfo}`);
											window.scrollTo(0, 0);
										}}
									>
										{t("app.projects.more-info")}
									</Button>
									{el.url && (
										<Button
											color="blue.9"
											mt="md"
											radius="md"
											onClick={() => window.open(el.url, "_blank")}
										>
											{t("app.projects.website")}
										</Button>
									)}
								</Group>
							</Card>
						</Grid.Col>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Projects;
