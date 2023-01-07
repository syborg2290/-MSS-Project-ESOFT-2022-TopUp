export const getAllPrototypesQuery =  `
query getAllPrototypes($test:String!){
    getAllPrototypes(test: $test){
        id
        name
        avg_duration
        time_unit
        avg_cost
        materials
    }
}`;