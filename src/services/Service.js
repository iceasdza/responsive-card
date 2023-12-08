export const getPlaceData = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/knot-freshket/142c21c3e8e54ef36e33f5dc6cf54077/raw/94ebab16839484f06d42eb799e30d0a945ff1a1b/freshket-places.json"
  );
  const places = await response.json();
  return places;
};

export const getTagsData = async () => {
  const response = await fetch(
    "https://gist.githubusercontent.com/knot-freshket/fa49e0a5c6100d50db781f28486324d2/raw/55bc966f54423dc73384b860a305e1b67e0bfd7d/freshket-tags.json"
  );
  const tags = await response.json();
  let tagObject = {};
  tags.forEach((element) => {
    tagObject = {
      [element.id]: element,
      ...tagObject,
    };
  });
  return tagObject;
};
