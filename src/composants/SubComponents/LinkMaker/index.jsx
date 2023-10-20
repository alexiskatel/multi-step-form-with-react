import React from 'react'
import { Link } from 'react-router-dom'

export const LinkMaker = ({ path, label }) => {
  return (
    <li>
      <Link to={path}>{label}</Link>
    </li>
  )
}
