import { useEffect, useState } from "react"
import { Marker, useMap, useMapEvent } from "react-leaflet"
import { iconPerson } from "./Icon";

export default function UserLocationMarker() {
  const [position, setPosition] = useState(null)
  const map = useMap();

  // locate user, but only once
  useEffect(() => {
    map.locate();
  }, []);

  // when user is found, center on them
  useMapEvent({
    locationfound(e) {
      setPosition(e.latlng)
      map.flyTo(e.latlng, 14)
    },
  })

  return position === null ? null : (
    <Marker position={position} icon={iconPerson} onClick={e => e.preventDefault()}/>
  )
}