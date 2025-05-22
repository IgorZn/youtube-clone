import React from 'react';
import {Button} from "@/components/ui/button";
import {UserCircleIcon} from "lucide-react";

function AuthButton(props: object) {
    // TODO: add different auth methods
    return (
        <Button className={'pk-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-500 border-blue-600/20 rounded-full shadow-none'} variant={'outline'}>
            <UserCircleIcon />
            Sign In
        </Button>
    );
}

export default AuthButton;