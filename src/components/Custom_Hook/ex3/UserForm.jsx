import { useState } from "react";
import useInput from "../useInput";

function UserForm() {
  const [firstName, bindFirstName, resetFirstName] = useInput("");
  const [lastName, bindLastName, resetLastName] = useInput("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Hello ${firstName} ${lastName}`);
    resetFirstName();
    resetLastName();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input placeholder="firstname" name="firstname" {...bindFirstName} />

        <input placeholder="lastname" name="lastname" {...bindLastName} />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserForm;
