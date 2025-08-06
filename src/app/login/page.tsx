"use client";
import { Button } from '@/components/Button';

export default function Login() {
    return (
        <section className='h-screen w-full'>
            <div className='flex flex-col items-center justify-center h-full w-full sm:w-[400px] mx-auto gap-4'>
                <Button variant='primary' underline={false} href="/auth/login?screen_hint=signup">
                    Sign up
                </Button>
                <Button variant='secondary' underline={false} href="/auth/login">
                    Log in
                </Button>
            </div>
        </section>
    );
}