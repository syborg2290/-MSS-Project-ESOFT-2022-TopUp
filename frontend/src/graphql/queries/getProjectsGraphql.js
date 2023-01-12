export const getAllProjectsQuery =  `
query getAllProjects($test:String!){
    getAllProjects(test: $test){
        id
        title
        factory
        description
        client
        estimation_budget
        estimation_duration
        duration_unit
        starting_date
    }
}`;