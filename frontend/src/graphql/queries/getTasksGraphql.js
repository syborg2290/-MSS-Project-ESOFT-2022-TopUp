export const getAllTasksQuery =  `
query getAllTasks($test:String!){
    getAllTasks(test: $test){
        id
        task{
            id
            title
            taskstatus
            progress
            supervisor
            induvidualOrUnit
            start_time
            finished_time
        }
        project{
            id
            title
            factory
        }
        unit{
            id
            code
        }
        employee{
            id
            firstName
            lastName
        }
        prototype{
            id
            name
            avg_duration
            avg_cost
            materials
        }
    }
}`;