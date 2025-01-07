const country = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  module.exports=country

  if(country.includes('Ethiopia')){
    console.log("Ethiopia")
  }else{
    country.unshift('Ethiopia')
  }
  console.log(country)