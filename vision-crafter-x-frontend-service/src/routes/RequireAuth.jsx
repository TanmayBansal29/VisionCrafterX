import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

const RequireAuth = () => {
  const user = useSelector((store) => store.user)
  return user ? <Outlet /> : <Navigate to="/login" replace/>
}

export default RequireAuth