import {Map, Placemark, YMaps} from '@pbe/react-yandex-maps';

const MapCard = () => (
    <YMaps>
        <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} className='h-78 lg:h-[450px] w-78 lg:w-[900px] container mx-auto'>
            <Placemark geometry={[55.751837867029195,37.587497143224425]} />
            <Placemark geometry={[55.749215333880876,37.903347561289976]} />
            <Placemark geometry={[55.675844495116976,37.51705424175586]} />
        </Map>
    </YMaps>
);

export default MapCard