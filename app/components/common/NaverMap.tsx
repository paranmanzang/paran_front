// components/NaverMap.tsx
"use client";
import { AddressModel } from '@/app/model/room.model';
import React, { useEffect } from 'react';

interface NaverMapProps {
    addresses: AddressModel[]
}

const NaverMap: React.FC<NaverMapProps> = ({ addresses }) => {
    useEffect(() => {
        const initMap = () => {
            if (typeof window !== 'undefined' && window.naver) {
                // var tm128 = new window.naver.maps.Point(latitude, longitude);
                // var latLng = window.naver.maps.TransCoord.fromTM128ToLatLng(tm128);
                const mapOptions = {
                    center: new window.naver.maps.LatLng(addresses[0].latitude, addresses[0].longitude),
                    zoom: 16,
                };

                const map = new window.naver.maps.Map('map', mapOptions);

                let markerList = [], infoWindows = [];
                addresses.forEach((address, index) => {
                    const marker = new window.naver.maps.Marker({
                        position: new window.naver.maps.LatLng(address.latitude, address.longitude),
                        map: map,
                    });
                    const infoWindow = new window.naver.maps.InfoWindow({
                        content: `<div style="width:250px;text-align:center;padding:10px;">
                                  <b><a href="/rooms/${address.id}">${address.detailAddress}</a></b><br/>
                                  ${address.address}
                                  </div>`,
                    });
                    markerList.push(marker)
                    infoWindows.push(infoWindow)

                    window.naver.maps.Event.addListener(marker, 'click', () => {
                        infoWindows.forEach((infowindow, idx) => {
                            if (idx === index) {
                                infowindow.open(map, marker);
                            } else {
                                infowindow.close();
                            }
                        });
                    });
                })
                // 맵 상태가 변경될 때 마커를 업데이트
                window.naver.maps.Event.addListener(map, 'idle', () => {
                    updateMarkers(map, markers);
                });
            }
        };


        function updateMarkers(map: naver.maps.Map, markers: naver.maps.Marker[]) {
            const mapBounds = map.getBounds();

            markers.forEach((marker) => {
                const position = marker.getPosition();
                if (mapBounds.hasLatLng(position)) {
                    showMarker(marker);
                } else {
                    hideMarker(marker);
                }
            });
        }

        function showMarker(marker: naver.maps.Marker) {
            if (marker.getMap()) return;
            marker.setMap(map);
        }

        function hideMarker(marker: naver.maps.Marker) {
            if (!marker.getMap()) return;
            marker.setMap(null);
        }

        // 네이버 지도 스크립트가 로드된 후 지도 초기화
        if (!window.naver) {
            const script = document.createElement('script');
            script.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId={YOUR_CLIENT_ID}&submodules=geocoder`; // YOUR_CLIENT_ID를 발급받은 Client ID로 교체하세요.
            script.async = true;
            script.onload = initMap;
            document.head.appendChild(script);
        } else {
            initMap();
        }
    }, [addresses]);

    return (
        <>
            <div id="map" style={{ width: '500px', height: '800px' }} />
        </>
    );
};

export default NaverMap;
