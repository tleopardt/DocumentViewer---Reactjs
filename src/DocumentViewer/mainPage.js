import React, { useRef, useEffect, useState } from 'react'
import WebViewer from '@pdftron/webviewer'
import '../App.css'

export default function MainPage({ file }) {
  const viewer = useRef(null)
  const [thumb, setThumb] = useState(null)

  //   useEffect(() => {
  //     const getThumbnail = async () => {
  //         var getsplit = file.split('.')
  //         var docType = getsplit[getsplit.length - 1]

  //         const CoreControls = window.CoreControls;
  //         CoreControls.setWorkerPath('/webviewer/lib/core');
  //         const doc = await CoreControls.createDocument(file, { extension: docType });
  //         console.log(doc)
  //         doc.loadCanvasAsync({
  //             pageNumber: 1,
  //             drawComplete: (thumbnail) => {
  //                 setThumb(thumbnail.toDataURL())
  //                 console.log(thumbnail)
  //             },
  //         })
  //     }

  //     getThumbnail();
  //     console.log(file)
  // }, [file])

  useEffect(() => {
    WebViewer(
      { 
        path: '/webviewer/lib',
        initialDoc: file,
        loadAsPDF: true,
      },
      viewer.current,
    ).then((instance) => {
      // instance.enableFeatures(['ThumbnailMultiselect', 'MultipleViewerMerging'])
      // instance.enableElements(['documentControl'])
      // instance.openElements(['leftPanel'])
      const { documentViewer } = instance.Core
      documentViewer.addEventListener('annotationsLoaded', () => {
        const doc = documentViewer.getDocument()
        const pageNumber = 1
        doc.loadCanvasAsync({
          pageNumber,
          // zoom: 2, // render at twice the resolution
          drawComplete: async (thumbnail) => {
            // optionally comment out "drawAnnotations" below to exclude annotations
            await instance.Core.documentViewer
              .getAnnotationManager()
              .drawAnnotations(pageNumber, thumbnail)
            // thumbnail is a HTMLCanvasElement or HTMLImageElement
            // console.log(thumbnail)
            setThumb(thumbnail.toDataURL())
          },
        })
      })
    })
  }, [])

  useEffect(() => {
    console.log(thumb)
  }, [thumb])

  return (
    // <div className="App">
    //   <div className="header">PDFTRON Document Viewer</div>
    //   <img width="200px" height="300px"></img>
    // </div>
    <>
      <img src={thumb} width="200px" height="300px" />
      <img ref={viewer} />
    </>
  )
}


