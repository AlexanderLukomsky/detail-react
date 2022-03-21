type AccordionTitleType = {
    title: string
    callback: () => void
}
export const AccordionTitle = ({ callback, title, ...props }: AccordionTitleType) => {
    return (
        <h3 onClick={callback}>
            {title}
        </h3>
    )
} 