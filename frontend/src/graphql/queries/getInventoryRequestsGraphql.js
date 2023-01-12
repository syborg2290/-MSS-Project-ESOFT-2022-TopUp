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
        }
    }
}`;