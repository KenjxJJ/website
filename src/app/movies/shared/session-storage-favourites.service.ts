import {  Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

// key used for access of data in session storage
const STORAGE_KEY = 'session_list';

@Injectable()
export class SessionStorageFavouritesService {

constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}

storeOnSessionStorage(id: string, valueB: string): void {
      // get array of tasks from session storage
const currentData = this.storage.get(STORAGE_KEY) || [];

      // push new data to array
currentData.push({
       objectId : id,
       isLiked : valueB
      });

      // insert updated array to session storage
this.storage.set(STORAGE_KEY
            , currentData);

console.log(this.storage.get(STORAGE_KEY)
              || 'Session Storage is empty');
}

retriveFromSessionStorage() {
             return this.storage.get(STORAGE_KEY);
  }

clearAllSessionStorage() {
       return this.storage.remove(STORAGE_KEY);
}

clearAnItemFromSessionStorage(id: string) {
  if(this.storage.get(STORAGE_KEY) !== null) {
  const currentData = this.storage.get(STORAGE_KEY);
  let newCurrentData: any[];

  // search an id which to delete and remove through filter method
  newCurrentData = currentData.filter( s =>  s.objectId !== id ).map( s => s);
  // insert updated array to session storage
  this.storage.set(STORAGE_KEY
        , newCurrentData);

    } else {
      console.log('Session Storage is empty');
    }
  }
}
