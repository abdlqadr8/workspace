import { Link, Outlet } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <>
      <Link to="/card">Card</Link>
      <Link to="/note">Note</Link>
      <Outlet/>

      <div>{children}</div>
    </>
  )
}
