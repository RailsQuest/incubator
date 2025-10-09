# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@twind/forms", to: "@twind--forms.js" # @0.1.4
pin "style-vendorizer" # @2.2.3
pin "twind" # @0.16.19
pin "twind/shim", to: "https://cdn.skypack.dev/twind/shim"
