import { useState } from "react"
import { RatingValueType } from "../Rating"
import { Star } from "./Star"

export const UnControlledRating = () => {
    const [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    const setRating = (ratingValue: RatingValueType) => {
        setRatingValue(ratingValue)
    }
    const star: RatingValueType[] = [1, 2, 3, 4, 5]
    return (
        <div>
            {star.map((el, i) => <Star selected={ratingValue > i} id={el} key={el} callback={() => { setRating(el) }} />)}
        </div>
    )
}