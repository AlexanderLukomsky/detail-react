import { RatingValueType } from "../Rating"

type StarType = {
    selected: boolean
    callback: (value: RatingValueType) => void
    value: RatingValueType
}
export const Star = ({ selected, ...props }: StarType) => {
    return (
        <span onClick={() => { props.callback(props.value) }}>
            {selected ? <b>Star </b> : <>Star </>}
        </span>
    )
}