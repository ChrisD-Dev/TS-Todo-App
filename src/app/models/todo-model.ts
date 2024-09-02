import { uuidAdapter } from "../../config/uuid.adapter";

type Props = TodoModelProps

export type TodoModelProps = {
    id?: string,
    description: string,
    done?: boolean
}


export class TodoModel {

    private id: string
    private description: string
    private done: boolean

    constructor({ id = uuidAdapter.uuid(), description, done = false }: Props) {
        this.id = id
        this.description = description
        this.done = done
    }

    public getId(): string {
        return this.id;
    }

    public getDescription(): string {
        return this.description;
    }

    public isDone(): boolean {
        return this.done;
    }

    public setDone() {
        this.done = !this.done
    }

    public setDescription(newDescription: string) {
        this.description = newDescription
    }
}