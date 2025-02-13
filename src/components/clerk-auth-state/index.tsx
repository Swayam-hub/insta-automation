import React from 'react'
import { ClerkLoading, SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Loader from '../global/loader'
import { Button } from '../ui/button'

const ClerkAuthState = () => {
  return (
<>
    <ClerkLoading>
        <Loader state>
            <></>
        </Loader>
    </ClerkLoading>
    <SignedOut>
        <SignInButton>
            <Button className='rounded-xl bg-[#252525] text-white hover:bg-[#252525]/70'>
                {/* <User /> */}
                Login
            </Button>
        </SignInButton>
    </SignedOut>
    <SignedIn>
        <UserButton>
            <UserButton.UserProfileLink label="Dashboard" url={`/dashboard`} labelIcon={"User"} />
        </UserButton>
    </SignedIn>
</>
  )
}

export default ClerkAuthState