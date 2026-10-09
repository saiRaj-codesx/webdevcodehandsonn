interface Fish {
  swim(): void;
}
interface Bird {
  fly(): void;
}

function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function identifyMove(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

const surmai: Fish = {
  swim() {
    console.log(" surmai is swimming");
  },
};

const parrot: Bird = {
  fly() {
    console.log(" parrot is flying");
  },
};

identifyMove(surmai);
