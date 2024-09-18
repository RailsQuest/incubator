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
      },
      backgroundImage: {
        'texture': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23ffffff' fill-opacity='0.1' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E\")"
      }
    }
  },
  plugins: {
    forms
  }
})
