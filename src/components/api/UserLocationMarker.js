import { useState } from "react"
import { Marker, useMap, useMapEvent } from "react-leaflet"
import { iconPerson } from "./Icon";

export default function UserLocationMarker() {
  const [position, setPosition] = useState(null);
  const [located, setLocated] = useState(false);
  const map = useMap();
  
  // locate user
  map.locate();

  // when user is found, center on them on load
  useMapEvent({
    locationfound(e) {
      setPosition(e.latlng)

      if (!located) {
        map.flyTo(e.latlng, 14);
        setLocated(true);
      }
    },
  });



  return position === null ? null : (
    <Marker position={position} icon={iconPerson} onClick={e => e.preventDefault()}/>
  )
}