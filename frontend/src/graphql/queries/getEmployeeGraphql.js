export const getAllEmployeesQuery =  `
query getAllEmployees($test:String!){
    getAllEmployees(test: $test){
        id
        nic
        firstName
        middleName
        lastName
        nationality
        email
        gender
        dob
        previous_experience_years
        dateOfJoining
        terminatedDate
        deleted
        contactNo
        leaves
        getLeaves
        department
        position
        salary
        emergencyContactNo
        address
    }
}`;