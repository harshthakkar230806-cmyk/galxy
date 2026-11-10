export const CONSTANTS = {
  SAVE_VERSION: 1,
  AUTO_SAVE_INTERVAL: 10000,
  STARTING_CREDITS: 500,
  RESOURCE_VALUES: {
    IRON: { base: 10, name: 'Iron' },
    TITANIUM: { base: 25, name: 'Titanium' },
    COPPER: { base: 15, name: 'Copper' },
    ICE: { base: 5, name: 'Ice' },
    CRYSTAL: { base: 100, name: 'Crystal' },
    RARE_ELEMENT: { base: 500, name: 'Rare Element' },
  },
  SHIP_CLASSES: {
    scout: { name: 'Scout', cost: 200, cargo: 20, speed: 1.5, miningPower: 0.5, hull: 50, shields: 10, weapons: 0, description: 'Light reconnaissance vessel.' },
    mining_vessel: { name: 'Mining Vessel', cost: 800, cargo: 50, speed: 0.8, miningPower: 2.0, hull: 120, shields: 25, weapons: 0, description: 'Specialized for resource extraction.' },
    cargo_freighter: { name: 'Cargo Freighter', cost: 2500, cargo: 300, speed: 0.5, miningPower: 0.3, hull: 200, shields: 40, weapons: 5, description: 'Massive cargo capacity.' },
    explorer: { name: 'Explorer', cost: 3000, cargo: 100, speed: 2.0, miningPower: 0.8, hull: 80, shields: 20, weapons: 10, description: 'Long-range exploration ship.' },
    combat_ship: { name: 'Combat Ship', cost: 5000, cargo: 80, speed: 1.2, miningPower: 0.6, hull: 250, shields: 80, weapons: 30, description: 'Warship for defense.' }
  }
} as const;

export type ResourceType = keyof typeof CONSTANTS.RESOURCE_VALUES;
export const RESOURCE_KEYS = Object.keys(CONSTANTS.RESOURCE_VALUES) as ResourceType[];
export type ShipClass = keyof typeof CONSTANTS.SHIP_CLASSES;
