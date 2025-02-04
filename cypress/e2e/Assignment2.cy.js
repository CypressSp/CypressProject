import SwagPOM from '../PageObject/SwagPOM'

describe('Assignment 2',function() {
  
    const Swag = new SwagPOM()

    it('Swag Portal Login', () => {
      
        const url = 'https://www.saucedemo.com/v1/'

        Swag.SwagLabs_Login(url)

        Swag.Product_Sort_and_Order()

        Swag.Checkout()
    })
  })
