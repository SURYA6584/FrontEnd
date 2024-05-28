import React from "react";
import ItemCard from "./ItemCart";
import Data from './Data'
function Home() {


    return (
        <div>
            <h1 className="text-center mt-3"><b>Explore Menu</b></h1>
            <br></br>
            <h1 className="text-center mt-3"><b>Non-veg</b></h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {
                        Data.restaurantData.map((item,index)=>{
                            return(
                                // <ItemCard img={item.img} title=<b>{item.title}</b> desc=<b>{item.desc}</b> price=<b>{item.price}</b> key={index} />
                                <ItemCard img={item.img} title=<b>{item.title}</b> desc=<b>{item.desc}</b> price=<b>{item.price}</b> key={index} />

                            )
                        })
                    }
                 
                </div>
            </section>
        </div>
    );
  }
   
  export default Home;