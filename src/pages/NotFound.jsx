import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="not__found">
      <h1>Not Found!</h1>
      <Link to={"/"}>Back to home</Link>
    </main>
  );
};

export default NotFound;
