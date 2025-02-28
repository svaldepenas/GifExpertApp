import { GridItem } from "./GridItem";
import { useFecthGifs } from "../hooks/useFecthGifs";

export const GifGrid = ({ category }) => {
  const { gifs, isLoading } = useFecthGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <h1>LOADING ...</h1>}
      <div className="card-grid">
        {gifs.map((gif) => (
          <GridItem key={gif.id} {...gif} />
        ))}
      </div>
    </>
  );
};
