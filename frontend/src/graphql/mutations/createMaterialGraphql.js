export const createMaterialQuery = `
    mutation createMaterial(
        $id:String!,
        $name:String!,
        $description:String!,
        $measurement_unit:String!,
        $cost_pre_unit:Float!,
        ){
            createMaterial(
            id:$id,
            name:$name,
            description:$description,
            measurement_unit:$measurement_unit,
            cost_pre_unit:$cost_pre_unit,
        ) {
            name
        }
    }`;
