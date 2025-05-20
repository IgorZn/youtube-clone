import Image from "next/image";
import {Button} from "@/components/ui/button";

export default function Home() {
    return (
        <div>
            <Image src={'./logo.svg'} alt={'Logo'} height={50} width={50}/>
            <p className={'text-xl font-semibold tracking-tight py-2'}>YouTube Clone</p>
        </div>
    );
}
