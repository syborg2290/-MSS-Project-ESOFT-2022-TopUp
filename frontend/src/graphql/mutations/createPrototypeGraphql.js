export const createPrototypeQuery = `
    mutation createPrototype(
        $id:String!,
        $name:String!,
        $avg_duration:Float!,
        $time_unit:String!,
        $avg_cost:Float!,
        $materials:String!,
        ){
            createPrototype(
            id:$id,
            name:$name,
            avg_duration:$avg_duration,
            time_unit:$time_unit,
            avg_cost:$avg_cost,
            materials:$materials,
        ) {
            name
        }
    }`;
