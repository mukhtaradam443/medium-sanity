import {createCurrentUserHook,createClient } from "next-sanity"
import createImageUrlBuilder from '@sanity/image-url'



export const config = {
   
    /**
     * find your project id and dataset in sanity.json in your studio project
     * There considered "public" but you can do use enviroment variable
     * if you want deffer between local dev and production 
     * 
     * https://nextjs.org/docs/basic-features/enviroment-variable 
    */
    
    dataset:process.env.NEXT_PUBLIC_SANITY_DATASET == "production",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    projectId: 'dq43qf97',  
    dataset: 'production',
    apiVersion: "2023-07-27",
    basePath: "/admin",
    useCdn: true,

    /**
     * Set useCdn to `false` if your application require the freshes possible
     * data always (potential slightly slower and bit more expensive)
     * Authenticaton request(like preveiw) will always bypass by cdn 
    */



    useCdn:process.env.NODE_ENV === "production",
}

//Set up the client for fatching data in the getProps function 
export const sanityClient = createClient(config)

/**
 * Set up a helper function for genereting Image URLs only the asset reference data in your  decument 
 * read more:https://www.sanity.io/docs/image-url  
 */
export const urlFor = (source) => createImageUrlBuilder(config).image(source)


//helper function for using the current logged in user account