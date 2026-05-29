import { useState } from "react";
import {
  Button,
  Box,
  Paper,
  Stack,
  Text,
  TextInput,
  Textarea,
  Title,
  Notification,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaUser,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";
import { useMediaQuery } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import HeadPage from "./Home/HeadPage";
import { Space, Container } from "@mantine/core";
import ShinyText from "./ReactBits/ShinyText";
import { sendEmail } from "../api/sendEmail";

function getErrorMessage(error, fallback) {
  if (error.response?.data?.message) {
    return error.response.data.message;
  }

  if (!error.response) {
    return fallback;
  }

  return fallback;
}

export default function Contact() {
  const isMobile = useMediaQuery("(max-width: 30.25em)");
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    validate: {
      name: (value) => (value.trim().length < 2 ? "Name is too short" : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      message: (value) =>
        value.trim().length < 10
          ? "Message must have at least 10 characters"
          : null,
    },
  });

  const handleSubmit = async (values) => {
    console.log("---------first");
    setLoading(true);
    setSuccess(false);
    setError("");

    console.log(values);
    try {
      await sendEmail(values);
      setSuccess(true);
      form.reset();
    } catch (err) {
      console.error(err);
      setError(getErrorMessage(err, t("app.contact.message-error")));
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {<HeadPage isMobile={isMobile} />}
      <Container size={"sm"}>
        <Box
          pt="xl"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Paper shadow="lg" radius="lg" p="xl" w="100%" maw={500} withBorder>
            <Title order={2} td={"underline"}>
              {t("app.contact.title")}
            </Title>
            <Text c="dimmed" size="sm" mb="lg">
              {t("app.contact.description")}
            </Text>

            {success && (
              <Notification
                icon={<FaCheckCircle size={18} />}
                color="green"
                mb="md"
                withCloseButton
                onClose={() => setSuccess(false)}
              >
                {t("app.contact.message-success")}
              </Notification>
            )}

            {error && (
              <Notification
                icon={<FaTimesCircle size={18} />}
                color="red"
                mb="md"
                withCloseButton
                onClose={() => setError("")}
              >
                {error}
              </Notification>
            )}

            <form onSubmit={form.onSubmit(handleSubmit)}>
              <Stack>
                <TextInput
                  label={t("app.contact.name")}
                  placeholder={t("app.contact.name-placeholder")}
                  leftSection={<FaUser size={14} />}
                  withAsterisk
                  {...form.getInputProps("name")}
                />

                <TextInput
                  label={t("app.contact.email")}
                  placeholder={t("app.contact.email-placeholder")}
                  leftSection={<FaEnvelope size={14} />}
                  withAsterisk
                  {...form.getInputProps("email")}
                />

                <Textarea
                  label={t("app.contact.message")}
                  placeholder={t("app.contact.message-placeholder")}
                  minRows={5}
                  withAsterisk
                  {...form.getInputProps("message")}
                />

                <Button
                  color="blue.9"
                  ta={"center"}
                  mt="md"
                  size="md"
                  radius="md"
                  type="submit"
                  loading={loading}
                  leftSection={<FaPaperPlane size={14} />}
                  fullWidth
                >
                  <ShinyText
                    text={t("app.contact.send")}
                    disabled={false}
                    speed={3}
                    className="custom-class"
                  />
                </Button>
              </Stack>
            </form>
          </Paper>
        </Box>
      </Container>
      <Space h="xl" />
    </>
  );
}
