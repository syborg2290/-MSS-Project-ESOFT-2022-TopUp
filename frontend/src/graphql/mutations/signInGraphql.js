export const SignInQuery = `
    mutation signIn(
        $username:String!,
        $password:String!
        ){
            signIn(
            username:$username,
            password:$password
        ) {
            status
            message
            token
        }
    }`;
