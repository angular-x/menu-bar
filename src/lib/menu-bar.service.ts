import { Injectable } from "@angular/core";

// PrimeNG Modules
import { MenuItem } from "primeng/api";

@Injectable({
  providedIn: 'root',
})
export class MenuBarService {
  public get items(): MenuItem[] {
    return this.#items;
  }

  #items: MenuItem[] = [];

  setItems(items: MenuItem[]) {
    this.#items = items;
  }
}