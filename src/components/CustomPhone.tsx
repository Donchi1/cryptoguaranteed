import { useState } from 'react'
import { getCountries, getCountryCallingCode } from 'react-phone-number-input/input'
//import en from 'react-phone-number-input/locale/en'




type countrySelect = {
    value: string | undefined,
    onChange: Function,
    labels: any
  }

const CountrySelect = ({ value, onChange, labels, ...rest }: countrySelect) => {
const [filtered, setFiltered] = useState()

// const handleC
return (
    <select
    className='tw-bg-transparent  '
      {...rest}
      value={value}
      onChange={event => onChange(event.target.value || undefined)}>
        
      <option value="">
        +{getCountryCallingCode(value as any)}
      </option>
      {getCountries().map((country) => (
        <option key={country} value={country}>
           +{getCountryCallingCode(country)}
        </option>
      ))}
    </select>
  )
 }
  export default CountrySelect
 