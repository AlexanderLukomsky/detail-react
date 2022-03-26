import { useState } from "react"
import { RatingValueType } from "../Rating/Rating"
export type PropsType = {
    defaultRating: RatingValueType
}
export const UnControlledRating = (props: PropsType) => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(props.defaultRating)
    const setRating = (ratingValue: RatingValueType) => {
        setRatingValue(ratingValue)
    }
    const star: RatingValueType[] = [1, 2, 3, 4, 5]
    return (
        <div>
            {star.map((el, i) =>
                <span id={el.toString()} key={el}
                    onClick={() => { setRating(el) }}>
                    {ratingValue > i ? <b>Star </b> : <>Star </>}
                </span>)}
        </div>
    )
}

