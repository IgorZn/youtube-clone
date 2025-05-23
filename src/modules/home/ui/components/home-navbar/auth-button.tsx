import React from 'react'
import { Button } from '@/components/ui/button'
import { UserCircleIcon } from 'lucide-react'
import Link from 'next/link'

import { SignInButton, SignUpButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

function AuthButton(props: object) {
  // TODO: add different auth methods
  return (
    <>
      <SignedIn>
        <UserButton />
        {/* Add menu */}
      </SignedIn>
      <SignedOut>
        <SignInButton mode={'modal'}>
          <Button
            className={
              'pk-4 rounded-full border-blue-600/20 py-2 text-sm font-medium text-blue-600 shadow-none hover:text-blue-500'
            }
            variant={'outline'}>
            <UserCircleIcon />
            Sign In
          </Button>
        </SignInButton>
      </SignedOut>
    </>
  )
}

export default AuthButton
