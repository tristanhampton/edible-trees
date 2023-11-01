import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import UserLocationMarker from "./UserLocationMarker";
import MarkerClusterGroup from '@changey/react-leaflet-markercluster'

const FruitRequestLeaflet = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const center = { lat: 53.605598645371686, lng: -113.54153970136359 };

  useEffect(() => {
    fetch('https://data.edmonton.ca/resource/eecg-fc54.json?bears_edible_fruit=true')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  if (isLoading) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }

  return (
      <MapContainer center={center} zoom={12}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />

        <MarkerClusterGroup>
          {data.map((tree, index) => (
            <Marker
              key={index}
              position={{ lat: parseFloat(tree.latitude), lng: parseFloat(tree.longitude) }}
            >
              <Popup>
                <h3>{tree.type_of_edible_fruit}</h3>
              </Popup>
            </Marker>
          ))}

        </MarkerClusterGroup>

        <UserLocationMarker />
      </MapContainer>
  );
}

export default FruitRequestLeaflet;