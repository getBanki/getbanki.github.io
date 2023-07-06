import {Metadata} from "next";
import {PageNewsPaper} from "@/components/app/pages/PageNewsPaper/PageNewsPaper";
import {getNews} from "@/services/getLoans";

export const metadata: Metadata = {
    title: 'Статьи об выгодных займах',
    description: 'Самые выгодные условия',
}

export default async function NewsPaper() {

    const news = await getNews()
    return (
       <div style={{justifyContent:'center',display:'flex',flexWrap:'wrap'}}>
           <PageNewsPaper data={news}/>
       </div>
    )
}

