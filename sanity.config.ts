import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import author from './sanity/schema/author'
import post from './sanity/schema/post'
import category from './sanity/schema/category'
import blockContent from './sanity/schema/blockContent'
import comment from './sanity/schema/comment'


export default defineConfig({
  name: 'default',
  title: 'm-sanity',

  projectId: 'dq43qf97',
  dataset: 'production',
  apiVersion: "2023-07-27",
  basePath: "/admin", 
  useCdn: true,
  
  basepath: './studio',


  plugins: [deskTool()],

  schema: {
    types: [author, post, category, blockContent,comment],
  },
})
