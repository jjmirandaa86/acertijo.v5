import { useEffect, useState } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { ActionIcon, Select } from "@mantine/core";
type languageOption = { language: string; code: string; flag: string };

const languageOptions: languageOption[] = [
	{ language: "English", code: "en", flag: "🇺🇸" },
	{ language: "Spanish", code: "es", flag: "🇪🇸" },
];

const LanguageSelector = () => {
	// Set the initial language from i18next's detected or default language
	const [language, setLanguage] = useState(i18next.language);

	const { i18n } = useTranslation();

	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedLanguage = e.target.value;
		setLanguage(selectedLanguage);
		i18next.changeLanguage(selectedLanguage); // Update language in i18next
	};

	useEffect(() => {
		document.body.dir = i18n.dir(); //sets the body to ltr or rtl
	}, [i18n, i18n.language]);

	return (
		<>
			<select
				id="language"
				value={language}
				onChange={handleLanguageChange}
				style={{ height: "40px" }}
			>
				{languageOptions.map(({ language, code, flag }, key) => (
					<option value={code} key={key}>
						{flag}
					</option>
				))}
			</select>
		</>
	);
};

export default LanguageSelector;

//<ActionIcon size={40} radius="md" color="blue.9" title="Toggle color scheme"></ActionIcon>
