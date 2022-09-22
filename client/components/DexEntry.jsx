import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'

import { getDexEntryAPI } from '../apis/dexentry'

export default function DexEntry() {
  const [pokehuman, setPokehuman] = useState()
  const { id } = useParams()

  useEffect(() => {
    setPokehuman(getDexEntryAPI(id))
  }, [])

  console.log(pokehuman)
  return (
    <>
      <div>DexEntry</div>
    </>
  )
}
