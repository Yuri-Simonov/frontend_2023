import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ButtonTheme } from "shared/ui/Button/Button";

interface LangSwitcherProps {
    className?: string;
    short?: boolean;
}

export const LangSwitcher: React.FC<LangSwitcherProps> = (props) => {
    const { className, short } = props;

    const { t, i18n } = useTranslation();

    function toggleLang() {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    }

    return (
        <div className={classNames("", {}, [className])}>
            <Button theme={ButtonTheme.CLEAR} onClick={toggleLang}>
                {t(short ? "Короткий язык" : "Язык")}
            </Button>
        </div>
    );
};
