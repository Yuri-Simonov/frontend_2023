import { Counter } from "entities/Counter";
import { useTranslation } from "react-i18next";

const MainPage = () => {
    const { t } = useTranslation();

    return (
        <h1>
            {t("Главная страница", { ns: "translation" })}
            <Counter />
        </h1>
    );
};

export default MainPage;
