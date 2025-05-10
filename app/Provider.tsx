"use client"

import { users } from "@/configs/schema";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";
import { db } from "@/configs/db";
import { eq } from "drizzle-orm";

export const Provider = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {

    const { user } = useUser();

    useEffect(() => {
        if (user) {
            const isNewUser = async () => {
                const clerkEmail = user?.primaryEmailAddress?.emailAddress;
                if (!clerkEmail) return;

                const result = await db.select().from(users).where(eq(users.email, clerkEmail))

                if (!result[0]) {
                    await db.insert(users).values({
                        username: user.username || "",
                        email: clerkEmail,
                        imageUrl: user.imageUrl
                    })
                }
            }
            isNewUser();
        }
    }, [user])

    return (
        <div>{children}</div>
    )
}