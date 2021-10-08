# Dependency Injection

Dependency injection via dependency lookup as simple as it gets.

## Usage Example

```ts

import { Animal } from "https://deno.land/x/injector@v1.0.0/src/demo/animal.ts" // for demo
import { Dog } from "https://deno.land/x/injector@v1.0.0/src/demo/dog.ts" // for demo
import { Horse } from "https://deno.land/x/injector@v1.0.0/src/demo/horse.ts" // for demo

import { Registry } from "https://deno.land/x/injector@v1.0.0/mod.ts"

const registry = new Registry()

registry.register(Dog)
registry.register(Horse)

const myDog: Animal = new (registry.get('Dog'))(3)
myDog.tellMeHowManyGoodiesDoYouLike()

const myHorse: Animal = new (registry.get('Horse'))(2)
myHorse.tellMeHowManyGoodiesDoYouLike()


```


## Test it via your console

```sh

deno run https://deno.land/x/injector/src/demo/start-demo.ts

```


  
#### Further Details
If you want to check a project which uses this module, you might want to visit [Cash Services](https://github.com/distributed-ledger-technology/cash-services/blob/main/volatility-farmer/start-volatility-farmer.ts#L26-L37).  




If you e.g. prefer an annotation based approach check the [inject module](https://deno.land/x/inject).

