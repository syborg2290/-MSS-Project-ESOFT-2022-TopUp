export const getAssetMetaQuery = `
    query findAssetById($id:String!){
        findAssetById(id: $id) {
            id
            name
            description
            archived
            fileName
        }
    }`;
