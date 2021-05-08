import React from 'react';
import './body.css'

const Body = ({data: {confirmed, recovered, deaths, lastUpdate }}) => {
    if(!confirmed){
        return 'Loading...'
    }
    return(
        <section id="card-area">
           <div className="container-lg ">
           <div id="card-1" class="p-20 bg-blue-100">
                <h3 class="text-blue-300 mb-4 text-sm font-bold">
                    New Cases
                </h3>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <p>Total Confirmed: {confirmed.value} cases </p><br/>
                    <p>last updated: {lastUpdate}</p><br/>
                </div>
            </div>
            <div id="card-2" class="p-20 bg-blue-100">
                <h3 class="text-blue-300 mb-4 text-sm font-bold">
                    Recovered
                </h3>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <p>Total Recovered: {recovered.value} people</p><br/>
                    <p>last updated: {lastUpdate}</p><br/>
                </div>
            </div>
            <div id="card-3" class="p-20 bg-blue-100">
                <h3 class="text-blue-300 mb-4 text-sm font-bold">
                    Deaths
                </h3>
                <div class="bg-white p-6 rounded-lg shadow-lg">
                    <p>Total Deaths: {deaths.value} deaths </p><br/>
                    <p>last updated: {lastUpdate}</p><br/>
                </div>
            </div>
           </div>
           <footer id="footer">
                <p className="bg-gradient-to-r from-purple-400 via-deep purple-300 to-indigo-500">Made By Rahul Mishra [using covid19 API] 2021.</p>
           </footer>
        </section>
        
    )
}



export default Body;