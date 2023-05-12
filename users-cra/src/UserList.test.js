import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

const renderComponent = () => {
  //make some dummy data
  const users = [
    { name: `jane`, email: `jane@jane.com` },
    { name: `sam`, email: `sam@sam.com` },
    { name: `mike`, email: `mike@mike.com` },
  ];

  //render component
  // const { container } = render(<UserList users={users} />);
  render(<UserList users={users} />);

  return { users };
};

test(`render one row per user`, () => {
  const { users } = renderComponent();

  // Find all the rows in the table
  //this below first approach adds a data-testid html attribute to the parent jsx element, allowing that specific el to be found and then you just search it for the desired children within. It isn't necessary to abstract "container" from the rendered React component for this approach. Just rendering works
  const rows = within(screen.getByTestId("users")).getAllByRole("row");

  //this below second approach abstracts the "container" obj from the rendered React comp. Then it searches within it for any matching HTMLElements. In this case we're looking for any table rows that are direct children of tbody
  //eslint-disable-next-line
  // const rows = container.querySelectorAll(`tbody tr`);

  //helpful testing helper suite
  // screen.logTestingPlaygroundURL();

  //Assertion: correct number of rows in the table
  // expect(rows.length - 1).toBe(users.length);
  expect(rows).toHaveLength(users.length);
});

test(`render email and name for each user`, () => {
  const { users } = renderComponent();

  //helpful testing helper suite
  // screen.logTestingPlaygroundURL();

  users.forEach((user) => {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  });
});
