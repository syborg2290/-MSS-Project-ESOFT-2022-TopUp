export const createTaskQuery = `
    mutation addTask(
        $id:String!,
        $title:String!,
        $description:String!,
        $taskstatus:String!,
        $progress:Float!,
        $supervisor:String!,
        $induvidualOrUnit:String!,
        $project:String!,
        $unit:String!,
        $employee:String!,
        $prototype:String!,
        $start_time:String!,
        $finished_time:String!
        ){
            addTask(
            id:$id,
            title:$title,
            description:$description,
            taskstatus:$taskstatus,
            progress:$progress,
            supervisor:$supervisor,
            induvidualOrUnit:$induvidualOrUnit,
            project:$project,
            unit:$unit,
            employee:$employee,
            prototype:$prototype,
            start_time:$start_time,
            finished_time:$finished_time,
        ) {
            title
        }
    }`;
