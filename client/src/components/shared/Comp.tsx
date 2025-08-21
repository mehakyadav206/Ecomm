import type React from "react";
import { Button } from "../ui/button";
import type { ICompProps } from "@/types";

const Comp = (props: ICompProps) => {
    console.log(props.data);

    const handleClick = ({ age, name}: { age: number; name: string}) => {
        console.log(age, name);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
    };

    return (
        <div>
            Hello Comp
            <form onSubmit={handleSubmit}></form>
            <Button variant={"destructive"}
              onClick={() => handleClick({ age: 12, name: ""})}>
                Click Me
              </Button>
        </div>
    );
};

export default Comp;