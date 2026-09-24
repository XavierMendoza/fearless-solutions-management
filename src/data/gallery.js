// PLACEHOLDER: Stock photography, NOT completed Fearless Solutions projects.
// Replace every image with approved client photography before publishing a portfolio.
const photo = (id, width = 900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`
export const heroImage = {
  src: photo('photo-1600210492486-724fe5c67fb0', 1600),
  alt: 'Interior inspiration: a light-filled living room with neutral furnishings',
  placeholder: true,
}
export const gallery = [
  ['photo-1600210492486-724fe5c67fb0', 'Living spaces', 'Sunlit living room with a neutral sofa and natural textures'],
  ['photo-1556912172-45b7abe8b7e1', 'Kitchen details', 'Bright kitchen with a spacious island and clean counters'],
  ['photo-1497366754035-f200968a6e72', 'Workspaces', 'Modern office corridor with glass-walled rooms'],
  ['photo-1620626011761-996317b8d101', 'Fresh bathrooms', 'Contemporary bathroom with vessel sinks and a large mirror'],
  ['photo-1616486338812-3dadae4b4ace', 'Room to relax', 'Calm sitting area with carefully arranged furniture'],
  ['photo-1497366811353-6870744d04b2', 'Welcoming offices', 'Airy workplace with plants and natural light'],
].map(([id, label, alt]) => ({ src: photo(id), label, alt: `Interior inspiration: ${alt}`, placeholder: true }))
