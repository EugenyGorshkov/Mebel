import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';

const MapCard = () => (
    <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }}>
            <Placemark geometry={[55.684758, 37.738521]} />
        </Map>
    </YMaps>
);

export default MapCard