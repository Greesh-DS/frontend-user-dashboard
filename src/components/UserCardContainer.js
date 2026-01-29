import UserCard from "./UserCard";

// Component Definition for User Card Display Container
function UserCardContainer({ filteredUsers, loading, error, onCardClick, onContainerClick }) {
  return (
    <div className="card-container" onClick={onContainerClick}>
      {filteredUsers.length > 0 ? (
        filteredUsers.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onCardClick={onCardClick}
          />
        ))
      ) : (
        !loading && !error && <p className="no-results">No users found. Try adjusting your search.</p>
      )}
    </div>
  );
}

export default UserCardContainer;
