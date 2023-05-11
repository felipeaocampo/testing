/* eslint-disable react/prop-types */
import { useState } from "react";

const UserForm = ({ onUserAdd }) => {
  const [email, setEmail] = useState(``);
  const [name, setName] = useState(``);

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(name, email);
    onUserAdd({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">Name</label>
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button>Add User</button>
    </form>
  );
};

export default UserForm;
