import { useEffect, useState } from "react";
import { getGIFs } from "../helpers/getGIFs";

export const useFecthGifs = (category) => {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
      const images = await getGIFs(category);
      setGifs(images);
      setIsLoading(false)
    }
  
    useEffect(() => {
      getImages()
    }, []);

    return {
        gifs,
        isLoading 
    }
}
