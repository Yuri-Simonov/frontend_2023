import { classNames } from "../../lib/classNames/classNames";
import cls from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ButtonTheme {
    CLEAR = "clear",
    CLEAR_INVERTED = "clearInverted",
    OUTLINE = "outline",
    BACKGROUND = "background",
    BACKGROUND_INVERTED = "background_inverted",
}

export enum ButtonSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        square = false,
        size,
        ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.square]: square,
    };

    const additionalClasses = [className, cls[theme], cls[size]];

    return (
        <button
            {...otherProps}
            className={classNames(cls.button, mods, additionalClasses)}
        >
            {children}
        </button>
    );
};
