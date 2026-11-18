import { NavLink } from 'react-router-dom';

export function SideBar() {
  return (
    <aside className="sidebar">
      <h2 className="sidebar-title">ניהול תלמידות</h2>
      <nav>
        <ul className="sidebar-list">
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              בית
            </NavLink>
          </li> 
          <li>
            <NavLink to='/dashboard' className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              דשבורד
            </NavLink>
          </li>
          <li>
            <NavLink to="/students" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              כל התלמידות
            </NavLink>
          </li>
          <li>
            <NavLink to="/excellent" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
              תלמידות מצטיינות
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  )
}