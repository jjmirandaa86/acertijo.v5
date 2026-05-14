import { useEffect, useState } from "react";
import { Select } from "@mantine/core";
import { useTranslation } from "react-i18next";

type LanguageOption = {
  language: string;
  code: string;
  flag: string;
};

const languageOptions: LanguageOption[] = [
  { language: "English", code: "en", flag: "🇺🇸" },
  { language: "Spanish", code: "es", flag: "🇪🇸" },
];

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const [language, setLanguage] = useState(i18n.language || "en");

  const data = languageOptions.map(({ language, code, flag }) => ({
    value: code,
    label: flag,
    description: language,
  }));

  const handleLanguageChange = (value: string | null) => {
    if (!value) return;

    setLanguage(value);
    i18n.changeLanguage(value);
    localStorage.setItem("language", value);
  };

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <Select
      value={language}
      onChange={handleLanguageChange}
      data={data}
      size="xs"
      w={72}
      variant="subtle"
      radius="xl"
      checkIconPosition="right"
      allowDeselect={false}
      comboboxProps={{
        width: 120,
        position: "bottom-end",
      }}
      styles={{
        input: {
          border: "none",
          paddingLeft: 8,
          paddingRight: 8,
          fontSize: 18,
          background: "transparent",
          cursor: "pointer",
        },
        dropdown: {
          minWidth: 100,
        },
        option: {
          fontSize: 16,
        },
      }}
    />
  );
};

export default LanguageSelector;
