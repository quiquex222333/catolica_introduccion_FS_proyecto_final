import { useState } from "react";
import { HiUserCircle } from "react-icons/hi";
import { logoutUser } from "../core/api/users.api";
import { useNavigate } from "react-router";

export default function DropdownButton() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    try {
        logoutUser();
        navigate("/");
    } catch (error) {
        window.alert(error);
    }
  }

  return (
    <div className="fixed top-4 right-4 inline-block text-left">
      <button
        onClick={() => setOpen(!open)}
        className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center focus:outline-none"
      >
        <HiUserCircle size={24} />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
          <button
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={() => alert('Mi información')}
          >
            Mi información
          </button>
          <button
            className="block w-full px-4 py-2 text-left hover:bg-gray-100"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}