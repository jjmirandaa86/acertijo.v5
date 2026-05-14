import React from "react";
import { Group, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Slogan = ({ dark }) => {
  const { t } = useTranslation();
  return (
    <div>
      {" "}
      <Group justify="space-between" wrap="wrap">
        <Text size="sm" c={dark ? "#64748b" : "#64748b"}>
          {t("app.footer.slogan.title")}
        </Text>

        <Text size="sm" fs="italic" c={dark ? "#64748b" : "#64748b"}>
          {t("app.footer.slogan.description")}
        </Text>
      </Group>
    </div>
  );
};

export default Slogan;
