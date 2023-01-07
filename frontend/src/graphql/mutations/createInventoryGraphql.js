export const createInventoryQuery = `
    mutation addInventory(
        $id:String!,
        $unit:String!,
        $qty:Float!,
        $material:String!
        ){
            addInventory(
            id:$id,
            unit:$unit,
            qty:$qty,
            material:$material
        ) {
            id
        }
    }`;
