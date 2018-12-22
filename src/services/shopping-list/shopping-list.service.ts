import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "angularfire2/database";

import { Item } from "../../models/item.model";

@Injectable()
export class ShoppingListService{

private shoppingListRef = this.db.list<Item>('shopping-list');

constructor(private db: AngularFireDatabase){}

    getShoppingList(){
        return this.shoppingListRef;
    }

    addItem(item: Item){
        return this.shoppingListRef.push(item);
    }
}