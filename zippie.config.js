module.exports = {
  development: {
    apps: {
      apis: {
        fms: 'https://fms.zippie.org',
        permastore: 'https://fms.zippie.org'
      },
      root: {
        auth: 'https://pin.dev.zippie.org',
        card: 'https://card.dev.zippie.org',
        signup: 'https://signup.dev.zippie.org'
      },
      user: {
        home: 'https://my.dev.zippie.org'
      }
    }
  },

  testing: {
    apps: {
      apis: {
        fms: 'https://fms.zippie.org',
        permastore: 'https://fms.zippie.org'
      },
      root: {
        auth: 'https://pin.testing.zippie.org',
        card: 'https://card.testing.zippie.org',
        signup: 'https://signup.testing.zippie.org'
      },
      user: {
        home: 'https://my.testing.zippie.org'
      }
    }
  },

  release: {
    apps: {
      apis: {
        fms: 'https://fms.zippie.org',
        permastore: 'https://fms.zippie.org'
      },
      root: {
        auth: 'https://pin.zippie.org',
        card: 'https://card.zippie.org',
        signup: 'https://signup.zippie.org'
      },
      user: {
        home: 'https://my.zippie.org'
      }
    }
  }
}