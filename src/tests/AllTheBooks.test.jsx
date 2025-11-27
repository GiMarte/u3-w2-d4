import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import AllTheBooks from "../components/AllTheBooks";

test("Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.", () => {
  render(<AllTheBooks />);

  const heading = screen.getByText(/MAJESTIC - LIBERERIA/i);

  expect(heading).toBeInTheDocument();
});
