export const getAllMaterialsQuery =  `
query getAllMaterials($test:String!){
    getAllMaterials(test: $test){
        id
        name
        description
        measurement_unit
        cost_pre_unit
    }
}`;