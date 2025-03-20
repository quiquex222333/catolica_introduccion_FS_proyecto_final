import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { infoUser } from "../core/api/users.api";
import DropdownButton from "../components/DropDownBtn";

function ProfileInfo() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await infoUser();
        setUser(response);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }
  if (error) return <p>Error: {error}</p>;

  return (
    <>
      <DropdownButton />
      <div className="bg-white p-4 rounded-2xl shadow-md text-center">
        <h2 className="text-xl font-semibold">Información del Usuario</h2>
        <div className="mt-2 text-left">
          <p className="text-gray-700 font-medium">Nombre:</p>
          <p className="text-gray-500">{user.name}</p>
          <p className="text-gray-700 font-medium mt-2">Email:</p>
          <p className="text-gray-500">{user.email}</p>
        </div>
      </div>
    </>
  );
}

export default ProfileInfo;
