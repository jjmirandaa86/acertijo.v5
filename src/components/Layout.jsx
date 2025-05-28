import React from "react";
import {
	AppShell,
	Burger,
	Group,
	UnstyledButton,
	Container,
	Space,
	BackgroundImage,
	Center,
	Card,
	Text,
	Box,
} from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useDisclosure } from "@mantine/hooks";
import { useNavigate } from "react-router-dom";

import { Outlet } from "react-router-dom";
import { Button } from "@mantine/core";
import Mode from "../components/menu/Mode";
import MenuOptions from "../components/menu/MenuOptions";
import Logo from "../components/menu/Logo";
import Footer from "../components/footer/Footer";

import Home from "../components/Home";
import Aurora from "./ReactBits/Aurora";
import { Color } from "ogl";
import { useMantineColorScheme, ActionIcon } from "@mantine/core";

import { GrProjects } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { SiReaddotcv } from "react-icons/si";
import { FaHome } from "react-icons/fa";

import MenuOptionsMobile from "./menu/MenuOptionsMobile";
import LanguageSelector from "./Language/LanguageSelector";

const Layout = () => {
	const navigate = useNavigate();
	const [opened, { toggle }] = useDisclosure();
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	const { t } = useTranslation();

	//I link Intern, E Link External
	const list = [
		{
			id: 0,
			name: t("app.general.menu.main.label"),
			link: "/",
			ico: <FaHome />,
			typeLink: "I",
			visibleMenuMain: "N",
			visibleMenuMobile: "Y",
		},
		{
			id: 1,
			name: t("app.general.menu.projects.label"),
			link: "/projects",
			ico: <GrProjects />,
			typeLink: "I",
			visibleMenuMain: "Y",
			visibleMenuMobile: "Y",
		},
		{
			id: 2,
			name: t("app.general.menu.contact.label"),
			link: "/contact",
			ico: <IoMdMail />,
			typeLink: "I",
			visibleMenuMain: "Y",
			visibleMenuMobile: "Y",
		},
		{
			id: 3,
			name: t("app.general.menu.gibhub.label"),
			link: "https://github.com/jjmirandaa86",
			ico: <FaGithub />,
			typeLink: "E",
			visibleMenuMain: "Y",
			visibleMenuMobile: "Y",
		},
		{
			id: 4,
			name: t("app.general.menu.cv.label"),
			link: "https://acertijo.dev/assets/pdf/CV-Jefferson Miranda.pdf",
			ico: <SiReaddotcv />,
			typeLink: "C",
			visibleMenuMain: "Y",
			visibleMenuMobile: "Y",
		},
	];

	return (
		<>
			<AppShell
				header={{ height: 80 }}
				navbar={{
					width: 280,
					breakpoint: "sm",
					collapsed: { desktop: true, mobile: !opened },
				}}
				//padding="md"
			>
				<AppShell.Header>
					<Container size="md">
						<Space h="md" />
						<Group h="100%" px="md">
							<Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
							<Group justify="space-between" style={{ flex: 1 }}>
								<div
									onClick={() => {
										navigate("/");
										window.scrollTo(0, 0);
									}}
								>
									<Logo width={180} />
								</div>
								<Group ml="xl" gap={0} visibleFrom="sm">
									<MenuOptions list={list} />
								</Group>
							</Group>
							<Mode />
							<LanguageSelector />
						</Group>
						<Space h="md" />
					</Container>
				</AppShell.Header>
				<AppShell.Navbar py="md" px={4}>
					<AppShell.Section>
						<div style={{ padding: 20 }}>
							<Text fw={700}>{t("app.general.menu.slice.title")} </Text>
						</div>
					</AppShell.Section>
					<AppShell.Section grow my="md">
						<MenuOptionsMobile list={list} toggle={toggle} type={"I"} />
					</AppShell.Section>
					<AppShell.Section>
						<MenuOptionsMobile list={list} toggle={toggle} type={"E"} />
					</AppShell.Section>
				</AppShell.Navbar>
				<AppShell.Main>
					<div
						style={{
							background: dark
								? "radial-gradient( ellipse at center, rgb(46, 46, 46) 0%, rgb(57, 57, 57) 20%,rgb(0, 0, 0) 100%)"
								: "radial-gradient( ellipse at center, rgb(255, 255, 255) 0%, rgba(255, 254, 234, 1) 70%,rgb(133, 133, 133) 100%)",
						}}
					>
						<Outlet />
						<Footer />
					</div>
				</AppShell.Main>
			</AppShell>
		</>
	);
};

export default Layout;
