export interface DistributionRoute {
  id: string;
  destination: string;
  resourceType: string;
  quantity: number;
}

export class DistributionNetwork {
  private routes: DistributionRoute[] = [];

  createRoute(
    destination: string,
    resourceType: string,
    quantity: number
  ): DistributionRoute {
    const route: DistributionRoute = {
      id: crypto.randomUUID(),
      destination,
      resourceType,
      quantity,
    };

    this.routes.push(route);

    return route;
  }

  getRoutes(): DistributionRoute[] {
    return this.routes;
  }
}

export const distributionNetwork =
  new DistributionNetwork();
