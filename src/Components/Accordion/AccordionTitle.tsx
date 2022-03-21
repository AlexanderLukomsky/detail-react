type AccordionTitleType = {
    title: string
    onChange: () => void
}
export const AccordionTitle = (props: AccordionTitleType) => {
    return (
        <h3 onClick={props.onChange}>
            {props.title}
        </h3>
    )
} 