import React from "react";

interface User {
  id: number;
  name: string;
  email:string;
}

const UsersPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { next: { revalidate: 10 } } //cache: no-store then it will not store any cache data (cache:'no-store') or if you want to store and revalidate it after sometime then we can use next revalidate : 10 this will revalidate after every 10 sec (next: {revalidate:10})
  );
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
     <table className="table table-bordered">  {/* Daisy UI classes */}
        <thead>
          <tr>
            <th> Name </th>
            <th> Email </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user?.id}>
              <td>{user?.name}</td>
              <td>{user?.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UsersPage;
