import {Metadata} from "next";
import {PageNewsPaper} from "@/components/app/pages/PageNewsPaper/PageNewsPaper";


export const metadata: Metadata = {
    title: 'Статьи об выгодных займах',
    description: 'Самые выгодные условия',
}

export default function NewsPaper() {


    return (
       <div style={{justifyContent:'center',display:'flex',flexWrap:'wrap'}}>
           <PageNewsPaper />
       </div>
    )
}

