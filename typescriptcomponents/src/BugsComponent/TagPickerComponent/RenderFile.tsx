import React from 'react'
import { ZTagPickerDropdown } from '.'

const companies = [
    "Google",
    "Microsoft",
    "Apple",
    "Amazon",
    "Facebook",
    "Tesla",
    "Netflix",
    "Adobe",
    "Intel",
    "Oracle",
    "IBM",
    "Salesforce",
    "Twitter",
    "Snapchat",
    "Spotify",
    "Shopify",
    "Cisco",
    "Zoom",
    "PayPal",
    "Square",
    "Samsung",
    "NVIDIA",
    "AMD",
    "Qualcomm",
    "Dropbox",
  ];
  

const TagPickerComponent = () => {
  return (
    <div>
      <ZTagPickerDropdown zoptions={companies} multiselect/>
    </div>
  )
}

export default TagPickerComponent

