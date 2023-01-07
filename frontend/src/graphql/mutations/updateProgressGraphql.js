export const updateTaskProgressQuery = `
    mutation updateTaskProgress(
        $id:String!,
        $progresss:Float!
        ){
            updateTaskProgress(
            id:$id,
            progresss:$progresss,
        ) {
            id
        }
    }`;
