import { useEffect, useState } from "react";

const useFriends = () => {

  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async() => {
        const res = await fetch("/friendsData.json");
        const data = await res.json();
        console.log(data, "Data fetch by useEffect hook")

        setTimeout(() => {
            setFriends(data);
            setLoading(false);
        }, 500)

    }
    fetchData(); 
  }, []);

  console.log(friends, "Friends");
  console.log(loading, "Loading")

  return {friends, loading}
};

export default useFriends;
