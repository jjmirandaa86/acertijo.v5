import React, { useState } from "react";
import axios from "axios";
import {
	TextInput,
	Textarea,
	Button,
	Group,
	Title,
	Notification,
	Space,
	Card,
	Grid,
	Container,
	Image,
	Text,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useMantineColorScheme } from "@mantine/core";
import HeadPage from "./Home/HeadPage";
import { useForm } from "@mantine/form";
import { IoIosMail } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { VscError } from "react-icons/vsc";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMailOutline } from "react-icons/md";

import WhatsappAustralia from "../assets/svg/whatsappAustralia.svg";

const Contact = () => {
	const isMobile = useMediaQuery("(max-width: 30.25em)");
	const { colorScheme } = useMantineColorScheme();
	const dark = colorScheme === "dark";
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const [showError, setShowError] = useState(false);
	const phoneNumber = "(+51) 0423 775 180",
		email = "jjmirandaa86@gmail.com",
		sendMessageWhatsapp =
			"https://wa.me/+51423775180?text=Hello,+I+would+like+to+contact+you.+Thank+you";

	const form = useForm({
		initialValues: {
			email: "",
			subject: "",
			message: "",
		},

		validate: {
			email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid Email"),
			subject: (value) =>
				value.trim().length < 3 ? "Need a subject, more 3 letters" : null,
			message: (value) =>
				value.trim().length < 10 ? "Short message, more 3 words." : null,
		},
	});

	const handleSubmit = async (values) => {
		setIsSubmitting(true);
		setShowSuccess(false);
		setShowError(false);

		let parameters = {
			email: "",
			password: "",
		};
		axios
			.post("php/sendMail.php", parameters)
			.then((response) => console.log(response))
			.catch((error) => console.error(error));

		try {
			// Aquí iría tu lógica para enviar el formulario
			console.log("Datos del formulario:", values);
			// Simulamos un retraso de red
			await new Promise((resolve) => setTimeout(resolve, 1500));

			setShowSuccess(true);
			form.reset();
		} catch (error) {
			console.error("Error al enviar el formulario:", error);
			setShowError(true);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<>
			<HeadPage isMobile={isMobile} />
			<Space h="md" />
			<Container size={"sm"}>
				<Space h="md" />
				<Grid grow gutter="xs">
					<Grid.Col style={{ display: "none" }} span={{ base: 12, md: 6, lg: 6 }}>
						<Card shadow="xl">
							<Space h="md" />

							<Title td={"underline"} order={2} mb="xl">
								Contact Form
							</Title>

							{showSuccess && (
								<Notification
									icon={<FaCheckCircle />}
									color="teal"
									title="Success"
									mb="md"
									onClose={() => setShowSuccess(false)}
								>
									Your message was sent.
								</Notification>
							)}

							{showError && (
								<Notification
									icon={<VscError />}
									color="red"
									title="Error"
									mb="md"
									onClose={() => setShowError(false)}
								>
									We had a problem. Please try one more time.
								</Notification>
							)}

							<form onSubmit={form.onSubmit(handleSubmit)}>
								<TextInput
									withAsterisk
									label="Email"
									placeholder="your@email.com"
									leftSection={<IoIosMail />}
									{...form.getInputProps("email")}
									mb="md"
								/>

								<TextInput
									withAsterisk
									label="Subject"
									placeholder="¿What do you want me to talk?"
									{...form.getInputProps("subject")}
									mb="md"
								/>

								<Textarea
									withAsterisk
									label="Message"
									placeholder="Write you message here..."
									{...form.getInputProps("message")}
									mb="md"
									minRows={2}
									maxRows={4}
									resize="vertical"
								/>

								<Group justify="flex-end">
									<Button
										type="submit"
										leftSection={<IoMdSend />}
										loading={isSubmitting}
										disabled={isSubmitting}
									>
										{isSubmitting ? "Sending..." : "Send Message"}
									</Button>
								</Group>
							</form>
						</Card>
					</Grid.Col>
					<Grid.Col span={{ base: 1, md: 2, lg: 2 }}></Grid.Col>
					<Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
						<Container>
							<div>
								<a href={`tel:${phoneNumber.trim()}`}>
									<Space h="xl" />
									<Grid grow justify="center" align="center">
										<Grid.Col span={{ base: 2, md: 2, lg: 2 }}>
											<FiPhoneCall color={dark ? "white" : "black"} size={50} />
										</Grid.Col>
										<Grid.Col span={{ base: 9, md: 9, lg: 9 }}>
											<Button
												fullWidth
												size="xl"
												color="blue.9"
												variant="light"
												style={{ padding: 0, margin: 0 }}
											>
												<Text>
													<Text fw={700}>Phone Number:</Text>
													<div style={{ padding: 4 }}>{phoneNumber.trim()}</div>
												</Text>
											</Button>
										</Grid.Col>
									</Grid>
								</a>
							</div>
							<div>
								<a href={`mailto:${email.trim()}`}>
									<Space h="xl" />
									<Grid grow justify="center" align="center">
										<Grid.Col span={{ base: 2, md: 2, lg: 2 }}>
											<MdOutlineMailOutline color={dark ? "white" : "black"} size={50} />
										</Grid.Col>
										<Grid.Col span={{ base: 9, md: 9, lg: 9 }}>
											<Button
												fullWidth
												size="xl"
												color="blue.9"
												variant="light"
												style={{ padding: 0, margin: 0 }}
											>
												<Text>
													<Text fw={700}>Email:</Text>
													<div style={{ padding: 4 }}>{email.trim()}</div>
												</Text>
											</Button>
										</Grid.Col>
									</Grid>
								</a>
							</div>
							<div>
								<div onClick={() => window.open(sendMessageWhatsapp, "_blank")}>
									<Space h="xl" />
									<Grid grow justify="center" align="center">
										<Grid.Col span={{ base: 2, md: 2, lg: 2 }}>
											<FaWhatsapp color={dark ? "white" : "black"} size={50} />
										</Grid.Col>
										<Grid.Col span={{ base: 9, md: 9, lg: 9 }}>
											<Image
												fit="contain"
												src={WhatsappAustralia}
												height={140}
												width={50}
											></Image>
										</Grid.Col>
									</Grid>
								</div>
							</div>
						</Container>
					</Grid.Col>
					<Grid.Col span={{ base: 1, md: 2, lg: 2 }}></Grid.Col>
				</Grid>
			</Container>
		</>
	);
};

export default Contact;
