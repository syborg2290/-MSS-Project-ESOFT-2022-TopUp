export const getAllEmployeesReten2Query =  `
query getAllEmployeesThatRetireInNextYears($test:String!){
    getAllEmployeesThatRetireInNextYears(test: $test){
        ret
    }
}`;