import React from "react"
import DefaultLayout from "../../layouts/DefaultLayout";
import MarketPlaceMain from "../../components/organisms/MarketPlace/MarketPLaceMain";

const Index = () =>{
    return(
        <DefaultLayout isFooter={false}>
            <MarketPlaceMain/>
        </DefaultLayout>
    )
}
export default Index