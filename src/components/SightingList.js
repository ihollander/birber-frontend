import { useEffect, useState } from "react";
import AddSighting from "./AddSighting";
import SightingCard from "./SightingCard";

function SightingList({ activeBirder }) {
  const [sightings, setSightings] = useState([]);
  console.log(sightings);

  useEffect(() => {
    fetch(`http://localhost:4000/birders/${activeBirder.id}/sightings`)
      .then((r) => r.json())
      .then((sightingsArray) => setSightings(sightingsArray));
  }, [activeBirder.id]);

  const sightingCards = sightings.map((sighting) => (
    <SightingCard key={sighting.id} sighting={sighting} />
  ));

  return (
    <div>
      <AddSighting />
      {sightingCards}
    </div>
  );
}

export default SightingList;
