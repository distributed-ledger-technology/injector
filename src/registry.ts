
export class Registry {

    private list = new Map()

    public register(classToBeRegistered: any) {
        this.list.set(classToBeRegistered.name, classToBeRegistered)
    }

    public get(className: string): any {
        const classFromRegistry = this.list.get(className)
        if (classFromRegistry === undefined) {
            throw new Error(`I could not find ${className} in ${this.constructor.name}`)
        }

        return
    }

}

