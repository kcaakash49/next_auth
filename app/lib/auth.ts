import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
export const NEXT_AUTH ={
    providers: [
      CredentialsProvider({
        name: "Username",
        credentials: {
          username: {
            label: "Username",
            type: "text",
            placeholder: "Enter Username",
          },
          password: {
            label: "Password",
            type: "password",
            placeholder: "Enter Password",
          },
        },
        async authorize(credentials: any) {
          console.log(credentials);
          return {
            id: "User1",
            name: "Aakash KC",
            email: "kcaakash04",
          };
        },
      }),
      GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
      })
    ],
    secret: process.env.NEXTAUTH_URL,
    callbacks: {
      jwt: ({ token }:any) => {
        token.userid = token.sub;
        console.log(token);
        return token;
      },
      session: ({ token, session }: any) => {
        if (session && session.user) {
          session.user.id = token.userid;
        }
        return session;
      },
    },
  }