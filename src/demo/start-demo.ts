import { Animal } from "https://deno.land/x/injector@v1.3.0/src/demo/animal.ts" // for demo
import { Dog } from "https://deno.land/x/injector@v1.3.0/src/demo/dog.ts" // for demo
import { Horse } from "https://deno.land/x/injector@v1.3.0/src/demo/horse.ts" // for demo

import { Registry } from "https://deno.land/x/injector@v1.3.0/mod.ts"

const registry = new Registry()

registry.register(Dog)
registry.register(Horse)

const myDog: Animal = new (registry.get('Dog'))(3)
myDog.tellMeHowManyGoodiesDoYouLike()

const myHorse: Animal = new (registry.get('Horse'))(2)
myHorse.tellMeHowManyGoodiesDoYouLike()