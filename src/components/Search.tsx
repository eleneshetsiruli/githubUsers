import { ChangeEventHandler, MouseEventHandler } from "react";

interface Props {
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleSearch: MouseEventHandler<HTMLButtonElement>;
  gitUserName: string;
  darkMode: boolean;
}

export const Search = ({
  handleChange,
  handleSearch,
  gitUserName,
  darkMode,
}: Props) => {
  return (
    <div className="inpBtn">
      <input
        className={darkMode ? "white dark" : ""}
        onChange={handleChange}
        type="text"
        placeholder="Search Github username..."
        value={gitUserName}
      />
      <button className="search" onClick={handleSearch}>
        search
      </button>
    </div>
  );
};
