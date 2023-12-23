# LESSONS 

- Next.js Tutorial - 66 - Authentication Section Intro
- Next.js Tutorial - 67 - Authentication in Next.js
- Next.js Tutorial - 68 - NextAuth Setup
- Next-Auth on App Router - Solid Auth, Super Fast


## NEXT AUTH 

### Install

    npm i next-auth

### Need to reset an Oauth app

Here we used GitHub Oauth app at `profile > developer settings > apps > Oauth App`
This is directional, it may not be exact

### Add an api handler for it 

`api\auth\[...nextauth]\route.ts`

    import NextAuth from 'next-auth'
    import GithubProvider from 'next-auth/providers/github'

    export const authOptions = {
        providers: [
            GithubProvider({
                clientId: process.env.GITHUB_CLIENT_ID ?? "",
                clientSecret: process.env.GITHUB_CLIENT_SECRET ?? "",
            })
        ]
    }

    const handler = NextAuth(authOptions)

    export { handler as GET, handler as POST }

### Available endpoints from (from next-auth)

From the handler we just setup we get some useful endpoints 

- `/api/auth/providers`: json response. Lists the providers we have.
- `/api/auth/signin`: 

