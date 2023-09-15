import { render, screen, getByTestId } from "@testing-library/react"
import Input from "../components/Input"
import React from "react"

describe("Input", () => {
    it("Should render correctly", () => {
        render(<Input data-testid="your-id"/>);

        expect(screen.getByTestId("your-id")).toBeInTheDocument;
    })
})