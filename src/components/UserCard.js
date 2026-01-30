/* 
  UserCard Component to display individual user information.

  User: object containing user details.
  onCardClick: handles click event on the user card.
*/

function UserCard({ user, onCardClick }) {
  return (
    <div
      className="card"
      onClick={(e) => {
        e.stopPropagation();
        onCardClick(user);
      }}
    >     
      <h3>{user.name}</h3>
      <p>Email: {user.email}</p>
      <p className="city">City: {user.address.city}</p>
    </div>
  );
}

export default UserCard;
