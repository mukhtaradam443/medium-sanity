"use-client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function AdminPage() {
    return <NextStudio config={config} />
}

// "use client";

// import  Config  from "@/sanity.config";

// import { NextStudio } from "next-sanity/studio";


// export default function adminPage(){
//     return <NextStudio config={Config}/>
// }