import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import  { Item } from 'app/main/addcategories/item';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private dbPath = '/videoList';

  tutorialsRef: AngularFireList<Item> = null;

  constructor(private db: AngularFireDatabase) {
    this.tutorialsRef = db.list(this.dbPath);
  }

  getAll(): AngularFireList<Item> {
    return this.tutorialsRef;
  }

  create(tutorial: Item, key: string): any {
    return this.tutorialsRef.push(tutorial);
  }

  update(key: string, value: any): Promise<void> {
    return this.tutorialsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.tutorialsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.tutorialsRef.remove();
  }
}
