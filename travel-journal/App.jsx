import React from 'react'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import data from './data'


export default function App() {

    const cards = data.map(item => {
        return (
            <Cards
                title={item.title}
                location={item.location}
                googleMapsUrl={item.googleMapsUrl}
                startDate={item.startDate}
                endDate={item.endDate}
                description={item.description}
                imageUrl={item.imageUrl}  
             />
        )
    })

    return (
        <section className='container'>
          <Navbar />
          {cards}
        </section>
        
    )



}




