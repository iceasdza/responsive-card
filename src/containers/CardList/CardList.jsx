import { useEffect, useState } from "react";
import Card from "../../components/Card/Card";
import "./CardList.css";
import { getPlaceData, getTagsData } from "../../services/Service";

const CardList = () => {
  const [places, setPlaces] = useState(null);

  const initData = async () => {
    const placesData = await getPlaceData();
    const tagsData = await getTagsData();

    const places = placesData.map((place) => {
      return {
        ...place,
        tags: place.tags.map((tag) => tagsData[tag]),
      };
    });
    setPlaces(places);
  };

  useEffect(() => {
    initData();
  }, []);

  return (
    <div className="card-list-container">
      {places && places.map((data) => <Card key={data.id} placeData={data} />)}
    </div>
  );
};

export default CardList;
