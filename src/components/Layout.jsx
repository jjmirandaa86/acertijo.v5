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

const Layout = () => {
	const navigate = useNavigate();
	const [opened, { toggle }] = useDisclosure();
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";

	//I link Intern, E Link External
	const list = [
		{
			id: 0,
			name: "Main",
			link: "/",
			ico: <FaHome />,
			typeLink: "I",
			visibleMenuMain: "N",
			visibleMenuMobile: "Y",
		},
		{
			id: 1,
			name: "Projects",
			link: "/projects",
			ico: <GrProjects />,
			typeLink: "I",
			visibleMenuMain: "Y",
			visibleMenuMobile: "Y",
		},
		{
			id: 2,
			name: "Contact",
			link: "/contact",
			ico: <IoMdMail />,
			typeLink: "I",
			visibleMenuMain: "Y",
			visibleMenuMobile: "Y",
		},
		{
			id: 3,
			name: "GitHub",
			link: "https://github.com/jjmirandaa86",
			ico: <FaGithub />,
			typeLink: "E",
			visibleMenuMain: "Y",
			visibleMenuMobile: "Y",
		},
		{
			id: 4,
			name: "CV",
			link: "https://acertijo.dev/assets/pdf/CV-Jefferson Miranda.pdf",
			ico: <SiReaddotcv />,
			typeLink: "E",
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
						</Group>
						<Space h="md" />
					</Container>
				</AppShell.Header>
				<AppShell.Navbar py="md" px={4}>
					<AppShell.Section>
						<div style={{ padding: 20 }}>
							<Text fw={700}>Menu</Text>
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
