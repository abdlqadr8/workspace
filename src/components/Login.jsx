export const User = ({ user, update }) => {
  return (
    <>
      Username:{' '}
      <input
        type="email"
        id='email'
        name='email'
        value={user}
        onChange={(e) => update({user: e.target.value})}
      />
      <br />
    </>
  );
};

export const Password = ({password, update }) => {
  return (
    <>
      Password:{' '}
      <input
        type="password"
        id='password'
        name='password'
        value={password}
        onChange={(e) => update({password: e.target.value})}
      />{' '}
      <br />
    </>
  );
};
