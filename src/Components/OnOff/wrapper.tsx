import { useState } from "react"
import { OnOff } from "./OnOff"
export const OnOffWrapper = () => {
    const [on, setOn] = useState(false);
    const callback = (on: boolean) => { setOn(on) }
    return (
        <div>
            <OnOff on={on} setOn={callback} />
        </div>
    )
}