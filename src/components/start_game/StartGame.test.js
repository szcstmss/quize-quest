import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import StartGame from "./StartGame";

describe("StartGame Component Test", () => {
    it("Testing State Changes", () => {

        render(<StartGame />);

        expect(screen.queryByLabelText("6")).not.toBeChecked();
        expect(screen.queryByLabelText("12")).not.toBeChecked();
        expect(screen.queryByLabelText("24")).not.toBeChecked();

        fireEvent.click(screen.getByLabelText("6"));
        expect(screen.getByLabelText("6")).toBeChecked();
        expect(screen.queryByLabelText("12")).not.toBeChecked();
        expect(screen.queryByLabelText("24")).not.toBeChecked();

        fireEvent.click(screen.getByLabelText("12"));
        expect(screen.queryByLabelText("6")).not.toBeChecked();
        expect(screen.getByLabelText("12")).toBeChecked();
        expect(screen.queryByLabelText("24")).not.toBeChecked();

        fireEvent.click(screen.getByLabelText("24"));
        expect(screen.queryByLabelText("6")).not.toBeChecked();
        expect(screen.queryByLabelText("12")).not.toBeChecked();
        expect(screen.getByLabelText("24")).toBeChecked();
    });

    it("Testing Form Submission", () => {
        const setLengthMock = jest.fn();

        render(<StartGame setLength={setLengthMock} />);

        fireEvent.click(screen.getByLabelText("6"));

        fireEvent.click(screen.getByText("Start"));

        expect(setLengthMock).toHaveBeenCalledWith(6);
    });
});
