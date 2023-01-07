export const getAllInventroiesQuery =  `
query getAllInventory($test:String!){
    getAllInventory(test: $test){
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
}`;