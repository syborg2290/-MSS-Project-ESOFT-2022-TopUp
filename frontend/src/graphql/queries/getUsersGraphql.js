export const getAllUsersQuery =  `
query getAllUsers($test:String!){
    getAllUsers(test: $test){
        id
        username
        role
        employee {
            contactNo
            department
            position
        }
    }
}`;