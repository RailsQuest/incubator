// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import '@hotwired/turbo-rails'
import 'controllers'

import { setup } from 'twind/shim'
import { forms } from '@twind/forms'

setup({
  theme: {
    extend: {
      fontFamily: {
        sans: ['Comic Sans MS', 'cursive']
      },
      colors: {
        happy: {
          yellow: '#FFD700',
          pink: '#FF69B4',
          blue: '#1E90FF',
          green: '#32CD32'
        }
      }
    }
  },
  plugins: {
    forms
  }
})
