import { classNames } from 'shared/lib/classNames/classNames';
import './Loader.scss';

interface LoaderProps {
    className?: string;
}

export const Loader: React.FC<LoaderProps> = (props) => {
    const { className } = props;

    return <span className={classNames('loader', {}, [className])}></span>;
};