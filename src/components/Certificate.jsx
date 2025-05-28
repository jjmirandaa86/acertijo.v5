import React, { useState } from "react";
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
	Center,
	Rating,
	Flex,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { GrCertificate } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";

import HeadPage from "./Home/HeadPage";

const Certificate = () => {
	const isMobile = useMediaQuery("(max-width: 30.25em)");
	const navigate = useNavigate();
	const [gridValue, setGridValue] = useState(7);
	const { t, i18n } = useTranslation();
	const currentLanguage = i18n.language;

	const listCertificate = [
		{
			id: t("app.certificate.list.certificate-1.id"),
			type: t("app.certificate.list.certificate-1.type"),
			name: t("app.certificate.list.certificate-1.name"),
			year: t("app.certificate.list.certificate-1.year"),
			country: t("app.certificate.list.certificate-1.country"),
			where: t("app.certificate.list.certificate-1.where"),
			description: t("app.certificate.list.certificate-1.description"),
			linkImage: t("app.certificate.list.certificate-1.linkImage"),
			icoImage: t("app.certificate.list.certificate-1.icoImage"),
			visible: t("app.certificate.list.certificate-1.visible"),
			stars: t("app.certificate.list.certificate-1.stars"),
		},
		{
			id: t("app.certificate.list.certificate-2.id"),
			type: t("app.certificate.list.certificate-2.type"),
			name: t("app.certificate.list.certificate-2.name"),
			year: t("app.certificate.list.certificate-2.year"),
			country: t("app.certificate.list.certificate-2.country"),
			where: t("app.certificate.list.certificate-2.where"),
			description: t("app.certificate.list.certificate-2.description"),
			linkImage: t("app.certificate.list.certificate-2.linkImage"),
			icoImage: <FaUserGraduate size={40} color="#2D3E55" />,
			visible: t("app.certificate.list.certificate-2.visible"),
			stars: t("app.certificate.list.certificate-2.stars"),
		},
		{
			id: t("app.certificate.list.certificate-3.id"),
			type: t("app.certificate.list.certificate-3.type"),
			name: t("app.certificate.list.certificate-3.name"),
			year: t("app.certificate.list.certificate-3.year"),
			country: t("app.certificate.list.certificate-3.country"),
			where: t("app.certificate.list.certificate-3.where"),
			description: t("app.certificate.list.certificate-3.description"),
			linkImage: t("app.certificate.list.certificate-3.linkImage"),
			icoImage: t("app.certificate.list.certificate-3.icoImage"),
			visible: t("app.certificate.list.certificate-3.visible"),
			stars: t("app.certificate.list.certificate-3.stars"),
		},
		{
			id: t("app.certificate.list.certificate-4.id"),
			type: t("app.certificate.list.certificate-4.type"),
			name: t("app.certificate.list.certificate-4.name"),
			year: t("app.certificate.list.certificate-4.year"),
			country: t("app.certificate.list.certificate-4.country"),
			where: t("app.certificate.list.certificate-4.where"),
			description: t("app.certificate.list.certificate-4.description"),
			linkImage: t("app.certificate.list.certificate-4.linkImage"),
			icoImage: t("app.certificate.list.certificate-4.icoImage"),
			visible: t("app.certificate.list.certificate-4.visible"),
			stars: t("app.certificate.list.certificate-4.stars"),
		},
		{
			id: t("app.certificate.list.certificate-5.id"),
			type: t("app.certificate.list.certificate-5.type"),
			name: t("app.certificate.list.certificate-5.name"),
			year: t("app.certificate.list.certificate-5.year"),
			country: t("app.certificate.list.certificate-5.country"),
			where: t("app.certificate.list.certificate-5.where"),
			description: t("app.certificate.list.certificate-5.description"),
			linkImage: t("app.certificate.list.certificate-5.linkImage"),
			icoImage: t("app.certificate.list.certificate-5.icoImage"),
			visible: t("app.certificate.list.certificate-5.visible"),
			stars: t("app.certificate.list.certificate-5.stars"),
		},
		{
			id: t("app.certificate.list.certificate-6.id"),
			type: t("app.certificate.list.certificate-6.type"),
			name: t("app.certificate.list.certificate-6.name"),
			year: t("app.certificate.list.certificate-6.year"),
			country: t("app.certificate.list.certificate-6.country"),
			where: t("app.certificate.list.certificate-6.where"),
			description: t("app.certificate.list.certificate-6.description"),
			linkImage: t("app.certificate.list.certificate-6.linkImage"),
			icoImage: t("app.certificate.list.certificate-6.icoImage"),
			visible: t("app.certificate.list.certificate-6.visible"),
			stars: t("app.certificate.list.certificate-6.stars"),
		},
		{
			id: t("app.certificate.list.certificate-7.id"),
			type: t("app.certificate.list.certificate-7.type"),
			name: t("app.certificate.list.certificate-7.name"),
			year: t("app.certificate.list.certificate-7.year"),
			country: t("app.certificate.list.certificate-7.country"),
			where: t("app.certificate.list.certificate-7.where"),
			description: t("app.certificate.list.certificate-7.description"),
			linkImage: t("app.certificate.list.certificate-7.linkImage"),
			icoImage: t("app.certificate.list.certificate-7.icoImage"),
			visible: t("app.certificate.list.certificate-7.visible"),
			stars: t("app.certificate.list.certificate-7.stars"),
		},
		{
			id: t("app.certificate.list.certificate-8.id"),
			type: t("app.certificate.list.certificate-8.type"),
			name: t("app.certificate.list.certificate-8.name"),
			year: t("app.certificate.list.certificate-8.year"),
			country: t("app.certificate.list.certificate-8.country"),
			where: t("app.certificate.list.certificate-8.where"),
			description: t("app.certificate.list.certificate-8.description"),
			linkImage: t("app.certificate.list.certificate-8.linkImage"),
			icoImage: t("app.certificate.list.certificate-8.icoImage"),
			visible: t("app.certificate.list.certificate-8.visible"),
			stars: t("app.certificate.list.certificate-8.stars"),
		},
		{
			id: t("app.certificate.list.certificate-9.id"),
			type: t("app.certificate.list.certificate-9.type"),
			name: t("app.certificate.list.certificate-9.name"),
			year: t("app.certificate.list.certificate-9.year"),
			country: t("app.certificate.list.certificate-9.country"),
			where: t("app.certificate.list.certificate-9.where"),
			description: t("app.certificate.list.certificate-9.description"),
			linkImage: t("app.certificate.list.certificate-9.linkImage"),
			icoImage: t("app.certificate.list.certificate-9.icoImage"),
			visible: t("app.certificate.list.certificate-9.visible"),
			stars: t("app.certificate.list.certificate-9.stars"),
		},
		{
			id: t("app.certificate.list.certificate-10.id"),
			type: t("app.certificate.list.certificate-10.type"),
			name: t("app.certificate.list.certificate-10.name"),
			year: t("app.certificate.list.certificate-10.year"),
			country: t("app.certificate.list.certificate-10.country"),
			where: t("app.certificate.list.certificate-10.where"),
			description: t("app.certificate.list.certificate-10.description"),
			linkImage: t("app.certificate.list.certificate-10.linkImage"),
			icoImage: <GiGraduateCap size={40} color="#2D3E55" />,
			visible: t("app.certificate.list.certificate-10.visible"),
			stars: t("app.certificate.list.certificate-10.stars"),
		},
		{
			id: t("app.certificate.list.certificate-11.id"),
			type: t("app.certificate.list.certificate-11.type"),
			name: t("app.certificate.list.certificate-11.name"),
			year: t("app.certificate.list.certificate-11.year"),
			country: t("app.certificate.list.certificate-11.country"),
			where: t("app.certificate.list.certificate-11.where"),
			description: t("app.certificate.list.certificate-11.description"),
			linkImage: t("app.certificate.list.certificate-11.linkImage"),
			icoImage: <FaUserGraduate size={40} color="#2D3E55" />,
			visible: t("app.certificate.list.certificate-11.visible"),
			stars: t("app.certificate.list.certificate-11.stars"),
		},
	];

	const listCertificates = listCertificate
		//.filter((el) => el.visible === true)
		.sort((a, b) => b.year - a.year);

	return (
		<div>
			<HeadPage isMobile={isMobile} />
			<Space h="xl" />
			<Title order={1} style={{ display: "none" }}>
				{t("app.home.name")}
			</Title>
			<Container size={"sm"}>
				<Title order={2} td={"underline"}>
					{t("app.certificate.title")}
				</Title>
				<Space h="sm" />
				<Grid>
					{listCertificates.map((el, index) => (
						<Grid.Col span={{ base: 12, md: 12, lg: 12 }} key={index}>
							<Card key={el.id} shadow="sm" padding="lg" radius="md" withBorder>
								<Flex justify="space-between" align="center">
									<div>
										<Text component="h3" fw={500}>
											{`${el.year} - ${el.name} (${el.type})`}
										</Text>
									</div>
									<div>
										<Rating defaultValue={el.stars} readOnly />
									</div>
								</Flex>
								<Space h="sm" />
								<Grid>
									{el.icoImage !== null ? (
										<Grid.Col span={{ base: 2, md: 1, lg: 1 }}>
											{el.icoImage === "null" ? "" : el.icoImage}
										</Grid.Col>
									) : (
										""
									)}
									<Grid.Col span="auto">
										<Text size="sm" c="dimmed">
											{`${el.where} ${currentLanguage === "es" ? "en" : ""} ${
												currentLanguage === "en" ? "in" : ""
											} ${el.country}`}
										</Text>
										<Text size="sm" c="dimmed">
											{el.description}
										</Text>
									</Grid.Col>
									<Grid.Col span={3}>
										<Group grow>
											{el.linkImage === "" ? (
												<Center>{t("app.certificate.status-in-progress")}</Center>
											) : (
												<Button
													color="blue.9"
													mt="md"
													radius="md"
													onClick={() => window.open(el.linkImage, "_blank")}
												>
													<GrCertificate />
												</Button>
											)}
										</Group>
									</Grid.Col>
								</Grid>
							</Card>
						</Grid.Col>
					))}
				</Grid>
			</Container>
		</div>
	);
};

export default Certificate;
