import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
    className?: string;
}

export const Sidebar: React.FC<SidebarProps> = (props) => {
    const { className } = props;
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

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
            <button data-testid="toggle-sidebar" onClick={onToggle}>
                {t('Toggle', { ns: 'translation' })}
            </button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    );
};
