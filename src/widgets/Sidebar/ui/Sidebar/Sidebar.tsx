import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { classNames } from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { LangSwitcher } from "shared/ui/LangSwitcher/LangSwitcher";
import { useTranslation } from "react-i18next";
import { Button, ButtonSize, ButtonTheme } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routerConfig/routerConfig";
import AboutIcon from "shared/assets/icons/about.svg";
import HomeIcon from "shared/assets/icons/home.svg";

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(true);

    function onToggle(): void {
        setCollapsed(!collapsed);
    }

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <HomeIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t("Main", { ns: "translation" })}
                    </span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>
                        {t("About", { ns: "translation" })}
                    </span>
                </AppLink>
            </div>
            <Button
                data-testid="toggle-sidebar"
                onClick={onToggle}
                className={cls.collapseBtn}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? ">" : "<"}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher short={collapsed} />
            </div>
        </div>
    );
};
