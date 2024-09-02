export enum FiltersTypes {
    ALL = 'all',
    PENDING = 'pending',
    COMPLETED = 'completed'
}


export const filters = {
    Todos: {
        literal: FiltersTypes.ALL,
        href: `/?filter=${FiltersTypes.ALL}`
    },
    Pendientes: {
        literal: FiltersTypes.PENDING,
        href: `/?filter=${FiltersTypes.PENDING}`
    },
    Completado: {
        literal: FiltersTypes.COMPLETED,
        href: `/?filter=${FiltersTypes.COMPLETED}`
    }
} as const