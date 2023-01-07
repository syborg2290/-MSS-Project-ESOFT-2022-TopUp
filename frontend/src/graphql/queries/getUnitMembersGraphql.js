export const getAllUnitMembersQuery =  `
query getAllUnitMembers($test:String!){
    getAllUnitMembers(test: $test){
        id
        unit{
            code
            department
        }
        employee{
            nic
            contactNo
            firstName
            middleName
            lastName
            department
            position
        }
    }
}`;