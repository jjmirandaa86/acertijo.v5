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
import { GrCertificate } from "react-icons/gr";
import { FaUserGraduate } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";

import HeadPage from "./Home/HeadPage";

const Certificate = () => {
	const isMobile = useMediaQuery("(max-width: 30.25em)");
	const navigate = useNavigate();
	const [gridValue, setGridValue] = useState(7);

	const listCertificate = [
		{
			id: 1,
			type: "Certificate",
			name: "Mobile application development",
			year: 2016,
			country: "Guayaquil, 🇪🇨",
			where: "Espol (Cisco)",
			description:
				"Design, development, life cycle of native Android applications.",
			linkImage: "/assets/pdf/certificates/Certificate-Android.pdf",
			icoImage: null,
			visible: true,
			stars: 5,
		},
		{
			id: 2,
			type: "Grade",
			name: "Bachelor",
			year: 2003,
			country: "Guayaquil, 🇪🇨",
			where: "Leonidas Garcia",
			description: "Bachelor of Mathematical and Physical Sciences",
			linkImage:
				"/assets/pdf/certificates/Certificate-Bachiller-Fisico-Matematico.pdf",
			icoImage: <FaUserGraduate size={40} color="#2D3E55" />,
			visible: true,
			stars: 5,
		},
		{
			id: 3,
			type: "Certificate",
			name: "Business Intelligence",
			year: 2015,
			country: "Guayaquil, 🇪🇨",
			where: "Capacites (Technological Espiritu Santo)",
			description:
				"Analyzing, presenting data to support better business decision-making",
			linkImage: "/assets/pdf/certificates/Certificate-BusinessInteligent.pdf",
			icoImage: null,
			visible: true,
			stars: 4,
		},
		{
			id: 4,
			type: "Certificate",
			name: "Demand Planing",
			year: 2016,
			country: "Guayaquil, 🇪🇨",
			where: "CBC University (Tesalia)",
			description:
				"Analyze, anticipate and plan future demand for your products or services.",
			linkImage: "/assets/pdf/certificates/Certificate-DemandPlaning.pdf",
			icoImage: null,
			visible: true,
			stars: 3,
		},
		{
			id: 5,
			type: "Certificate",
			name: "Active Directory",
			year: 2016,
			country: "Guayaquil, 🇪🇨",
			where: "IT training",
			description:
				"Installing and Configuring Active Directory Policies - Windows Server 2016",
			linkImage: "/assets/pdf/certificates/Certificate-ADWS2016.pdf",
			icoImage: null,
			visible: true,
			stars: 4,
		},
		{
			id: 6,
			type: "Certificate",
			name: "ITIL Fundamentals",
			year: 2018,
			country: "Guayaquil, 🇪🇨",
			where: "Genial Ecuador",
			description: "Information Technology Infrastructure Library",
			linkImage: "/assets/pdf/certificates/Certificate-ItilsFundaments.pdf",
			icoImage: null,
			visible: true,
			stars: 4,
		},
		{
			id: 6,
			type: "Grade",
			name: "Computer systems engineer",
			year: 2010,
			country: "Guayaquil, 🇪🇨",
			where: "Guayaquil University",
			description: "Degree in computer systems engineering",
			linkImage: "/assets/pdf/certificates/Certificate-SENESCYT.pdf",
			icoImage: <FaUserGraduate size={40} color="#2D3E55" />,
			visible: true,
			stars: 5,
		},
		{
			id: 7,
			type: "Certificate",
			name: "Tester",
			year: 2018,
			country: "Guayaquil, 🇪🇨",
			where: "Carlos Slim Foundation",
			description: "Making practice in tester",
			linkImage: "/assets/pdf/certificates/Certificate-Tester.pdf",
			icoImage: null,
			visible: true,
			stars: 4,
		},
		{
			id: 8,
			type: "Certificate",
			name: "Cloud Computing",
			year: 2024,
			country: "Australia, 🇦🇺",
			where: "Tafe NSW",
			description: "Cloud Computing",
			linkImage: "/assets/pdf/certificates/Certificate-CloudComputing-TafeNSW.pdf",
			icoImage: null,
			visible: true,
			stars: 5,
		},
		{
			id: 9,
			type: "Certificate",
			name: "English",
			year: 2024,
			country: "Australia, 🇦🇺",
			where: "ILSC ",
			description: "Got level Upper Intermediate in ILSC Language Schools",
			linkImage: "/assets/pdf/certificates/Diploma-ILSC.pdf",
			icoImage: null,
			visible: true,
			stars: 5,
		},
		{
			id: 10,
			type: "Diploma",
			name: "FrondEnd/BackEnd",
			year: 2025,
			country: "Australia, 🇦🇺",
			where: "Laneway",
			description:
				"Taking this course to improve my language skills and at the same time learn about new technologies.",
			linkImage: "",
			icoImage: <GiGraduateCap size={40} color="#2D3E55" />,
			visible: true,
			stars: 5,
		},
	];

	const listCertificates = listCertificate
		.filter((el) => el.visible === true)
		.sort((a, b) => b.year - a.year);

	return (
		<div>
			<HeadPage isMobile={isMobile} />
			<Space h="xl" />
			<Title order={1} style={{ display: "none" }}>
				Jefferson Miranda
			</Title>
			<Container size={"sm"}>
				<Title order={2} td={"underline"}>
					Certificates
				</Title>
				<Space h="sm" />
				<Grid>
					{listCertificates.map((el) => (
						<Grid.Col span={{ base: 12, md: 12, lg: 12 }}>
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
										<Grid.Col span={{ base: 2, md: 1, lg: 1 }}>{el.icoImage}</Grid.Col>
									) : (
										""
									)}
									<Grid.Col span="auto">
										<Text size="sm" c="dimmed">
											{`${el.where} in ${el.country}`}
										</Text>
										<Text size="sm" c="dimmed">
											{el.description}
										</Text>
									</Grid.Col>
									<Grid.Col span={3}>
										<Group grow>
											{el.linkImage === "" ? (
												<Center>In progress</Center>
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
