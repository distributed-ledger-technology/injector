# Injector

Dependency injection via dependency lookup as simple as it gets.

If you prefer the old school approach you might want to check

## Usage Example

```ts

import { Animal } from "https://deno.land/x/injector/src/demo//animal.ts" // for demo
import { Dog } from "https://deno.land/x/injector/src/demo//dog.ts" // for demo
import { Horse } from "https://deno.land/x/injector/src/demo/horse.ts" // for demo

import { Registry } from "https://deno.land/x/injector/mod.ts"

const registry = new Registry()

registry.register(Dog)
registry.register(Horse)

const myDog: Animal = new (registry.get('Dog'))(1)
myDog.tellMeHowManyGoodiesDoYouLike()

const myHorse: Animal = new (registry.get('Horse'))(2)
myHorse.tellMeHowManyGoodiesDoYouLike()


```


## Test it via your console

```sh
deno run https://deno.land/x/injector/src/demo/start-demo.ts
```