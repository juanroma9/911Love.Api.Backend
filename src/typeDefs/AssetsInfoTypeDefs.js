
const AssetsInfoTypeDefs = `#graphql

    # ******** Zona de las estructuras **********
    # Creamos las estructuras que se van a utilizar como tipos de datos personalizados, recuerda que en 
    # Graphql tenemos dos tipos de datos basicos 
    # Query -> Para ejecutar consultas 
    # Mutation -> Para hacer modificaciones como crear, actualizar o eliminar 

    type AssetInfo {
        consecutive:String,
        image:      String,
        tag:        String, # Idenfica donde se va a mostrar la imagen
        title:      String,
        subtitle:   String,
        price:      String
    }

    input AssetInfoInput {
        consecutive:String,
        image:      String,
        tag:        String,
        title:      String,
        subtitle:   String,
        price:      String
    }

    # La estructura "Query" define los campos que son consultables para el data source Assets. 
    type Query {
        # con el simblo ! indica que el parámetro es obligatorio.
        getAllAssetsByFilter(tag:String!):[AssetInfo]
    }

    type Mutation {
        createAsset(asset:AssetInfoInput):AssetInfo
    }
`

export default AssetsInfoTypeDefs;