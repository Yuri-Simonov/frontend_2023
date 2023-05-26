import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface LangSwitcherProps {
	className?: string;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
	const { className } = props;

	const { t, i18n } = useTranslation();

	function toggleLang() {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	}

	return (
		<div className={classNames(cls.langSwitcher, {}, [className])}>
			<Button theme={ThemeButton.CLEAR} onClick={toggleLang}>
				{t("Язык")}
			</Button>
		</div>
	);
};
