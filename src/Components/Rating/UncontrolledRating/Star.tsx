type StarType = {
    selected: boolean
    id: number
    callback: () => void
}
export const Star = ({ selected, ...props }: StarType) => {

    return (
        <span onClick={props.callback}>
            {selected ? <b>Star </b> : <>Star </>}
        </span>
    )
}