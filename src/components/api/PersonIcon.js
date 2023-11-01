import L from 'leaflet';
import icon from '../../images/icons/person.svg';

const iconPerson = new L.Icon({
    iconUrl: icon,
    iconRetinaUrl: icon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 30),
    className: 'leaflet-user-icon'
});

export { iconPerson };