const HeroSliderTypeDefs = `#graphql

    type HeroSlider  {
        id:             ID, 
        consecutive:    String,
        title:          String,
        subtitle:       String,
        image:          String,  
        url:            String
    }

    #En Mongo se pueden definir tipos de datos para evitar estar nombrando los campos uno a uno
    input HeroSliderInput {        
        consecutive:    String,
        title:          String,
        subtitle:       String,
        image:          String,  
        url:            String
    }

    # La estructura "Query" define los campos que son consultables para el data source banner. 
    type Query {
        getAllHeroSliders: [HeroSlider]
    }

    type Mutation {
        createHeroSlider(heroSlider:HeroSliderInput): HeroSlider

        deleteHeroSlider(id:ID):String
        # con el simblo ! indica que el parámetro es obligatorio.
        updateHeroSlider(id:ID!, heroSlider:HeroSliderInput): HeroSlider
    }  
`
export default HeroSliderTypeDefs;