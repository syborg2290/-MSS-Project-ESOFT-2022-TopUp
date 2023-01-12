export const createUnitMemberQuery = `
    mutation addUnitMember(
        $id:String!,
        $employeeId:String!,
        $unitId:String!,
        ){
            addUnitMember(
            id:$id,
            employeeId:$employeeId,
            unitId:$unitId,
        ) {
            employeeId

        }
    }`;
