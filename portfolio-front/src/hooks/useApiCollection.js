import { useEffect, useState } from "react";
import axios from "axios";

const useApiCollection = (path) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let active = true;

    const fetchCollection = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}${path}`, {
          headers: { Accept: "application/json" },
        });

        if (!active) return;

        if (response.status === 200) {
          setData(response.data);
        } else {
          setError(true);
        }
      } catch (err) {
        if (active) setError(true);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchCollection();

    return () => {
      active = false;
    };
  }, [path]);

  return { data, isLoading, error };
};

export default useApiCollection;
