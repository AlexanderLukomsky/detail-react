import { UsersType } from "../../App"

type AccordionBodyType = {
    items: UsersType[]
}
export const AccordionBody = (props: AccordionBodyType) => {
    return (
        <ul>
            {props.items.map(i => <li key={i.value} id={i.value.toString()}>{i.title}</li>)}
        </ul>
    )
}