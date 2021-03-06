import React from 'react'

export default function index(props) {
  const {
    id,
    type,
    addClass = '',
    addClassLabel = '',
    addClassInput = '',
    label = null,
    placeholder = null,
    value = '',
    error = null,
    onChange
  } = props;

  return (
    <div className={`form-group ${addClass}`}>
      <div className="d-flex justify-content-between align-items-end">
        <label htmlFor={id} className={addClassLabel}>{label}</label>
      </div>
      <input
        id={id}
        type={type}
        className={`form-control form-control-sm ${error && 'is-invalid'} ${addClassInput} ${!!error && ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <small className="text-danger">{ error }</small>
    </div>
  )
}
