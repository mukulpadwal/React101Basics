import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { userData } = useContext(UserContext);

  if (!userData?.username) return <h1>Please Login to view Your Profile</h1>;

  return <div>UserName : {userData.username}</div>;
}

export default Profile;
