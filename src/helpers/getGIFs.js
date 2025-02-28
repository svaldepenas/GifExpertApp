export const getGIFs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=DabNZCD2yedlfRnA1lG2akRDnrTDmFBl&q=${category}&limit=4`;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map( gif => ({
        id: gif.id,
        title: gif.title,
        img: gif.images.downsized_medium.url
    }));

    return gifs;
}