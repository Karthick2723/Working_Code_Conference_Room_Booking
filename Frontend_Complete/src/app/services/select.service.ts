import { Injectable } from '@angular/core';
// import { Floor } from '../TsFiles/floor';
// import { Room } from '../TsFiles/room';

@Injectable({
  providedIn: 'root'
})
export class SelectService {

  constructor() { }

  getFloor(){
    return[
      {
        id:1,
        name:"Floor-1"
      },
      {
        id:2,
        name:"Floor-2"
      }
  ];
  }

  getRoom(){
    return[
      {
        id:1,
        name:"Room-1"
      },
      {
        id:1,
        name:"Room-2"
      },
      {
        id:2,
        name:"Room-3"
      },
      {
        id:2,
        name:"Room-4(Cafeteria)"
      }
    ]
  }
    


}
