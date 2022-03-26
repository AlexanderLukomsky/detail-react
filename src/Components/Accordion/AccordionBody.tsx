import { UsersType } from "../../App"

type AccordionBodyType = {
    items: UsersType[]
    onClickHandler: (value: number) => void

}
export const AccordionBody = (props: AccordionBodyType) => {
    return (
        <ul>
            {
                props.items.map(i => <li onClick={(e) => { props.onClickHandler(i.value) }}
                    key={i.value} id={i.value.toString()}>
                    {i.title}
                </li>)
            }
        </ul>
    )
}