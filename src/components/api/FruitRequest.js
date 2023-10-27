import { useEffect, useMemo, useState } from "react";
import { GoogleMap, InfoWindow, MarkerF, useJsApiLoader, useLoadScript } from "@react-google-maps/api";

const FruitRequest = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://data.edmonton.ca/resource/eecg-fc54.json?bears_edible_fruit=true&$limit=100')
      .then(response => response.json())
      .then(json => {
        setData(json);
        setIsLoading(false);
      })
      .catch(error => console.error(error));
  }, []);

  const center = useMemo(() => ({ lat: 53.605598645371686, lng: -113.54153970136359 }), []);

  const { mapIsLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '',
  });

  if (isLoading && !mapIsLoaded) {
    return (
      <>
        <p>Loading...</p>
      </>
    )
  }


  return (
    <>
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={14}
        >

          {data.map((tree, index) => (
            <MarkerF
              key={index} 
              position={{lat: parseFloat(tree.latitude), lng: parseFloat(tree.longitude)}}
            >
              <InfoWindow position={{lat: parseFloat(tree.latitude), lng: parseFloat(tree.longitude)}}>
                <h3>{tree.type_of_edible_fruit}</h3>
              </InfoWindow>
            </MarkerF>
          ))}
        </GoogleMap>
      </div>
    </>
  );
}

export default FruitRequest;