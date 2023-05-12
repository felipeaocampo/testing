import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import App from "./App";

test(`can receive a new user and show it on a list`, async () => {
  render(<App />);

  const nameInput = screen.getByRole(`textbox`, {
    name: /name/i,
  });

  const emailInput = screen.getByRole(`textbox`, {
    name: /email/i,
  });
  const button = screen.getByRole(`button`);

  //Simulate clicking the button, so submitting the form

  await user.click(nameInput);
  user.keyboard(`jane`);
  await user.click(emailInput);
  user.keyboard(`jane@jane.com`);

  await user.click(button);

  // screen.debug();
  // screen.logTestingPlaygroundURL();

  const name = screen.getByRole(`cell`, { name: `jane` });
  const email = screen.getByRole(`cell`, { name: `jane@jane.com` });

  expect(name).toBeInTheDocument();
  expect(email).toBeInTheDocument();
});
