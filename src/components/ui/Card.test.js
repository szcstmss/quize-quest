import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";

describe("Card Component Test", () => {
    it("Should render the child component", () => {
        const childComponent = <div data-testid="child-component">Child component</div>;

        const { getByTestId } = render(
            <Card>
                {childComponent}
            </Card>
        );

        const childElement = getByTestId("child-component");
        expect(childElement).toBeInTheDocument();
        expect(childElement).toHaveTextContent("Child component");
    });

    it("Should apply the style class correctly", () => {
        const styleClass = "custom-class";

        const { container } = render(
            <Card styleClass={styleClass}>
                <div>Child component</div>
            </Card>
        );

        expect(container.firstChild).toHaveClass(styleClass);
    });
});
