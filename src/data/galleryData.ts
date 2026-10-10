export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  tag?: string;
}

export const GALLERY_IMAGES: GalleryItem[] = [
  {
    id: 'klickzanddipz',
    url: '/Gallery/klickzanddipz.webp',
    title: 'Klickz & Dipz Cafe',
    caption: 'The premier hangout spot blending crunch and studio aesthetic at VR Chennai',
    tag: 'VR Chennai'
  },
  {
    id: 'photoboothvrmall',
    url: '/Gallery/photoboothvrmall.webp',
    title: 'Studio Photobooth VR Mall',
    caption: 'Instant high-resolution photo strips with fun props and custom frames',
    tag: 'Photobooth Studio'
  },
  {
    id: 'chennaiphotoboothcafe',
    url: '/Gallery/chennaiphotoboothcafe.webp',
    title: 'Photobooth & Cafe Vibes',
    caption: 'Strike poses with friends and create timeless keepsake photo memories',
    tag: 'Moments & Vibes'
  },
  {
    id: 'vrmallklickzanddipz',
    url: '/Gallery/vrmallklickzanddipz.webp',
    title: 'VR Mall Storefront Experience',
    caption: 'Visit us on the 3rd Floor at VR Chennai Mall',
    tag: 'Storefront'
  },
  {
    id: 'chennaiphotobooth',
    url: '/Gallery/chennaiphotobooth.webp',
    title: 'Photobooth Strip Memories',
    caption: 'Four fun poses, instant physical glossy prints, and digital QR copies',
    tag: 'Instant Prints'
  }
];
