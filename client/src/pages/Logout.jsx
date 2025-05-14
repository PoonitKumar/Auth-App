import { useContext } from "react";
import { UserContext } from "../../context/userContext";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";

export default function LogoutButton() {
  const { logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    toast.success("Logged out");
    navigate("/login");
  };

  return <button onClick={handleLogout}>Logout</button>;
}
