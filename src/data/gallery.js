import hero from '../assets/stock/hero-living-room.jpg'
import living from '../assets/stock/living-space.jpg'
import kitchen from '../assets/stock/kitchen.jpg'
import office from '../assets/stock/office.jpg'
import bathroom from '../assets/stock/bathroom.jpg'
import relax from '../assets/stock/relax-space.jpg'
import industrial from '../assets/stock/industrial.jpg'

// Pexels stock inspiration, not photographs of completed Fearless Solutions jobs.
// Credits and replacement guidance are maintained in PHOTO_SOURCES.md.
export const heroImage = {
  src: hero,
  alt: 'Light-filled living and dining room with blue seating and floor-to-ceiling curtains',
  stock: true,
}
export const gallery = [
  [living, 'Living spaces', 'Bright living room with large windows, ornate seating, and a decorative ceiling'],
  [kitchen, 'Kitchen details', 'Modern kitchen with marble counters and pendant lighting'],
  [office, 'Workspaces', 'Office corridor with glass doors, patterned carpet, and leather seating'],
  [bathroom, 'Fresh bathrooms', 'White and gray bathroom with a freestanding bathtub and double washbasin'],
  [relax, 'Room to relax', 'Contemporary living room with upholstered seating and a sculptural chandelier'],
  [industrial, 'Industrial facilities', 'Industrial storage warehouse with tall metal shelving'],
].map(([src, label, alt]) => ({ src, label, alt, stock: true }))
