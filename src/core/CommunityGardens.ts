export interface Garden {
  id: string;
  name: string;
  participants: number;
}

export class CommunityGardens {
  private gardens: Garden[] = [];

  createGarden(
    name: string
  ): Garden {
    const garden: Garden = {
      id: crypto.randomUUID(),
      name,
      participants: 0,
    };

    this.gardens.push(garden);

    return garden;
  }

  joinGarden(id: string) {
    const garden = this.gardens.find(
      g => g.id === id
    );

    if (garden) {
      garden.participants++;
    }

    return garden;
  }

  getGardens(): Garden[] {
    return this.gardens;
  }
}

export const communityGardens =
  new CommunityGardens();
