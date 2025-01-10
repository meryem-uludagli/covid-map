import { render, screen } from "@testing-library/react";
import Item from "../pages/home/item";

test("Gonderilen proplar dogru sekilde kullanilir", () => {
  render(<Item color="text-blue-500" text="Toplam Vaka" value="300,8M" />);

  const icon = screen.getByTestId("icon");

  expect(icon).toHaveClass("text-blue-500");

  screen.getByText("Toplam Vaka");

  screen.getByText("300,8M");
});
