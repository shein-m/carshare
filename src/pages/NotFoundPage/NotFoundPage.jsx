import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/");

  return (
    <>
      <h1>Page not found</h1>
      <button onClick={handleClick}>Return</button>
    </>
  );
};

export default NotFoundPage;
