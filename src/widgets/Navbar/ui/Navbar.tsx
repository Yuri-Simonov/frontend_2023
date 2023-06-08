/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">
                {t('Main', { ns: 'translation' })}
            </AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to="/about">
                {t('About', { ns: 'translation' })}
            </AppLink>
        </div>
    );
};
