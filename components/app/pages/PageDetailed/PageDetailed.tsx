"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import pageHomeStateStore from "@/components/app/lib/store/page-home-state-store";


export const PageDetailed = observer(() => {

        return (
            <div></div>
            // <div className='page-datailed page-content'>
            //     <div className="hero-content flex-col lg:flex-row ">
            //         <img src={pageHomeStateStore.selectedOffer.img} className="max-w-sm rounded-3xl shadow-2xl"/>
            //         <div>
            //             <h1 className="text-5xl font-bold">{pageHomeStateStore.selectedOffer.title}</h1>
            //             <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
            //                 exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            //             <button className="btn btn-primary">Get Started</button>
            //         </div>
            //     </div>
            // </div>
        )
    }
)
