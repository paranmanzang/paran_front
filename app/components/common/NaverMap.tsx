// components/NaverMap.tsx
"use client";
import React, { useEffect } from 'react';

interface NaverMapProps {
    latitude: number;
    longitude: number;
    zoom?: number;
}

const NaverMap: React.FC<NaverMapProps> = ({ latitude, longitude, zoom = 15 }) => {
    useEffect(() => {
        const initMap = () => {
            if (typeof window !== 'undefined' && window.naver) {
                // var tm128 = new window.naver.maps.Point(latitude, longitude);
                // var latLng = window.naver.maps.TransCoord.fromTM128ToLatLng(tm128);
                const mapOptions = {
                    center: new window.naver.maps.LatLng(latitude, longitude),
                    zoom: zoom,
                };

                const map = new window.naver.maps.Map('map', mapOptions);

                new window.naver.maps.Marker({
                    position: new window.naver.maps.LatLng(latitude, longitude),
                    map: map,
                });
            }
        };

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
    }, [latitude, longitude, zoom]);

    return (
        <>
            <div id="map" style={{ width: '500px', height: '800px' }} />
        </>
    );
};

export default NaverMap;
