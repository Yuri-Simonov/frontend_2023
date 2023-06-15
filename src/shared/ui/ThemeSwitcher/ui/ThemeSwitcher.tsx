import { classNames } from 'shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss';
import { useTheme } from 'app/providers/ThemeProvider';
import ThemeIcon from 'shared/assets/icons/theme-icon.svg';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
    className?: string;
}

export const ThemeSwitcher: React.FC<ThemeSwitcherProps> = (props) => {
    const { className } = props;

    const { toggleTheme } = useTheme();

    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            <ThemeIcon className={classNames(cls.icon)} />
        </Button>
    );
};
