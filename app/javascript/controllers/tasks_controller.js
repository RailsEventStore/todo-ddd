import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  connect() {
    console.log(this.element)
  }

  toggle(e) {
    e.target.closest("form").requestSubmit();
  }
}