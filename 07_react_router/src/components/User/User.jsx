import { useParams } from "react-router-dom";

function User() {
  const { userId } = useParams();
  return (
    <div className="h-screen ">
      <h1 className="text-center text-xl bg-slate-700 text-white p-4">
        Welcome User : {userId}
      </h1>
    </div>
  );
}

export default User;
