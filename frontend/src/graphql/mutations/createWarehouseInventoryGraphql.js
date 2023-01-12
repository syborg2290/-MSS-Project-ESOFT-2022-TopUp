export const createWarehouseInventoryQuery = `
    mutation addWarehouseInventory(
        $id:String!,
        $qty:Float!,
        $material:String!
        ){
            addWarehouseInventory(
            id:$id,
            qty:$qty,
            material:$material
        ) {
            id
        }
    }`;
