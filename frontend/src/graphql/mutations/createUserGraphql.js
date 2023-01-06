export const createUserQuery = `
    mutation createUser(
        $id:String!,
        $username:String!,
        $password:String!,
        $employeeId:String!,
        $role:String!
        ){
            createUser(
            id:$id,
            username:$username,
            password:$password,
            employeeId:$employeeId,
            role:$role,
        ) {
            username
        }
    }`;
