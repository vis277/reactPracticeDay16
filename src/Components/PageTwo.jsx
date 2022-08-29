import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";

const PageTwo = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  console.log(id);
  useEffect(() => {
    async function fetchData() {
      const result = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      console.log(result.data);
      setProfile(result.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <p>I am Page Two</p>
      <p>Name:{profile.name}</p>
      <p>UserName:{profile.username}</p>
      <p>Email:{profile.email}</p>
    </>
  );
};

export default PageTwo;
