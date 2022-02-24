/* eslint-disable prettier/prettier */
import { v4 as uuidv4 } from 'uuid';
import AeroGear from '../images/aerogear.jpeg';
import ShopEcho from '../images/shopecho.jpeg';
import BotImg from '../images/bot.jpeg';

const projects = [
  {
    id: uuidv4(),
    name: 'shopEcho',
    desc: 'A place where you can visualize things in 3d and learn new concepts',
    img: ShopEcho,
  },
  {
    id: uuidv4(),
    name: 'AeroGear',
    desc:
      'AeroGear is a web platform where students come across and learn about various planes features.It is an interactive 3d model',
    img: AeroGear,
  },
  {
    id: uuidv4(),
    name: 'Discord Bot',
    desc:
      'It is a discord bot',
    img: BotImg,
  },
  // {
  //   id: uuidv4(),
  //   name: 'Having Meet',
  //   desc:
  //     'This is a online video chat app where you can have one to one communication',
  //   img: GreenCtgImg,
  // },
  {
    id: uuidv4(),
    name: 'Reducer',
    desc:
      'It is an url shortner'
  },
];

export default projects;
