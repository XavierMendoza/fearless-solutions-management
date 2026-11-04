import { useId, useState } from 'react'
import { Mail, Copy } from 'lucide-react'
import { businessInfo } from '../data/businessInfo'

export default function EmailContact({ href, label }) {
  const instructionsId = useId()
  const [copyStatus, setCopyStatus] = useState('')

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(businessInfo.email)
      setCopyStatus('Email address copied.')
    } catch {
      setCopyStatus('Copy is unavailable. Select and copy the email address above.')
    }
  }

  return <div className="email-contact">
    <a className="button button-outline" href={href} aria-describedby={instructionsId}><Mail size={18} aria-hidden="true" />{label}</a>
    <p id={instructionsId} className="contact-help">Opens a draft in your email application. Review it and press Send to email us.</p>
    <div className="email-fallback">
      <p>No email app configured? Copy this address into your preferred email service:</p>
      <span className="copyable-email">{businessInfo.email}</span>
      <button className="button button-outline" type="button" onClick={copyEmail}><Copy size={16} aria-hidden="true" />Copy email address</button>
      <p className="copy-status" role="status">{copyStatus}</p>
    </div>
  </div>
}
