import { useEffect } from "react";
import { redirect } from "react-router-dom";
function Home() {
  const loader = async () => {
    return redirect("/login");
  };
  useEffect(() => {
    loader();
  }, []);
  return (
    <div className="flex flex-row flex-1 items-center justify-center text-neutral-200 bg-neutral-900 ">
      <h1>Home</h1>
    </div>
  );
}

export default Home;
