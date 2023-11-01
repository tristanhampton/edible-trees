import L from 'leaflet';
import icon from '../../images/icons/circle.svg';

const CircleIcon = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 30),
    className: 'leaflet-div-icon'
});

export { CircleIcon };