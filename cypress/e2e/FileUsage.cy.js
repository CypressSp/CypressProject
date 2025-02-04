describe('File Usage Validation',function() {

    beforeEach(() => {
        
        cy.visit('https://qa-automation-practice.netlify.app/file-upload.html')
    })
  
    it('File Uploadget', () => {

        // //File Upload
        cy.get('#file_upload').attachFile('example.json')
        cy.get('.btn.btn-primary').click()
        
        cy.get('#file_upload_response').contains('successfully uploaded')

        //File Download_jpg
        cy.visit('/')
        cy.downloadFile('https://automationexercise.com/static/images/home/girl2.jpg','myDownloads','Adv.jpg')

        //File Download_pdf
        cy.downloadFile('https://practice.expandtesting.com/download/1737109087288_pdf-example-file-upload.pdf','myDownloads','Success.pdf')
    })
})
