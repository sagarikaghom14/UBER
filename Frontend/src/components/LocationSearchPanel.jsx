import React from 'react'

const LocationSearchPanel = (props) => {

  //sample array for location
  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22C, Near Malholtra's cafe, Sheryians Coding School, Bhopal",
    "20B, Near Singhania's cafe, Sheryians Coding School, Bhopal",
    "19A, Near Sharma's cafe, Sheryians Coding School, Bhopal"
  ]
  return (
    <div>
      {/* this is just a sample data */}

      {
        locations.map(function (elem,idx) {
          return <div key={idx} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='gap-4  my-2 border-2 p-3 rounded-xl border-gray-100 active:border-black flex items-center justify-start'>
            <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'><i className="ri-map-pin-fill"></i></h2>
            <h4 className='font-medium'>{elem}</h4>
          </div>
        })
      }

    </div>
  )
}

export default LocationSearchPanel
