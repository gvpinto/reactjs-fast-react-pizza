import { useSelector } from "react-redux";

function Username() {
  const username = useSelector((state) => state.user.username);

  if (!username) return null;

  return (
    <div className="hidden text-xs font-semibold md:block">{username}</div>
  );
}

export default Username;

export const getUsername = (state) => state.user.username;
