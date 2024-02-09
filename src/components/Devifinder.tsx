import { ChangeEvent, useEffect, useState } from "react";
import { Mode } from "./Mode";
import { Search } from "./Search";
import { Card } from "./Card";
const defaultUserData: UserData = {
  login: "",
  name: "",
  avatar_url: "",
  public_repos: 0,
  followers: 0,
  following: 0,
  company: "",
  subscriptions_url: "",
  twitter_username: "",
  html_url: "",
};
interface UserData {
  login: string;
  name: string;
  avatar_url: string;
  public_repos: number;
  followers: number;
  following: number;
  company: string;
  subscriptions_url: string;
  twitter_username: string;
  html_url: string;
}

export const Devifinder = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [gitUserName, setGitUserName] = useState("");
  const [data, setData] = useState<UserData>(defaultUserData);
  const [user, setUser] = useState("");

  async function getData() {
    fetch(`https://api.github.com/users/${user}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }

  function handleChange(ev: ChangeEvent<HTMLInputElement>) {
    setGitUserName(ev.target.value);
  }

  useEffect(() => {
    getData();
  }, [user]);

  function handleDark() {
    setDarkMode(!darkMode);
  }

  function handleSearch() {
    setUser(gitUserName);
  }

  return (
    <div className={darkMode ? "backGroundDark main" : "backgroundLight main"}>
      <Mode darkMode={darkMode} handleDark={handleDark} />
      <Search
        darkMode={darkMode}
        handleChange={handleChange}
        handleSearch={handleSearch}
        gitUserName={gitUserName}
      />

      <Card data={data} darkMode={darkMode} />
    </div>
  );
};
