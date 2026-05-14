import React from "react";
import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { Button, ActionIcon } from "@mantine/core";
import { useMantineColorScheme } from "@mantine/core";
import { useTranslation } from "react-i18next";

const Mode = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const { t } = useTranslation();
  const dark = colorScheme === "dark";
  return (
    <>
      <ActionIcon
        size="lg"
        radius="xl"
        color="blue"
        onClick={() => toggleColorScheme()}
        title={t("app.general.mode.title")}
      >
        {dark ? <IoSunny /> : <MdDarkMode />}
      </ActionIcon>
    </>
  );
};

export default Mode;
