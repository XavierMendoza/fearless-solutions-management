// Future Formspree integration belongs here. Do not report delivery until a
// configured provider confirms success. Preview mode does not store or send data.
export function previewSubmit(event, setStatus) {
  event.preventDefault()
  setStatus('Demo form only — submission service will be connected before launch. Your message has not been sent. Please call or email us directly.')
}
