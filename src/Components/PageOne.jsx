import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { createContext } from "react";

const PageOne = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      console.log(result.data);
      setProfile(result.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <p>I am Page One</p>
      {profile.map((item) => {
        return (
          <p key={item.id}>
            {item.id}:{item.name}
            <Link to={`/${item.id}`}>
              <button>Click to see user details</button>
            </Link>
          </p>
        );
      })}
    </>
  );
};

export default PageOne;
