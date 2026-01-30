/*
  Component Definition for User Card Display Container

  filteredUsers: array of user objects to display.
  loading: boolean indicating if data is being fetched.
  error: string containing any error message.
  onCardClick: function to handle clicks on individual user cards.
  onContainerClick: function to handle clicks on the container (to clear selection).
*/

import UserCard from "./UserCard";

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