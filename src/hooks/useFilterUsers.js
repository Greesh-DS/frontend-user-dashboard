/*
  Custom hook to filter users based on search input

  useFilterUsers(users, search): returns users whose names include the search string (case-insensitive).
  useMemo: caches the filtered results to avoid recalculating unnecessarily.
*/

import { useMemo } from "react";

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