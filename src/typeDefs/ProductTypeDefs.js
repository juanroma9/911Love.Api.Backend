const ProductTypeDefs = `#graphql 

    # ******** Zona de las estructuras **********
    # Creamos las estructuras que se van a utilizar como tipos de datos personalizados, recuerda que en 
    # Graphql tenemos dos tipos de datos basicos 
    # Query -> Para ejecutar consultas 
    # Mutation -> Para hacer modificaciones como crear, actualizar o eliminar 

    type Product {
        id:              ID,      #Estos tipos de datos pertennecen a GraphQL type system
        consecutive:     Int,   
        name:            String,
        sku:             String,
        price:           Float,
        discount:        Int,
        offerEnd:        Int,
        is_new:          Boolean,
        rating:          Int,
        salecount:       Int,
        stock:           Int,
        category:        [String],
        tag:             [String],
        variation:       String, # Con arreglo puedo conocer las variaciones como tamaños o colores: Ojo: Recuerda validar si usas el tipo de Map de Mongo
        image:           [String], # Este es un arreglos de rutas de las imagenes que se tienen de ese producto
        shortDescription:String,
        fullDescription: String,
        createDate:      String,
        updateDate:      String
    }

    input ProductInput {
        consecutive:     Int!,   
        name:            String!,
        sku:             String,
        price:           Float!,
        discount:        Int,
        offerEnd:        Int,
        is_new:          Boolean,
        rating:          Int,
        salecount:       Int,
        stock:           Int!,
        category:        [String]!,
        tag:             [String],
        variation:       String, # Con arreglo puedo conocer las variaciones como tamaños o colores: Ojo: Recuerda validar si usas el tipo de Map de Mongo
        image:           [String], # Este es un arreglos de rutas de las imagenes que se tienen de ese producto
        shortDescription:String!,
        fullDescription: String,
        updateDate:      String!
    }

    # La estructura "Query" define los campos que son consultables para el data source Products
    type Query {
        getAllProducts:[Product]
        getProductsByCategory(category:String!):[Product]
    }

    type Mutation {
        createProduct(item:ProductInput):Product
        updateProduct(id:ID!, item:ProductInput):Product
    }
`

export default ProductTypeDefs;