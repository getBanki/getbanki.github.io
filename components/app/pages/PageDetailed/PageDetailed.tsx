"use client"
import React from "react";
import {observer} from "mobx-react-lite";
import pageHomeStateStore from "@/components/app/lib/store/page-home-state-store";




export const PageDetailed = observer(() => {

        return (
            <div className='page-datailed'>
                {pageHomeStateStore.selectedOffer}
            </div>
        )
    }
)
