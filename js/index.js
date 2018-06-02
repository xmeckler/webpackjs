console.log("Bienvenue dans WebPack!");

import moment from "moment"
import 'bootstrap';
import '../scss/main.scss';

console.log(moment().startOf('day').fromNow());