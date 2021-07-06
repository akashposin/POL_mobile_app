import React from 'react';
import MapboxGL, {Camera} from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiYWxleG1haG5rZSIsImEiOiJja25oc3psc2cwbWd2MnZudzA1d2dpOW5wIn0.w7LO2v86HxcaZUPdkmFk7g',
);
MapboxGL.setTelemetryEnabled(false);

const Map = props => {
  const [mapRegion, setMapRegion] = React.useState([
    -106.6282786110048, 52.156657453004,
  ]);

  return (
    <MapboxGL.MapView style={{flex: 1}} {...props}>
      <Camera zoomLevel={8} centerCoordinate={mapRegion} followZoomLevel={8} />
      {props.children}
    </MapboxGL.MapView>
  );
};

export default Map;
