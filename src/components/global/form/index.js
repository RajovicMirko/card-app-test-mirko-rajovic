import React from 'react'

import Title from './title'

function index(props) {
  const { addClass, onSubmit, title, addClassTitle, children } = props;

  return (
    <form
      className={`d-flex flex-column ${addClass}`}
      onSubmit={onSubmit}
    >
      { title && <Title title={title} addClass={addClassTitle} /> }
      { children }
    </form>
  )
}

export default index
