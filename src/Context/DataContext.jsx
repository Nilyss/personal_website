import { createContext, useState, useEffect } from 'react'
import HttpService from '../data/data.service'

export const DataContext = createContext()

// init hooks

const http = new HttpService()
export function DataContextProvider(props) {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    http.getProjects().then((data) => {
      setProjects(data)
    })
  }, [])

  return (
    <DataContext.Provider value={{ projects }}>
      {props.children}
    </DataContext.Provider>
  )
}
