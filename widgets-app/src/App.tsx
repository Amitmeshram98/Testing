import { useState,useEffect } from 'react'

import Map from "@arcgis/core/Map.js";
import MapView from "@arcgis/core/views/MapView.js";
import BasemapGallery from "@arcgis/core/widgets/BasemapGallery.js";
import Expand from "@arcgis/core/widgets/Expand.js";
import CoordinateConversion from "@arcgis/core/widgets/CoordinateConversion.js";
import AreaMeasurement2D from "@arcgis/core/widgets/AreaMeasurement2D.js";
import Home from "@arcgis/core/widgets/Home.js";
import Fullscreen from "@arcgis/core/widgets/Fullscreen.js";
import Locate from "@arcgis/core/widgets/Locate.js";
import Graphic from "@arcgis/core/Graphic.js";
import NavigationToggle from "@arcgis/core/widgets/NavigationToggle.js";
import Search from "@arcgis/core/widgets/Search.js";
import './App.css'

function App() {

const [eMap, seteMap] = useState();

 useEffect(() => {

    //Add Map and View
	//Commit 1
      const myMap = new Map({
      basemap: "streets-vector"
    });

    const view = new MapView({
      map: myMap,  
      container: "viewMap",
      center:[78.474243,17.361121],
      zoom:10
    });

    //Add Basemap Gallery widget
    let basemapGallery = new BasemapGallery({
      view: view
    });


    // // Add widget to the top right corner of the view
    // view.ui.add(basemapGallery, {
    //   position: "top-right"
    // });

    //Add Expand widget
    let bgExpand = new Expand({
      view: view,
      content: basemapGallery,
      expanded: false
    });

    // Add the expand widget to the top right corner of the view
    view.ui.add(bgExpand, {
      position: "top-right"
    });

     // Adds Coordinate widget in the bottom left corner of the view
    let ccWidget = new CoordinateConversion({
      view: view
    });
    view.ui.add(ccWidget, "bottom-left");

     // adds the home button widget to the top left corner of the MapView
    let homeWidget = new Home({
      view: view
    });
    view.ui.add(homeWidget, "top-left");

    //fullscreen
    let fullscreen = new Fullscreen({
      view: view
    });
    view.ui.add(fullscreen, "top-right");
    
    // Attaches the Locate button to the view
    let locateWidget = new Locate({
      view: view,   
      graphic: new Graphic({
        symbol: { type: "simple-marker" }  // overwrites the default symbol used for the
        // graphic placed at the location of the user when found
      })
    });

    view.ui.add(locateWidget, "bottom-right");


    // creates a new instance of the NavigationToggle widget
    let navigationToggle = new NavigationToggle({
      view: view
    });

    // and adds it to the top right of the view
    view.ui.add(navigationToggle, "top-right");

       // To add the AreaMeasurement2D widget to your map
    let measurementWidget = new AreaMeasurement2D({
      view: view
    });
    view.ui.add(measurementWidget, "top-right");

    //Search textbox
    const searchWidget = new Search({
      view: view
    });
    // Adds the search widget below other elements in
    // the top left corner of the view
    view.ui.add(searchWidget, {
      position: "top-left",
      index: 2
    });


  }, [, ]);





  return (
    <>
      <div className="container">
        <div className="row headerpanel"><div>Widgets</div></div>
        <div className="row mainpanel" id='viewMap'></div>
      </div>
    </>
  )
}

export default App
