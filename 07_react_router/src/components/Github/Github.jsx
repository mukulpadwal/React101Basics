import { useLoaderData } from "react-router-dom";


function Github() {
    const data = useLoaderData();
//   const [data, setData] = useState({});
//   useEffect(() => {
//     fetch("https://api.github.com/users/mukulpadwal")
//       .then((response) => response.json())
//       .then((response) => setData(response));
//   }, []);

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers :{data?.followers}
      <div className="flex justify-center items-center p-4">
        <img src={data?.avatar_url} alt="" />
      </div>
    </div>
  );
}

export default Github;

export const githubUserLoader = async () => {
    const response = await fetch("https://api.github.com/users/mukulpadwal");
    return response.json();
}
