import React, { useRef, useEffect, useState } from 'react'
import WebViewer from '@pdftron/webviewer'
import './App.css'

const App = ({file}) => {
  const [thumb, setThumb] = useState(null)

  useEffect(() => {
    const getThumbnail = async () => {
        var getsplit = file.split('.')
        var docType = getsplit[getsplit.length - 1]

        const CoreControls = window.CoreControls;
        CoreControls.setWorkerPath('/webviewer/lib/core');
        const doc = await CoreControls.createDocument(file, { extension: docType });
        console.log(doc)
        doc.loadCanvasAsync({
            pageNumber: 1,
            drawComplete: (thumbnail) => {
                setThumb(thumbnail.toDataURL())
                console.log(thumbnail)
            },
        })
    }

    getThumbnail();
    console.log(file)
}, [file])

  useEffect(() => {
    console.log(thumb)
  }, [thumb])

  return (
    // <div className="App">
    //   <div className="header">PDFTRON Document Viewer</div>
    //   <img width="200px" height="300px"></img>
    // </div>
      <img src={thumb} width="200px" height="300px" />
  )
}

export default App
