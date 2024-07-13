import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
    const githubData = useLoaderData();
//   const [githubData, setGithubData] = useState({});

//   useEffect(() => {
//     fetch("https://api.github.com/users/mukulpadwal")
//       .then((data) => data.json())
//       .then((data) => setGithubData(data));
//   }, []);

  return (
    <div className="h-screen">
      <h1 className="p-4 bg-slate-700 text-white text-center text-3xl">Github : {githubData.followers}</h1>
      <img className="block text-center" src={githubData.avatar_url} alt={githubData.name} width={300}/>
    </div>
  );
}

export default Github;


export async function githubLoaderData(){
    const response = await fetch('https://api.github.com/users/mukulpadwal');
    return response.json();
}