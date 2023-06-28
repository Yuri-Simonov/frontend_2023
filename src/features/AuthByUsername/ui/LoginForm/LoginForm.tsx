import { classNames } from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useState } from "react";

interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const [value, setValue] = useState("");

    const onChange = (value: string) => {
        setValue(value);
    };

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input
                type="text"
                className={cls.input}
                label={t("Введите логин", { ns: "translation" })}
            />
            <Input
                type="password"
                className={cls.input}
                label={t("Введите пароль", { ns: "translation" })}
            />
            <Button className={cls.loginBtn}>
                {t("Войти", { ns: "translation" })}
            </Button>
        </div>
    );
};
