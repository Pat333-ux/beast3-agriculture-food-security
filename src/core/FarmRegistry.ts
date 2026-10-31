export interface Farm {
  id: string;
  name: string;
  location: string;
  status: "active" | "inactive";
  createdAt: string;
}

export class FarmRegistry {
  private farms: Farm[] = [];

  registerFarm(
    name: string,
    location: string
  ): Farm {
    const farm: Farm = {
      id: crypto.randomUUID(),
      name,
      location,
      status: "active",
      createdAt: new Date().toISOString(),
    };

    this.farms.push(farm);

    return farm;
  }

  getFarms(): Farm[] {
    return this.farms;
  }
}

export const farmRegistry =
  new FarmRegistry();
