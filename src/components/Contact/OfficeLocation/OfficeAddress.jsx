import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const OfficeAddress = () => {
    
  const containerStyle = {
    width: '800px',
    height: '500px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
//   let path = window.location.pathname.split('/')[1]

  return (
    <div className='grid px-16 mt-20' style={{gridTemplateColumns:"1.5fr 4fr"}}>
      <div className='px-2 flex flex-col gap-y-7'>
        <div>
          <h1 className='text-2xl text-gray-950'>Office Address</h1>
          <p className='mt-1 text-[#7F8894]'>NextGen Solutions, Office # 1 Sharjah City, Sialkot Road, Gujranwala, Pakistan</p>
        </div>
        <hr />
        <div className=''>
          <h1 className='text-2xl text-gray-950'>Contact Info</h1>
          <div>
          <p className='text-[#7F8894]'>Phone: (+92) 300 111 3423</p> 
          <p className='text-[#7F8894]'>Email: hello@edusuite.pk</p>
          </div>
        </div>
      </div>
      <div>
        <LoadScript
          googleMapsApiKey={import.meta.env.VITE_REACT_MAP_API_KEY}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
          >
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default OfficeAddress;
