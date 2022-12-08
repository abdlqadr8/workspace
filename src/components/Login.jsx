import { useState } from "react";

export const User = () => {
  const [user, setUser] = useState('aaa');
  return (
    <>
      Username:{' '}
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />{' '}
      <br />
    </>
  );
};

export const Password = () => {
  const [password, setPassword] = useState();
  return (
    <>
      Password:{' '}
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />{' '}
      <br />
    </>
  );
};
