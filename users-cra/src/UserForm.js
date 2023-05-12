/* eslint-disable react/prop-types */
import { useState } from "react";

const UserForm = ({ onUserAdd }) => {
  const [email, setEmail] = useState(``);
  const [name, setName] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(name, email);
    onUserAdd({ name, email });
    setName(``);
    setEmail(``);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          type="text"
          onChange={(e) => {
            setName(e.target.value);
            return;
          }}
          id="name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="text"
          onChange={(e) => {
            setEmail(e.target.value);
            return;
          }}
          id="email"
        />
      </div>
      <button type="submit">Add User</button>
    </form>
  );
};

export default UserForm;
