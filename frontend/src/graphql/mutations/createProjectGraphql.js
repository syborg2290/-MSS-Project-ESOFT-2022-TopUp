export const createProjectQuery = `
    mutation createProject(
        $id:String!,
        $title:String!,
        $factory:String!,
        $description:String!,
        $client:String!,
        $estimation_budget:Float!,
        $estimation_duration:Float!,
        $duration_unit:String!,
        $starting_date:String!,
        ){
            createProject(
            id:$id,
            title:$title,
            factory:$factory,
            description:$description,
            client:$client,
            estimation_budget:$estimation_budget,
            estimation_duration:$estimation_duration,
            duration_unit:$duration_unit,
            starting_date:$starting_date,
        ) {
            title

        }
    }`;
