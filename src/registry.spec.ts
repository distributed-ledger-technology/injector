
import { Animal } from "./demo/animal.ts"
import { Dog } from "./demo/dog.ts"
import { Registry } from "./registry.ts"
import { fail } from "https://deno.land/std@0.86.0/testing/asserts.ts";



Deno.test("should work without any errors when looking for my Dog", async () => {

    try {

        const registry = new Registry()
        registry.register(Dog)

        const myDog: Animal = new (registry.get('Dog'))(3)
        myDog.tellMeHowManyGoodiesDoYouLike()

    } catch (error) {

        fail(`I did not expect the following error: ${error.message}`)

    }

})


Deno.test("should throw an error when looking for a Cat in my registry", async () => {

    try {
        const registry = new Registry()
        registry.register(Dog)

        registry.get('Cat')
        fail("I would have expected an error / exception because I do not have a Cat")
    } catch (error) {
        // legitimate error
    }

})
