type Car = {
  make: string;
  model: string;
  year: number;
  mileage: number;
};
type Mileage = {
  averageMileage: number;
  highestMileageCar: Car;
  lowestMileageCar: Car;
  totalMileage: number;
};

export function analyzeCarMileage(cars: Car[]): Mileage {
  return {
    averageMileage: 0,
    highestMileageCar: cars[0],
    lowestMileageCar: cars[0],
    totalMileage: 0,
  };
}
