import GradientBackground from '@/components/GradientBackground'
import { SignUp } from '@clerk/nextjs'

export default function Page() {
    return (
        <GradientBackground>
            <SignUp />
        </GradientBackground>
    )
}