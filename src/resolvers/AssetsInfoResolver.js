import AssetsInfo from '../models/Schemas/AssetsInfo.js';

const AssetsInfoResolver = {
    Query: {
        getAllAssetsByFilter : async (_,args) => {
            console.log(args)
            const {tag} = args
            console.log("*** getAllAssetsByFilter ***")
            console.log("Tag --> " + tag);
            const assets = await AssetsInfo.find({ tag: { $eq: tag } });
            console.log("Paso --> ");
            console.log(assets)
            return assets
        }
    }, 
    Mutation: {
        // Los parámetros que siempre se van a pasar son parent, args, context, info.
        // ejemplo createBanner : async (parent, args, context, info ) => 
        createAsset : async (_, args) => {
            console.log(args.asset)
            const {consecutive, image,  tag, title, subtitle, price} = args.asset
            const new_asset = new AssetsInfo({consecutive, image,  tag, title, subtitle, price})
            await new_asset.save()
            return new_asset
        }
    }
}

export default AssetsInfoResolver;