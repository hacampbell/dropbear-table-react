import { MapContainer, TileLayer } from "react-leaflet";

type MapProps = {
    provider: { url: string, attribution: string },
    position: { lat: number, lng: number },
    zoom: number
}

const DisplayMap = (props: MapProps) => {
    return (
        <MapContainer center={props.position} zoom={props.zoom}>
            <TileLayer
                attribution={props.provider.attribution}
                url={props.provider.url}
            />
        </MapContainer>
    );
}

export default DisplayMap;