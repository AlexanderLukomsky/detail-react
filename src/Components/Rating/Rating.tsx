import { Star } from "./Star/Star"
export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingType = {
    value: RatingValueType
    callback: (value: RatingValueType) => void
}
export const Rating = (props: RatingType) => {
    return (
        <div>
            {<Star selected={props.value > 0} value={1} callback={props.callback} />}
            {<Star selected={props.value > 1} value={2} callback={props.callback} />}
            {<Star selected={props.value > 2} value={3} callback={props.callback} />}
            {<Star selected={props.value > 3} value={4} callback={props.callback} />}
            {<Star selected={props.value > 4} value={5} callback={props.callback} />}
        </div>
    )
}