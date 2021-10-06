import { Animal } from "https://deno.land/x/injector@v0.0.1/src/demo/animal.ts"
import { Dog } from "https://deno.land/x/injector@v0.0.1/src/demo/dog.ts"
import { Horse } from "https://deno.land/x/injector@v0.0.1/src/demo/horse.ts"

import { Registry } from "https://deno.land/x/injector/mod.ts"

const registry = new Registry()

registry.register(Dog)
registry.register(Horse)

const myDog: Animal = new (registry.get('Dog'))(3)
myDog.tellMeHowManyGoodiesDoYouLike()

const myHorse: Animal = new (registry.get('Horse'))(2)
myHorse.tellMeHowManyGoodiesDoYouLike()
