import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";
import AllTheBooks from "../components/AllTheBooks";
import Books from "../assets/scifi.json";

test("Verifica che vengano effettivamente renderizzate tante bootstrap cards quanti sono i libri nel file json utilizzato.", () => {
  render(<AllTheBooks books={Books} />);

  const cards = screen.getAllByTestId("book-card");

  expect(cards.length).toBe(Books.length);
});
