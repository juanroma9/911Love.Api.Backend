import HeroSliderSchema from '../models/Schemas/hero_slider_schema.js';

const HeroSliderResolver = {
    Query : {
        getAllHeroSliders : async () => {
            const heroSliders = await HeroSliderSchema.find()
            return heroSliders
        }
    }, 
    Mutation : {
        createHeroSlider : async (_, args) => {
            console.log("LLega acá")
            console.log(args.heroSlider)
            const {consecutive, title, subtitle, image, url} = args.heroSlider
            
            const new_heroSlider = new HeroSliderSchema({consecutive, title, subtitle, image, url})
            await new_heroSlider.save()
            return new_heroSlider
        },
        deleteHeroSlider : async (_, {id}) => {
            const deleted_heroSlider = await HeroSliderSchema.findByIdAndDelete(id)
            return deleted_heroSlider
        },
        updateHeroSlider : async (_, {id, heroSlider}) => {
            const heroSlider_updated = await HeroSliderSchema.findByIdAndUpdate(id, heroSlider)
            return heroSlider_updated
        }
    }
}

export default HeroSliderResolver;