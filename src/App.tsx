
import Create from './components/Create'
import Delete from './components/Delete'
import React from './components/React'
import Update from './components/Update'

type Props = {}

export default function App({}: Props) {
  return (
    <div>App
      <React></React>
      <Create></Create>
      <Delete></Delete>
      <Update></Update>
    </div>
  )
}