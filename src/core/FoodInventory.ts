export interface FoodItem {
  id: string;
  name: string;
  quantity: number;
  category: string;
}

export class FoodInventory {
  private inventory: FoodItem[] = [];

  addItem(
    name: string,
    quantity: number,
    category: string
  ): FoodItem {
    const item: FoodItem = {
      id: crypto.randomUUID(),
      name,
      quantity,
      category,
    };

    this.inventory.push(item);

    return item;
  }

  getInventory(): FoodItem[] {
    return this.inventory;
  }
}

export const foodInventory =
  new FoodInventory();
