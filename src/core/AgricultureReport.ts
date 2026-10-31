import { farmRegistry } from "./FarmRegistry";
import { foodInventory } from "./FoodInventory";
import { communityGardens } from "./CommunityGardens";

export class AgricultureReport {
  generate() {
    return {
      farms: farmRegistry.getFarms().length,
      inventoryItems: foodInventory.getInventory().length,
      gardens: communityGardens.getGardens().length,
      generatedAt: new Date().toISOString(),
    };
  }
}

export const agricultureReport =
  new AgricultureReport();
