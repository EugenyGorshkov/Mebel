import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';

const MapCard = () => (
    <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 10 }} width='640px' height='320px'>
            <Placemark geometry={[55.751837867029195,37.587497143224425]} />
        </Map>
    </YMaps>
);

export default MapCard