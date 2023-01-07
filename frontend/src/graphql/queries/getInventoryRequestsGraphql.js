export const getAllInventoryRequestQuery =  `
query getAllWarehouseRe($test:String!){
    getAllWarehouseRe(test: $test){
        id
        qty
        date
        inventory{
            id
            unit
            qty
            material{
                id
                name
                measurement_unit
                cost_pre_unit
            }
        }
    }
}`;