import { render, screen } from "@testing-library/react";
// import user from "@testing-library/user-event";
import { expect, test } from "vitest";
import UserForm from "../UserForm";

test("it shows 2 imputs and a button", () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole(`textbox`);
  const button = screen.getByRole(`button`);

  expect(inputs).toHaveLength(2);
  expect(button).toBeDefined();
});
