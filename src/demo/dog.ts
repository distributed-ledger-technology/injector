import { Animal } from "./animal.ts"

export class Dog implements Animal {

    public wantsXGoodies: number

    public constructor(wantsXGoodies: number) {
        this.wantsXGoodies = wantsXGoodies
    }

    public tellMeHowManyGoodiesDoYouLike() {

        let counter = 0
        let message = ""

        while (counter < this.wantsXGoodies) {
            message = `${message}wuff `
            counter++
        }

        console.log(message)
    }
}