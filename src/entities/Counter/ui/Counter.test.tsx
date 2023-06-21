import { Counter } from "./Counter";
import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/config/tests/componentRender/componentRender";

describe("Counter", () => {
    test("1", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        expect(screen.getByTestId("counter-title")).toHaveTextContent("10");
    });
    test("inc", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        fireEvent.click(screen.getByTestId("counter-btn-increment"));
        expect(screen.getByTestId("counter-title")).toHaveTextContent("11");
    });
    test("dec", () => {
        componentRender(<Counter />, {
            initialState: {
                counter: {
                    value: 10,
                },
            },
        });
        fireEvent.click(screen.getByTestId("counter-btn-decrement"));
        expect(screen.getByTestId("counter-title")).toHaveTextContent("9");
    });
});
