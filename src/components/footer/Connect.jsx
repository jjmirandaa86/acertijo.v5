import React from "react";
import { Stack, Text, Group, ActionIcon } from "@mantine/core";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Connect = ({ dark }) => {
  const { t } = useTranslation();
  return (
    <>
      <Stack gap={12}>
        <Text fw={600} c={dark ? "#f8fafc" : "#0f172a"}>
          {t("app.footer.connect.title")}
        </Text>

        <Group>
          <ActionIcon size="lg" radius="xl" color="blue">
            <a
              href={t("app.footer.connect.gibhub.link")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={18} color="white" />
            </a>
          </ActionIcon>

          <ActionIcon size="lg" radius="xl" color="blue">
            <a
              href={t("app.footer.connect.linkedin.link")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={18} color="white" />
            </a>
          </ActionIcon>

          <ActionIcon size="lg" radius="xl" color="blue">
            <a
              href={t("app.footer.connect.email.link")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope size={18} color="white" />
            </a>
          </ActionIcon>
        </Group>
      </Stack>
    </>
  );
};

export default Connect;
