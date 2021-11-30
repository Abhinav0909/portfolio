/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'shopEcho',
    desc: 'A place where you can visualize things in 3d and learn new concepts',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'AeroGear',
    desc:
      'AeroGear is a web platform where students come across and learn about various planes features.It is an interactive 3d model',
    img: GreenCtgImg,
  },
];

export default projects;
