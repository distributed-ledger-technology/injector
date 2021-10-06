
import { Animal } from "./animal.ts"
import { Dog } from "./dog.ts"
import { Horse } from "./horse.ts"
import { Registry } from "../registry.ts"

const registry = new Registry()

registry.register(Dog)
registry.register(Horse)

const myDog: Animal = new (registry.get('Dog'))(1)
myDog.tellMeHowManyGoodiesDoYouLike()

const myHorse: Animal = new (registry.get('Horse'))(2)
myHorse.tellMeHowManyGoodiesDoYouLike()