import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import StartGame from "./StartGame";

describe("StartGame komponens tesztje", () => {
    it("Állapotváltozások tesztelése", () => {

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

    it("Űrlap elküldés tesztelése", () => {
        const setLengthMock = jest.fn();

        render(<StartGame setLength={setLengthMock} />);

        fireEvent.click(screen.getByLabelText("6"));

        fireEvent.click(screen.getByText("Indítás"));

        expect(setLengthMock).toHaveBeenCalledWith(6);
    });
});
