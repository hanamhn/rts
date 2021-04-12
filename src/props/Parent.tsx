import {ChildAsFC} from "./Child"


const Parent = () => {
    return (
        <ChildAsFC color="red" onClick={() => console.log('Click Me!')
        }>
            dasdasd
        </ChildAsFC>
    )
}

export default Parent
