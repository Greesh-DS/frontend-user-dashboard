import { useMemo } from "react";

// Custom hook to filter users based on search input
function useFilterUser(users, search) {
  return useMemo(() => {
    return users.filter((user) => {
      const searchLower = search.toLowerCase();
      return (
        user.name.toLowerCase().includes(searchLower)
      );
    });
  }, [users, search]);
}

export default useFilterUser;