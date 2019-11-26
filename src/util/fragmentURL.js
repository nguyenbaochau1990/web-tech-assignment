export const hashFragment = (hash) => {
  const result = []
  const tabParameters = hash.substr(1).split('&')
  tabParameters.map((param) => {
    const keyValue = param.split('=')
    const key = keyValue[0]
    const value = keyValue[1]
    return result[key] = value
  })
  return result;
}

export const extractTokenType = (hash) => {
  return hash['token_type']
}

export const extractAccessToken = (hash) => {
  return hash['access_token']
}
