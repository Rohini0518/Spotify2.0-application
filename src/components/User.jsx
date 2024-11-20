export default function User({ handleMenu }) {
  return (
    <div className="user-container">
      <h2>User Profile</h2>
      <p>Name: Rohini Polina</p>
      <p>Email: rohinirho@gmail.com</p>

      <button onClick={() => handleMenu("")}>Close</button>
    </div>
  );
}
