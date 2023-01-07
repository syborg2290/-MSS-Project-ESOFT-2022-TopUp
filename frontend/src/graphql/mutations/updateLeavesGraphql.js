export const updateLeavesQuery = `
    mutation employeeLeavesUpdate(
        $id:String!,
        ){
            employeeLeavesUpdate(
            id:$id,
        ) {
            id
        }
    }`;
