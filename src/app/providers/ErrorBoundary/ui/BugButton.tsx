import { Button } from 'shared/ui/Button/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string;
}

// Кнопка для тестирования ErrorBoundary
export const BugButton: React.FC<BugButtonProps> = () => {
    const [error, setError] = useState(false);
    const { t } = useTranslation();

    const throwError = () => {
        setError(!error);
    };

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <Button onClick={throwError}>
            {t('Throw error', { ns: 'translation' })}
        </Button>
    );
};
