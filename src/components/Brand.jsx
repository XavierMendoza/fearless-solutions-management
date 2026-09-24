import { Sparkles } from 'lucide-react'
import { businessInfo } from '../data/businessInfo'

export default function Brand() {
  return <a className="brand" href="#home" aria-label={`${businessInfo.name} home`}>
    <span className="brand-mark"><Sparkles aria-hidden="true" /></span>
    <span>FEARLESS<span className="brand-subtitle">SOLUTIONS MANAGEMENT</span></span>
  </a>
}
