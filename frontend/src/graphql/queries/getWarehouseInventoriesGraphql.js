export const getAllWarehouseInventroiesQuery =  `
query getAllWarehouse($test:String!){
    getAllWarehouse(test: $test){
        id
        qty
        material{
            id
            name
            measurement_unit
            cost_pre_unit
        }
    }
}`;