// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'
import 'controllers'

import { setup } from 'twind/shim'
import { forms } from '@twind/forms'

setup({
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto Condensed', 'Arial', 'sans-serif']
      },
      colors: {
        adventure: {
          forest: '#2C5F2D',
          mountain: '#97BC62',
          river: '#0C7489',
          rock: '#5C4033'
        }
      }
    }
  },
  plugins: {
    forms
  }
})
