import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <Button>Button</Button>
            <p className={'text-emerald-500 font-bold'}>Hello World!</p>
        </div>
    );
}
