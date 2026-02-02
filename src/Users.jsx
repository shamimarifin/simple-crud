import React from "react";

const Users = () => {
  const handleForm = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;

    console.log(name, email);
    const newUser = {name, email}

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(newUser)
    })
      .then((res) => res.json())
      .then();
  };
  return (
    <div>
      <form onSubmit={handleForm}>
        <input type="text" name="name" id="" />
        <br />
        <input type="email" name="email" id="" />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Users;
