import { useEffect, useState } from "react"
import { Marker, useMap, useMapEvent } from "react-leaflet"
import { IconCircle } from "./Icons";

export default function UserLocationMarker() {
  const [position, setPosition] = useState(null);
  const [located, setLocated] = useState(false);
  const map = useMap();
  const timeout = 1000;
  
  // locate user once every timeout so it isn't constantly locating
  useEffect(() => {
    const interval = setInterval(() => {
      map.locate();
    }, timeout);

    return () => clearInterval(interval); 
  }, [map]);

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
    <Marker position={position} icon={IconCircle} onClick={e => e.preventDefault()}/>
  )
}