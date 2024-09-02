import { filters } from "../interfaces"
import { FiltersTypes } from '../interfaces/filters';

interface Props {
    handleFilter: (filter: FiltersTypes) => void
}



export const Filters = ({ handleFilter }: Props) => {

    const onChangeFilter = (e: React.MouseEvent<HTMLLIElement>, filter: FiltersTypes) => {
        e.preventDefault()
        handleFilter(filter)
    }

    return (
        <ul className="filters">
            {
                Object.entries(filters).map(([key, { literal, href }]) => {
                    return (
                        <li
                            key={key}
                            onClick={e => onChangeFilter(e, literal)}
                        >
                            <a href={href}>{key}</a>
                        </li>
                    )
                })
            }
        </ul>
    )
}
