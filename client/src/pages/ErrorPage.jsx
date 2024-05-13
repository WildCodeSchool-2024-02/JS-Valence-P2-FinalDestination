import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <>
      <h1>Error 404</h1>
      <Link to="/">go back to home page</Link>
    </>
  );
}
