import 'mapbox-gl/dist/mapbox-gl.css'
import mapboxgl from 'mapbox-gl'
import { useEffect, useRef } from 'react';

mapboxgl.accessToken = 'pk.eyJ1IjoiY2tsZWltYW4xNSIsImEiOiJjazhseTJvcnMwOWdvM2hvOHE2ejk0ZHhoIn0.dp27-MIUTPYjRr-VLw1Rqg';

export default function MapboxMap() {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const map = useRef<mapboxgl.Map | null>(null)
  useEffect(() => {
    map.current = new mapboxgl.Map({
      container: mapContainer.current!!,
      style: 'mapbox://styles/ckleiman15/cl9w5emm8000b14p5c9xdkzu4'
    })
  }, [])
  return <div ref={mapContainer} className="map-container" style={{width: '100vw', height: '100vh'}}></div>
}