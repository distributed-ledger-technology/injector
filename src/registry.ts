
export class Registry {

    private list = new Map()

    public register(classToBeRegistered: any) {
        this.list.set(classToBeRegistered.name, classToBeRegistered)
    }

    public get(className: string): any {
        return this.list.get(className)
    }

}

