import React from "react";
import { Stack, Text, Anchor } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const Navegation = ({ dark }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <>
      <Stack gap={10}>
        <Text fw={600} c={dark ? "#f8fafc" : "#0f172a"}>
          {t("app.footer.navegation.title")}
        </Text>

        <Anchor
          c={dark ? "#94a3b8" : "#475569"}
          underline="never"
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          {t("app.footer.navegation.home")}
        </Anchor>
        <Anchor
          c={dark ? "#94a3b8" : "#475569"}
          underline="never"
          onClick={() => {
            navigate("/projects");
            window.scrollTo(0, 0);
          }}
        >
          {t("app.footer.navegation.projects")}
        </Anchor>

        <Anchor
          c={dark ? "#94a3b8" : "#475569"}
          underline="never"
          onClick={() => {
            navigate("/contact");
            window.scrollTo(0, 0);
          }}
        >
          {t("app.footer.navegation.contact")}
        </Anchor>
      </Stack>
    </>
  );
};

export default Navegation;
