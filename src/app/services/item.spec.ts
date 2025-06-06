import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Item } from '../models/item.model'; // Define tu modelo de datos

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  constructor(private firestore: AngularFirestore) {}

  // Obtiene todos los items
  getItems() {
    return this.firestore.collection('items').valueChanges();
  }

  // Agrega un item
  addItem(item: Item) {
    return this.firestore.collection('items').add(item);
  }

  // Actualiza un item existente
  updateItem(id: string, item: Item) {
    return this.firestore.doc(items/${id}).update(item);
  }

  // Elimina un item
  deleteItem(id: string) {
    return this.firestore.doc(items/${id}).delete();
  }
}