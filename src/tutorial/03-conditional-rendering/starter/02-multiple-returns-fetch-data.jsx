import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(url);
        if (!response.ok) {
          setIsError(true);
          setIsLoading(false);
          return;
        }
        const data = await response.json();
        console.log(response);
        setUser(data);
      } catch (error) {
        setIsError(true);
        console.log(error);
      }
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    fetchData();
    // ----><----- Wrong place and order to destruct the user properties 
  }, []);
  if (isLoading) {
    return <h2>loading...</h2>;
  }
  if (isError) {
    return <h2>There was an error</h2>;
  }
  
  const { avatar_url, name, company, bio } = user;
  return (
    <div>
      <img
        style={{ width: "150px", borderRadius: "25px" }}
        src={avatar_url}
        alt={name}
      />
      <h2>{user.name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  );
};
export default MultipleReturnsFetchData;
