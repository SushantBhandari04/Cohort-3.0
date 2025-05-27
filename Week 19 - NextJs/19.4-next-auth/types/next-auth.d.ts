import 'next-auth'

declare module 'next-auth' {
    interface User{
        id?: string
        isVerified?: boolean
        isAcceptingMessages?: boolean
        email?: string
    }
    interface Session{
        user: {
            id?: string
            isVerified?: boolean
            isAcceptingMessages?: boolean
            email?: string
        }
    }
}

declare module 'next-auth/jwt'{
    interface JWT{
        id?: string
        isVerified?: boolean
        isAcceptingMessages?: boolean
        email?: string
    }
}