export const getAllEmployeesReten1Query =  `
query getAllEmployeesThatRetireInNextYear($test:String!){
    getAllEmployeesThatRetireInNextYear(test: $test){
        count
        presentage
    }
}`;