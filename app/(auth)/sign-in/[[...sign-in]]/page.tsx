import GradientBackground from '@/components/GradientBackground'
import { SignIn } from '@clerk/nextjs'

export default function Page() {
    return (
        <GradientBackground>
            <SignIn />
        </GradientBackground>
    )
}