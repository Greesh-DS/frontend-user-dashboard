/*
  Custom hook that fetches users from jsonplaceholder.typicode.com on mount.
  useFetchUsers: returns an object with users array, error message, and loading state.

  useEffect: used to trigger the fetch on component mount.
  Encapsulates fetch logic inside an async function within useEffect.
  useState: manages users, error, and loading states.
*/

import { useEffect, useState } from "react";

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