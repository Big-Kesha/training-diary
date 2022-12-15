import { Link } from "react-router-dom";
function NotFound() {
  return (
    <>
      <h1>Page not Found</h1>
      <p>
        Go <Link to="/"> Home</Link>
      </p>
    </>
  );
}

export { NotFound };
