import React from 'react'
import styles from './Bio.module.scss'
import { getGravatarURL } from '../utils/getGravatarURL'

interface BioProps {
  className?: string
}

function Bio(props: BioProps) {
  let photoURL = getGravatarURL({
    email: "haleduykhang@gmail.com",
    size: 56,
  })

  return (
    <div
      className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img src={photoURL} alt="Me" />
      <p>
        A personal blog which was made by{' '}
        <a href="https://www.facebook.com/khanghld">Kelvin Ha</a>.
        <br />
        software engineer, culé, blogger at @kelvin's
      </p>
    </div>
  )
}

export default Bio
