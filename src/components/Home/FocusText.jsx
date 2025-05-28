import React from "react";
import { useTranslation } from "react-i18next";

import TrueFocus from "../ReactBits/TrueFocus";

const FocusText = () => {
	const { t } = useTranslation();

	return (
		<div>
			<TrueFocus
				sentence={t("app.home.type-services")}
				manualMode={false}
				blurAmount={5}
				borderColor={"rgba(27, 139, 179, 1)"}
				glowColor={"rgba(27, 139, 179, 1)"}
				animationDuration={1}
				pauseBetweenAnimations={2}
			/>
		</div>
	);
};

export default FocusText;
