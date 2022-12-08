import { useState } from 'react';


export const User = ({ user, update }) => {
  return (
    <>
      Username:{' '}
      <input
        type="text"
        value={user}
        onChange={(e) => update({user: e.target.value})}
      />
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
