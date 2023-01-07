export const createExtraMaterialQuery = `
    mutation createExtraMaterial(
        $id:String!,
        $task:String!,
        $material:String!,
        $qty:Float!,
        $date:String!,
        ){
            createExtraMaterial(
            id:$id,
            task:$task,
            material:$material,
            qty:$qty,
            date:$date,
        ) {
            id
        }
    }`;
