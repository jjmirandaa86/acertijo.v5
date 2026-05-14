import React from "react";
import { Stack, Text, Group } from "@mantine/core";
import { FaReact, FaNodeJs, FaDocker } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const TechStack = ({ dark }) => {
  const { t } = useTranslation();
  return (
    <>
      <Stack gap={10}>
        <Text fw={600} c={dark ? "#f8fafc" : "#0f172a"}>
          {t("app.footer.tech.title")}
        </Text>

        <Group gap={10}>
          <FaReact color="#61dafb" />
          <Text size="sm" c={dark ? "#94a3b8" : "#475569"}>
            {t("app.footer.tech.language1")}
          </Text>
        </Group>

        <Group gap={10}>
          <FaNodeJs color="#68a063" />
          <Text size="sm" c={dark ? "#94a3b8" : "#475569"}>
            {t("app.footer.tech.language2")}
          </Text>
        </Group>

        <Group gap={10}>
          <FaDocker color="#2496ed" />
          <Text size="sm" c={dark ? "#94a3b8" : "#475569"}>
            {t("app.footer.tech.language3")}
          </Text>
        </Group>
      </Stack>
    </>
  );
};

export default TechStack;
