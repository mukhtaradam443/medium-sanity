// export default {
//     name :"comment",
//     type:"document",
//     title:"Comment",
//     fields:[
//         {
        //     name:"name",
        //     type:"string",
        // },
        // // {
        //     title:"approved",
        //     name:"approved",
        //     type:"boolean",
        //     description: "comment won't show on the site without approval",
        // },
        // {
        //     name:"email",
        //     type:"string",
        // },
        // {
        //     name:"comment",
        //     type:"text",
    //     },
    //     {
    //         name:"post",
    //         type:"reference",
    //         to:[{type:"post"}],
    //     },
    // ],

// }
import {defineField, defineType} from 'sanity'
export default defineType({
    name :"comment",
    type:"document",
    title:"Comment",
    fields: [
      defineField({
        name:"name",
        type:"string",
      }),
      defineField({
        title:"approved",
        name:"approved",
        type:"boolean",
        description: "comment won't show on the site without approval",
      }),
      defineField({
        name:"email",
        type:"string",
      }),
        defineField({
         name:"comment",
        type:"text",
      }),
      defineField({
        name:"post",
        type:"reference",
        to:[{type:"post"}],
     }),
    ]  

})
