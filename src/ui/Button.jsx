import { Link } from "react-router-dom";

function Button({ children, disabled, to, type }) {
  const base =
    "inline-block text-sm rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors duration-300  hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 active:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-slate-300";

  const styles = {
    primary: base + " md:px-6 md:py-4 px-4 py-3",
    small: base + " md:px-5 md:py-2.5 px-4 py-2 text-xs ",
    secondary:
      "inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:text-stone-800 focus:bg-stone-200 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 active:bg-yellow-400 disabled:cursor-not-allowed disabled:bg-slate-300 md:px-6 md:py-3.5 px-4 py-2.5",
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;