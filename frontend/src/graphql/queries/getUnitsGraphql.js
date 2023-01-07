export const getAllUnitsQuery =  `
query getAllUnits($test:String!){
    getAllUnits(test: $test){
        id
        code
        department
    }
}`;