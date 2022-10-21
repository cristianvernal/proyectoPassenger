import { Injectable } from '@angular/core';

import {Storage} from '@ionic/storage-angular';

const STORAGE_KEY = "mi lista";

@Injectable({
  providedIn: 'root'
})
export class DbServiceService {

  constructor(private storage: Storage) {

    this.init();
    
   }

   init(){
    this.storage.create();
   }

   getdata(){
    return this.storage.get(STORAGE_KEY) || [];
   }


   async addData(item){
      const storedData = await this.storage.get(STORAGE_KEY) || [];
      storedData.push(item);
      return this.storage.set(STORAGE_KEY, storedData);
   }

   async removeItem(index){
    const storedData = await this.storage.get(STORAGE_KEY) || [];
      storedData.splice(index, 1);
      return this.storage.set(STORAGE_KEY, storedData);
   }

}
