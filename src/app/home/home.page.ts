import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private storage: StorageService//Declare for use in constructor
  ) {

  }

  ngOnInit() { }

  /**
   * Add an item to storage
   */
  setName() {
    this.storage.set('userName', 'Tom');
  }

  /**
   * Retreive an item from storage
   */
  async getName() {
    let userName = await this.storage.get('userName');
    alert(userName);
  }

  /**
   * Remove an item from storage
   */
  removeName() {
    this.storage.remove('userName');
  }

  /**
   * Clear everything from storage
   */
  clearAll() {
    this.storage.clear();
  }
}
