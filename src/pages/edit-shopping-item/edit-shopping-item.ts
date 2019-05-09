import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Item } from './../../models/item.model';
import { ShoppingListService } from '../../services/shopping-list/shopping-list.service';
import { ToastService } from '../../services/toast/toast.service';

@IonicPage()
@Component({
  selector: 'page-edit-shopping-item',
  templateUrl: 'edit-shopping-item.html',
})
export class EditShoppingItemPage {
  item:Item;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private shopping: ShoppingListService,
    private toast: ToastService
    ) {}

  ionViewWillLoad() {
    //console.log('ionViewDidLoad EditShoppingItemPage');
    //console.log(this.navParams.get('item'));
    this.item = this.navParams.get('item');
  } 

  saveItem(item: Item) {
    this.shopping.editItem(item).then(() => {
      this.toast.show('Item saved!');
      this.navCtrl.setRoot('HomePage');
    });
  }

}
