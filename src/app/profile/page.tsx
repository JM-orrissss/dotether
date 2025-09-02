import { Button } from '@/components/Button';
import { SignedIn, SignedOut, SignInButton, SignOutButton, SignUpButton } from '@clerk/nextjs';
import React from 'react';

export default async function Profile() {

    return (
        <section className='h-screen w-full flex flex-col items-center justify-center gap-4'>
            <SignedOut>
                <SignInButton>
                    <Button variant='secondary' underline={false} href={''}>
                        Log in
                    </Button>
                </SignInButton>
                <SignUpButton>
                    <Button variant='primary' underline={false} href={''}>
                        Sign up
                    </Button>
                </SignUpButton>
            </SignedOut>
            <SignedIn>
                <SignOutButton>
                    <Button variant='primary' underline={false} href={''}>
                        Sign out
                    </Button>
                </SignOutButton>
            </SignedIn>
        </section>
    )
}