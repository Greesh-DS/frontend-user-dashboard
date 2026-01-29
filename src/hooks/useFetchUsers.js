import { useEffect, useState } from "react";

// Custom hook to fetch users from an API
function useFetchUsers() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        
        if (!res.ok) {
          throw new Error(`HTTP Error: ${res.status}`);
        }
        
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(`Failed to load users: ${err.message || "Unknown error"}`);
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return { users, error, loading };
}

export default useFetchUsers;
