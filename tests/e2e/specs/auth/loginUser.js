module.exports = {
    'login testuser': browser => {
        browser
            .init()
            .waitForElementVisible('#app')
            .assert.titleContains('gps-jwplayer-front')
            .assert.visible('input[type=username]')
            .setValue('input[type=username]', 'testuser@email.com')
            .assert.visible('input[type=password]')
            .setValue('input[type=password]', 'secret')
            .assert.visible('button[type=submit]')
            .click('button[type=submit]')
            .assert.urlEquals('http://localhost:8080/')
            .end()
    }
}