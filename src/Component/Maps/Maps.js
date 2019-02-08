import React, { Component } from "react";
import { YMaps, Map, Placemark, GeoObject } from "react-yandex-maps";

const mapState = {
  center: [47.223481, 39.721036],
  zoom: 6
};

export default function Maps(props) {
  return (
    <YMaps>
      <Map
        defaultState={mapState}
        width={"100%"}
        height={"800px"} >
{/*   
        <Placemark 
        geometry={[49.580868, 41.232535]} 
        options={{
          preset: 'islands#darkGreenCircleDotIcon',
      }}
        
        /> */}

        {/* <Placemark geometry={[48.653708, 41.076363]} />
        <Placemark geometry={[48.656471, 41.077639]} />
        <Placemark geometry={[48.656579, 41.080557]} />
        <Placemark geometry={[48.6524981, 41.0775018]} /> */}
        </Map>
    </YMaps>
  );
}
