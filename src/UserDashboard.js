import { useState, useRef } from "react";
import useFetchUsers from "./hooks/useFetchUsers";
import useFilterUsers from "./hooks/useFilterUsers";
import SearchBar from "./components/SearchBar";
import UserCardContainer from "./components/UserCardContainer";
import ErrorMessage from "./components/ErrorMessage";
import UserDetailsPanel from "./components/UserDetailsPanel";

function UserDashboard() {
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  const detailsPanelRef = useRef(null);
  
  const { users, error, loading } = useFetchUsers();
  const filteredUsers = useFilterUsers(users, search);

  const handleCardClick = (user) => {
    setSelectedUser(user);
    setTimeout(() => {
      detailsPanelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  return (
    <div className="container">
      <h1>User Dashboard</h1>

      <ErrorMessage error={error} />

      {!loading && !error && <SearchBar search={search} onSearchChange={setSearch} />}

      <UserCardContainer
        filteredUsers={filteredUsers}
        loading={loading}
        error={error}
        onCardClick={handleCardClick}
        onContainerClick={() => setSelectedUser(null)}
      />

      <div ref={detailsPanelRef}>
        <UserDetailsPanel selectedUser={selectedUser} onClose={() => setSelectedUser(null)} />
      </div>
    </div>
  );
}

export default UserDashboard;
