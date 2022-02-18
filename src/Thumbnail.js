import React, { useRef, useEffect, useState } from 'react'
import WebViewer from '@pdftron/webviewer'
import './App.css'

const App = () => {
  const viewer = useRef(null)
  const [file, setFile] = useState(null)
  const [instance, setInstance] = useState(null)

  // if using a class, equivalent of componentDidMount
  useEffect(() => {
    WebViewer(
      {
        path: '/webviewer/lib',
        initialDoc: file != null ? file : '/files/excel.xlsx',
      },
      viewer.current,
    ).then((instance) => {
      setInstance(instance)
      const { documentViewer, annotationManager, Annotations } = instance.Core

      documentViewer.addEventListener('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation({
          PageNumber: 1,
          // values are in page coordinates with (0, 0) in the top left
          X: 100,
          Y: 150,
          Width: 200,
          Height: 50,
          Author: annotationManager.getCurrentUser(),
        })

        // annotationManager.addAnnotation(rectangleAnnot)
        // need to draw the annotation otherwise it won't show up until the page is refreshed
        // annotationManager.redrawAnnotation(rectangleAnnot)
      })
    })
  }, [])

  useEffect(() => {
    if (instance && file) {
      instance.loadDocument(file)
    }
    console.log(file)
  }, [file, instance])

  const openmodal = () => {
    document.getElementById('id01').style.display = 'block'
  }
  const closemodal = () => {
    document.getElementById('id01').style.display = 'none'
  }

  return (
    <div className="App">
      <div className="header">PDFTRON Document Viewer</div>
      <div style={{ display: 'flex', height: '100vh', margin: '2% 1%' }}>
        <select
          onChange={(e) => setFile(e.target.value)}
          style={{
            height: '30px',
            marginTop: '20%',
            marginRight: '10px',
            padding: '5px',
          }}
        >
          <option value="">-- Select file type --</option>
          <option value="/files/PDFTRON_about.pdf">document pdf</option>
          <option value="/files/word.docx">document word</option>
          <option value="/files/excel.xlsx">document excel</option>
        </select>
        <div className="webviewer" ref={viewer}></div>
      </div>

      {/* <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <div
        className="modal fade bd-example-modal-lg"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body" style={{ width: '1500px !important', height: '100vh !important' }}>
              <div classname="webviewer" ref={viewer} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default App
