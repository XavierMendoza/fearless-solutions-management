import logo from '../assets/brand/fearless-logo.png'
import { businessInfo } from '../data/businessInfo'

export default function Brand() {
  return <a className="brand" href="#home" aria-label={`${businessInfo.name} home`}>
    <img className="brand-mark" src={logo} alt="Fearless Solutions Management logo" width="58" height="60" />
    <span>FEARLESS<span className="brand-subtitle">SOLUTIONS MANAGEMENT</span></span>
  </a>
}
