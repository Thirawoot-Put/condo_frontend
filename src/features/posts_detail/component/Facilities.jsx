import React from 'react';
import SoupKitchenIcon from '@mui/icons-material/SoupKitchen';
import BathtubIcon from '@mui/icons-material/Bathtub';
import BathroomIcon from '@mui/icons-material/Bathroom';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import DeckIcon from '@mui/icons-material/Deck';
import TvIcon from '@mui/icons-material/Tv';
import AirIcon from '@mui/icons-material/Air';
import { GiModernCity } from 'react-icons/gi';
import ElevatorIcon from '@mui/icons-material/Elevator';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import { MdWork } from 'react-icons/md';
import YardIcon from '@mui/icons-material/Yard';
import PoolIcon from '@mui/icons-material/Pool';
import { FaChartArea } from 'react-icons/fa';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EvStationIcon from '@mui/icons-material/EvStation';
import SecurityIcon from '@mui/icons-material/Security';
import PetsIcon from '@mui/icons-material/Pets';
import useDetail from '../context/PostDetailContext';

const iconFacilitie = [
  { name: 'Kitchen', icon: <SoupKitchenIcon />, id: 1 },
  { name: 'Bath tub', icon: <BathtubIcon />, id: 2 },
  { name: 'Water heater', icon: <BathroomIcon />, id: 3 },
  { name: 'Refrigerator', icon: <KitchenIcon />, id: 4 },
  { name: 'Laundry', icon: <LocalLaundryServiceIcon />, id: 5 },
  { name: 'Balcony', icon: <DeckIcon />, id: 6 },
  { name: 'TV', icon: <TvIcon />, id: 7 },
  { name: 'Air-conditioner', icon: <AirIcon />, id: 8 },
  { name: 'City view', icon: <GiModernCity />, id: 9 },
  { name: 'Elevator', icon: <ElevatorIcon />, id: 10 },
  { name: 'Free parking', icon: <LocalParkingIcon />, id: 11 },
  { name: 'Fitness', icon: <FitnessCenterIcon />, id: 12 },
  { name: 'Co-working space', icon: <MdWork />, id: 13 },
  { name: 'KitchGardenen', icon: <YardIcon />, id: 14 },
  { name: 'Swimming pool', icon: <PoolIcon />, id: 15 },
  { name: 'Rooftop', icon: <YardIcon />, id: 16 },
  { name: 'Games room', icon: <SportsEsportsIcon />, id: 17 },
  { name: 'EV charging station', icon: <EvStationIcon />, id: 18 },
  { name: 'Security', icon: <SecurityIcon />, id: 19 },
  { name: 'Pet friendly', icon: <PetsIcon />, id: 20 },
];

export default function Facilities() {
  const { postDetail } = useDetail();
//  new Comment
//   comment hello
  const finalIcon = postDetail?.room?.roomFacilities.map((el) => el?.id);

  return (
    <div className=' flex items-center justify-center '>
      <div className='w-[100%]  shadow-lg rounded-md p-4'>
        <div>
          <h1 className='font-semibold text-2xl'>Facilities</h1>
        </div>
        <div className='grid grid-cols-4'>
          {iconFacilitie.map((el) => (
            <div key={el.id} className='font-mono'>
              {finalIcon[el.id - 1] == el.id && (
                <div className='text-blue-600 flex gap-4 '>
                  {el.icon}
                  <p className='text-gray-800'>{el.name}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

{
  /* <div className='flex flex-wrap'>
<div>
  <SoupKitchenIcon />
</div>
<div>
  <BathtubIcon />
</div>
<div>
  <BathroomIcon />
</div>
<div>
  <KitchenIcon />
</div>
<div>
  <LocalLaundryServiceIcon />
</div>
<div>
  <DeckIcon />
</div>
<div>
  <TvIcon />
</div>
<div>
  <AirIcon />
</div>
<div>
  <GiModernCity />
</div>
<div>
  <ElevatorIcon />
</div>
<div>
  <LocalParkingIcon />
</div>
<div>
  <FitnessCenterIcon />
</div>
<div>
  <MdWork />
</div>
<div>
  <YardIcon />
</div>
<div>
  <PoolIcon />
</div>
<div>
  <FaChartArea />
</div>
<div>
  <SportsEsportsIcon />
</div>
<div>
  <EvStationIcon />
</div>
<div>
  <SecurityIcon />
</div>
<div>
  <PetsIcon />
</div>
</div> */
}
