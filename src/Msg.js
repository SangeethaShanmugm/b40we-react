export function Msg({ name, pic }) {
  
  return (
    <div className="user-container">
      <img className="profile-pic" src={pic} alt="profile" />
      <h1>Hi, {name}</h1>
    </div>
  );
}
