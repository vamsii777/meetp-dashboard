import * as firebase from 'firebase';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
const current = new Date();
current.setHours(0)
current.setMinutes(0)
current.setSeconds(0)
current.setMilliseconds(0)
const timestamp1 = current.getTime();
export class Item {
  key: string;
  id: string;
  title: string;
  description: number;
  published : boolean;
  imageurl: string;
  videourl: string;
  timestamp: number;
  updatedTime: string;
  }
