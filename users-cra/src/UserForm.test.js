import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows 2 inputs and a button", () => {
  render(<UserForm />);

  const inputs = screen.getAllByRole(`textbox`);
  const button = screen.getByRole(`button`);
  // console.log(button);

  expect(inputs).toHaveLength(2);
  expect(button).toBeDefined();
});

test(`it calls onUserAdd when the form is submitted`, async () => {
  const mock = jest.fn();

  //Try to render component
  render(<UserForm onUserAdd={mock} />);

  // const [nameInput, emailInput] = screen.getAllByRole(`textbox`);
  const nameInput = screen.getByRole(`textbox`, { name: /name/i });
  const emailInput = screen.getByRole(`textbox`, { name: /email/i });

  //simulate typing in a name
  await user.click(nameInput);
  user.keyboard(`jane`);
  //simulate typing in an email
  await user.click(emailInput);
  user.keyboard(`jane@jane.com`);

  //Find the button
  const btn = screen.getByRole(`button`);

  //Simulate clicking the button, so submitting the form
  await user.click(btn);

  //Assertion to make sure 'onUserAdd' gets called with email/name
  expect(mock).toHaveBeenCalled();
  expect(mock).toHaveBeenCalledWith({ name: `jane`, email: `jane@jane.com` });
});

test(`clears out input after submitting new user`, async () => {
  render(<UserForm onUserAdd={() => {}} />);

  //get inptus and button
  const nameInput = screen.getByRole(`textbox`, { name: /name/i });
  const emailInput = screen.getByRole(`textbox`, { name: /email/i });
  const btn = screen.getByRole(`button`);

  //user adds data to inputs and submits
  await user.click(nameInput);
  await user.keyboard(`anything`);
  await user.click(emailInput);
  await user.keyboard(`anything`);

  await user.click(btn);

  // screen.debug();

  //check if inputs are clear
  //one way, works
  // expect(nameInput.value).toBe(``);
  // expect(emailInput.value).toBe(``);
  expect(nameInput).toHaveValue(``);
  expect(emailInput).toHaveValue(``);
});
