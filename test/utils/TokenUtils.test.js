import tokenUtils from '../../src/utils/TokenUtils'

describe('Token Utils tests', function () {

  test('parses token and returns user data', function() {
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWRtaW4iLCJhY2NvdW50VHlwZSI6InVzZXIiLCJpYXQiOjE2NjUzNDc4ODksImV4cCI6MTY2NTM1NTA4OX0.v7ylcMpN4t_PGgeGD-XotHuVs6KIf13m_UkvJnSyxHQ'

    let decoded = tokenUtils.getUserDataFromToken(token)

    console.log(decoded)
  })

})
