
interface Vehicle {
    brand: string;
    speed: number;
    
    accelerate(): void;
    brake(): void; // New method declaration
}

const car: Vehicle = {
    brand: "Toyota",
    speed: 120,
    accelerate(): void {
        console.log(`The ${this.brand} is accelerating`);
    },
    brake(): void {
        console.log(`The ${this.brand} is braking`); // Implementation of the brake method
    }
}

car.accelerate();
car.brake(); // Calling the brake method