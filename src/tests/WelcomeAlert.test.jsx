import { render, screen } from "@testing-library/react";
import WelcomeAlert from "../components/WelcomeAlert";
import { expect, test } from "vitest";

test("Verifica che il componente Welcome venga montato correttamente", () => {
  render(<WelcomeAlert />);

  const heading = screen.getByText(/MAJESTIC - LIBERERIA/i);

  expect(heading).toBeInTheDocument();
});
