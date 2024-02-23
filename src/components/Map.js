import { MapContainer, Marker, TileLayer, Tooltip } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export default function Map(props) {
    const { position, zoom } = props
  return (
    <div className='relative md:h-[500px] h-[170px] mb-5'>
    <MapContainer center={position} zoom={zoom} scrollWheelZoom={false} style={{ width: "100%", position: "absolute", top:0, bottom: 0 }}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    <Marker position={position}>
      
    </Marker>
  </MapContainer>
    </div>
  )
}
