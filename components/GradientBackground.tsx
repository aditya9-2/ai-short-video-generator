import React from 'react';
import { cn } from '@/lib/utils';

export default function GradientBackground({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                'relative min-h-screen w-full bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-300 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-700 transition-colors duration-500',
                className
            )}
        >
            {/* Optional light source / glow at bottom */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-black/20 dark:from-white/10 to-transparent blur-3xl" />

            {/* Main content centered */}
            <div className="relative z-10 flex flex-col justify-center items-center min-h-screen">
                {children}
            </div>
        </div>
    );
}
