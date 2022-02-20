import React, { useRef, useEffect, useState, Fragment } from 'react'
import MainPage from './mainPage'

export default function View() {
  const [file, setFile] = useState([
    '/files/excel.xlsx',
    '/files/PDFTRON_about.pdf',
    '/files/word.docx',
    '/files/CALENDAR.xlsx',
  ])

  return (
    <Fragment>
      {
        file.map((v, index) => (
            <Fragment key={index}>
            <MainPage file={v} />
            &emsp;
            </Fragment>
        ))
      }
    </Fragment>
  )
}
