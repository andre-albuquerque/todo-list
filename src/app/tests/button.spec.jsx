import { render, screen } from "@testing-library/react"
import Button from "../components/Button"
import React from "react"

describe("Input", () => {
    it("Should render correctly", () => {
        render(<Button texto="adicionar"/>);

        expect(screen.getByText("adicionar")).toBeInTheDocument;
    })
})