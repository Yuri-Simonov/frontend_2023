import { fireEvent, screen } from "@testing-library/react";
import { componentRender } from "shared/config/tests/componentRender/componentRender";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";

describe("Sidebar", () => {
    test("1", () => {
        componentRender(<Sidebar />);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    });

    test("2", () => {
        componentRender(<Sidebar />);
        const toggleBtn = screen.getByTestId("toggle-sidebar");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).not.toHaveClass("collapsed");
    });
});
