# Dependency Injection

This module can be used to prepare for dynamic dependency injection - e.g. via [constructor injection](https://github.com/distributed-ledger-technology/cash-services/blob/main/volatility-farmer/start-volatility-farmer.ts#L26-L37). 


## Usage Example

```ts
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
```


## Test it via your Console

```sh
deno run https://deno.land/x/injector/src/demo/start-demo.ts
```
## Trigger Unit Tests via your Console

```sh
deno test https://deno.land/x/injector/src/registry.spec.ts
```


## Donations
Thanks to [Freedom Cash](https://FreedomCash.org), we are already free.  
If you want to donate, you might consider donating to the [otherparty.co.uk](https://www.otherparty.co.uk/donate-crypto-the-other-party) to ensure people do not need to donate to victims but rather donate successfully to problem solvers.   
  
![direct-democracy](https://github.com/michael-spengler/sleep/assets/145258627/fe97b7da-62b4-4cf6-9be0-7b03b2f3095a)
