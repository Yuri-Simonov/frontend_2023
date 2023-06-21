import { useTranslation } from "react-i18next";
import { getCounterValue } from "../model/selectors/getCounterValue/getCounterValue";
import { counterActions } from "../model/slice/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "shared/ui/Button/Button";

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);

    const { t } = useTranslation();

    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <div>
            <h1 data-testid="counter-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="counter-btn-increment">
                {t("increment", { ns: "translation" })}
            </Button>
            <Button onClick={decrement} data-testid="counter-btn-decrement">
                {t("decrement", { ns: "translation" })}
            </Button>
        </div>
    );
};
