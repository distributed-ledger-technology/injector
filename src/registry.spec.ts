
import { Animal } from "https://deno.land/x/injector@v1.0.0/src/demo/animal.ts" // for demo
import { Dog } from "https://deno.land/x/injector@v1.0.0/src/demo/dog.ts"
import { Registry } from "https://deno.land/x/injector@v1.0.0/mod.ts"
import { fail } from "https://deno.land/std@0.86.0/testing/asserts.ts";

const registry = new Registry()

registry.register(Dog)

Deno.test("should work without any errors when looking for my Dog", async () => {

    try {

        const myDog: Animal = new (registry.get('Dog'))(3)
        myDog.tellMeHowManyGoodiesDoYouLike()

    } catch (error) {

        fail(`I would not have expected the following error: ${error.message}`)

    }

})


Deno.test("should throw an error when looking for a Cat in my registry", async () => {

    try {
        registry.get('Cat')
        fail("I would have expected an error / exception because I do not have a Cat")
    } catch (error) {
        // legitimate error
    }

})
