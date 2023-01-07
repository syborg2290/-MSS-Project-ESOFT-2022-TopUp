export const updateTaskSatusQuery = `
    mutation updateTaskStatus(
        $id:String!,
        $newStatus:String!
        ){
            updateTaskStatus(
            id:$id,
            newStatus:$newStatus,
        ) {
            id
        }
    }`;
