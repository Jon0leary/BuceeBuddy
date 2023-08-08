import { useAuthContext } from "../../shared/hooks/useAuthContext"

export const useLogout = () => {
  const { dispatch } = useAuthContext()
  
  const logout = () => {
    localStorage.removeItem("user")

    // dispatch logout action
    dispatch({type: "LOGOUT" })


  }

  return {logout}
}