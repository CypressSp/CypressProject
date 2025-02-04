import LoginValidation from '../PageObject/LoginValidation'

describe('Add2Cart_Session Validation',function() {
  
    const loginval = new LoginValidation()

    it.skip('LaunchURL', () => {
      
        loginval.URLNavigation_Login()
    })

    it.skip('Invalid User Login', () => {
      
        loginval.InvalidUser_Login()
    })

    it.skip('Invalid Password Login', () => {
      
        loginval.InvalidPwd_Login()
    })

    it.skip('Valid Login', () => {
      
        loginval.Valid_Login()
    })

    it('Valid Login using Keyboard', () => {
      
        loginval.Valid_Login_Keyboard()
    })
  })
