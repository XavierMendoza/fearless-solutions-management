import { Clock3, Sparkles, HeartHandshake, MessageSquareText } from 'lucide-react'
import { companyCopy } from '../data/businessInfo'
const icons = [Clock3, Sparkles, HeartHandshake, MessageSquareText]
export default function TrustBar() {
  return <div className="trust-strip"><div className="container trust-grid">{companyCopy.benefits.map((benefit, index) => {
    const Icon = icons[index]
    return <div key={benefit}><Icon size={21} /><span>{benefit}</span></div>
  })}</div></div>
}
