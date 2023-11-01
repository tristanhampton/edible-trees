import L from 'leaflet';
import icon_circle from '../../images/icons/circle.svg';
import icon_person from '../../images/icons/person.svg';
import icon_tree from '../../images/icons/tree.svg';

// https://leafletjs.com/examples/custom-icons/

export const IconCircle = new L.Icon({
    iconUrl: icon_circle,
    iconRetinaUrl: icon_circle,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 20),
    className: 'leaflet-div-icon'
});

export const IconPerson = new L.Icon({
    iconUrl: icon_person,
    iconRetinaUrl: icon_person,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(20, 30),
    className: 'leaflet-user-icon'
});

export const IconTree = new L.Icon({
  iconUrl: icon_tree,
  iconRetinaUrl: icon_tree,
  iconAnchor: [10, 30],
  popupAnchor: [0, -15],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(20, 30),
  className: 'leaflet-user-icon'
});
