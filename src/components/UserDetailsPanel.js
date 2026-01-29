// Component Definition for User Details Panel When a User is Selected
function UserDetailsPanel({ selectedUser, onClose }) {
  if (!selectedUser) return null;

  return (
    <div className="details-panel">
      <div className="details-header">
        <h2>{selectedUser.name}</h2>
        <button onClick={onClose} className="close-button">x</button>
      </div>
      <div className="details-content">
        <p><b>Email:</b> {selectedUser.email}</p>
        <p><b>City:</b> {selectedUser.address.city}</p>
        <p><b>Phone:</b> {selectedUser.phone}</p>
        <p><b>Company:</b> {selectedUser.company.name}</p>
        <p><b>Website:</b> {selectedUser.website}</p>
      </div>
    </div>
  );
}

export default UserDetailsPanel;
