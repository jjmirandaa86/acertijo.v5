import React from "react";
import { Stack, Text } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Brand = ({ dark }) => {
  const { t } = useTranslation();

  return (
    <>
      <Stack gap={8} maw={320}>
        <Text
          fw={700}
          size="xl"
          style={{
            color: dark ? "#f8fafc" : "#0f172a",
            letterSpacing: 1,
          }}
        >
          {t("app.footer.brand.title")}
        </Text>

        <Text size="sm" c={dark ? "#94a3b8" : "#475569"} lh={1.7}>
          {t("app.footer.brand.description")}
        </Text>

        <Text
          size="xs"
          style={{
            color: "#22c55e",
            marginTop: 10,
          }}
        >
          {t("app.footer.brand.available")}
        </Text>
      </Stack>
    </>
  );
};

export default Brand;
