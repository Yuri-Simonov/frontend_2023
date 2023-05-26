import { useTranslation } from "react-i18next";

const AboutPage = () => {
	// в параметры хука передается значение, которое равно имени файла локализации (about = about.json). Если ничего в хук не передать, то по умолчанию будет использоваться translation (= translation.json)
	const { t } = useTranslation("about");

	return <h1>{t("О сайте")}</h1>;
};

export default AboutPage;
