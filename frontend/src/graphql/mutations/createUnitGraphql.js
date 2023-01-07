export const createUnitQuery = `
    mutation createUnit(
        $id:String!,
        $code:String!,
        $department:String!,
        ){
            createUnit(
            id:$id,
            code:$code,
            department:$department,
        ) {
            code

        }
    }`;
