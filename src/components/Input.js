import { useState } from "react";

const Input = () => {
    const [toDo, setToDo] = useState("");

    return (
        <div>
            <input type="text"/>
        </div>
    )
};

export default Input;
