const form = document.getElementById('newsletter__form')
const emailInput = document.getElementById('email')
const invalidMessage = document.getElementById('form__invalid-label')
const newsletter_section = document.getElementById('newsletter')

const newsletter_success_section = document.getElementById(
  'newsletter__success'
)
const closeBtn = document.getElementById('success__close-btn')
const subscriberEmailField = document.getElementById(
  'success__subscriber-email'
)

// Regex pattern for a simple email
const pattern = /\w+@\w+\.[a-z]{1,10}/

form.addEventListener('submit', (e) => {
  e.preventDefault()

  if (!validateEmail(emailInput)) {
    invalidMessage.style.display = 'block'
    emailInput.classList.add('invalid-input')
    return
  }

  newsletter_section.style.display = 'none'
  newsletter_success_section.style.display = 'flex'
  subscriberEmailField.innerText = emailInput.value
})

function validateEmail(email) {
  return pattern.test(email.value)
}

closeBtn.addEventListener('click', () => {
  newsletter_success_section.style.display = 'none'
})
