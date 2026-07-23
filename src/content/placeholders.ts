// Confirmed real content (from the live site) vs. placeholder content is marked below.
// Swap PLACEHOLDER values once real brand assets/copy are supplied.

export const siteConfig = {
  name: "inKey DJ Collective",
  tagline: "Spinning Memories, Setting Vibes, Creating Moments.", // confirmed
  description:
    "Boutique DJ services for weddings, corporate events, and celebrations — curated, not templated.", // PLACEHOLDER meta description
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://inkeydjcollective.com",
  email: "info@inkeydjcollective.com",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Vibe Recommender", href: "/vibe-recommender" },
  { label: "Book Now", href: "/contact" },
];

export const footerLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
];

// confirmed pricing model from live site
export const pricing = {
  small: 450,
  large: 2500,
  note: "Small to large events start at $450–$2,500 respectively. Every quote is customized after a free consultation based on venue, event type, and your vision.",
};

export const consultationMethods = [
  "FaceTime",
  "Zoom",
  "Google Meet",
  "Phone",
  "In-person",
];

// Bios for DJ Musiek, DJ Rosé, and DJ Kickback are pulled from the live site.
// Andrew Venson's bio is adapted from an email he sent (Jun 25, 2024) into third person.
export const teamMembers = [
  {
    name: "James Nelson",
    role: "DJ Musiek — Music Experience Architect",
    founder: true,
    icon: "compass",
    bio: "DJ Musiek hails from Dayton, Ohio with over 30 years of experience. He draws from funk, soul, and disco influences including Ohio Players and Bootsy Collins. Now based in Austin, Texas, he describes music as \"a journey through time and emotion, a fusion of past and present that transcends boundaries.\" He performs classic funk alongside modern hits.",
    photo: "/images/team/founder.jpg",
  },
  {
    name: "Andrew Venson",
    role: "DJ Skoolz — Rhythm Professor",
    icon: "cap",
    bio: "Born in New York, raised in California, and Texas-based on and off since the '80s, DJ Skoolz brings over 20 years of experience blending Jazz, Chillhop, and R&B. He isn't tied to one genre — Latin, country, R&B, jazz, lite rock, happy hip-hop, reggae, and house are all fair game if the crowd's feeling it. He reads the room and builds each set in real time around it, \"tuned for the musically mature ear.\"",
    photo: "/images/team/andrew-venson.jpg",
  },
  {
    name: "Jay Roseboro",
    role: "DJ Rosé — Music Sommelier",
    icon: "wine",
    bio: "With over 20 years in the industry, DJ Rosé specializes in DJ, MC, and lighting services. Beyond music mixing, he functions as a \"seasoned lighting engineer\" creating custom designs and light shows. His expertise spans intimate weddings to corporate events and club nights, combining sound and visual elements.",
    photo: "/images/team/jay-roseboro.jpg",
  },
  {
    name: "Thomas Pinai",
    role: "DJ Kickback — Beatmatch Curator",
    icon: "headphones",
    bio: "A Bay Area native since the 1980s, DJ Kickback explores genres spanning Latin Freestyle, 90s R&B, rap, Bachata, and indie rock. His stated mission involves crafting \"an electrifying atmosphere that lights up the room and brings smiles to faces.\" He emphasizes spreading positive energy while maintaining Bay Area musical roots.",
    photo: "/images/team/thomas-pinai.jpg",
  },
];

// confirmed note from live site
export const noSalespeopleNote =
  "At inKey we don't have dedicated salespeople — let us know who you'd like to work with and we'll connect you directly.";

// Real event photos from past inKey gigs.
export const galleryImages = [
  { src: "/images/gallery/mcrae-dancefloor-1.jpg", alt: "Packed dance floor at the McRae wedding reception" },
  { src: "/images/gallery/correa-dj-booth.jpg", alt: "DJ booth with purple uplighting at the Correa reception" },
  { src: "/images/gallery/mcrae-dancefloor-2.jpg", alt: "Guests dancing under a chandelier at the McRae wedding" },
  { src: "/images/gallery/correa-reception-wide.jpg", alt: "Full reception hall with DJ on stage at the Correa event" },
  { src: "/images/gallery/mcrae-reception-wide.jpg", alt: "Wide shot of the McRae wedding reception dance floor" },
  { src: "/images/gallery/sehl-graduation.jpg", alt: "Graduation party ballroom set up with DJ and photo booth" },
  { src: "/images/gallery/correa-dj-green.jpg", alt: "DJ booth with green lighting at the Correa reception" },
  { src: "/images/gallery/mcrae-atmosphere.jpg", alt: "Guests dancing under string lights at the McRae wedding" },
];

// Real client testimonials. Add more here as they come in — do not invent reviews.
export const reviews = [
  {
    quote:
      "This is clearly their passion, not just a job to them. […] They knew just what to play next based on the mood of the crowd. The lights and smoke they set up for the dance floor created a magical and amazing ambience and we have the most gorgeous pictures because of it!",
    name: "Denise McRae",
    event: "Wedding · Mother of the Groom",
  },
];

export const aboutContent = {
  heading: "About inKey DJ Collective",
  body: [
    "inKey DJ Collective started four years ago when DJ Musiek set out to build something different: a crew of DJs he already knew and trusted, brought together under one name. Between them, the collective carries over 70 years of experience behind the decks.",
    "At its core, inKey is driven by a simple passion for music and for the moments it creates. We believe great sound has the power to transform events into unforgettable memories — and we wanted to share that during the special moments that matter most to our clients. That's why we build tailored playlists instead of preset packages, and why our team spans genres from jazz to electronic and beyond, ready for whatever the moment calls for.",
  ],
};

export const packagesContent = {
  heading: "Packages",
  intro:
    "We don't do one-size-fits-all packages. Every quote is built à la carte around your event, venue, and vision.",
  ctaLabel: "Book a Free Consultation",
};

// DRAFT legal copy, written to reflect what this codebase actually does (contact form via
// Resend, Vibe Recommender via Anthropic). Still needs an attorney review before launch, and
// the bracketed values below need to be confirmed/filled in by the business owner.
export const legal = {
  privacyPolicy: `Last updated: [DATE]

This is a draft privacy policy and has not been reviewed by an attorney. Have it reviewed before publishing, and fill in the bracketed details below.

Information We Collect
When you submit our contact form, we collect the name, email address, event date, event type, and message you provide. When you use the Vibe Recommender tool, we collect the event type, mood, genres, guest count, and notes you enter.

How We Use It
We use this information only to respond to your inquiry, plan your event, and (for the Vibe Recommender) generate a sample genre and mood suggestion. We do not sell or rent your information to third parties, and we do not use it for advertising.

Third-Party Service Providers
Contact form messages are delivered using Resend, our email provider. Vibe Recommender submissions are sent to Anthropic's Claude API to generate a suggestion; the details you enter are transmitted to Anthropic for this single purpose. These providers process your information on our behalf and are not permitted to use it for their own purposes.

Data Retention
We keep contact form submissions only as long as needed to respond to you and coordinate your event, plus a reasonable period afterward for business records. Vibe Recommender submissions are not stored after a response is generated.

Cookies & Analytics
This site does not currently use cookies, analytics, or advertising trackers. If that changes, this policy will be updated first.

Your Rights
You can request access to, correction of, or deletion of the information we hold about you at any time by emailing info@inkeydjcollective.com.

Children's Privacy
This site is not directed at children under 13, and we do not knowingly collect information from them.

Changes to This Policy
We may update this policy from time to time. The current version will always be posted at this URL.

Contact
Questions about this policy can be sent to info@inkeydjcollective.com.`,

  termsOfUse: `Last updated: [DATE]

This is a draft terms of use and has not been reviewed by an attorney. Have it reviewed before publishing, and confirm the bracketed deposit/cancellation terms match your actual business policy — the defaults below are placeholders, not legal advice.

Booking & Quotes
Pricing shown on this site is a starting range. A final quote is provided after a free consultation and is based on your event's date, duration, location, and requested services. A quote is not a confirmed booking.

Deposit & Payment
A [25%] non-refundable retainer is required to reserve your date. The remaining balance is due [7 days] before the event. A date is not held until the signed agreement and retainer are received.

Cancellations & Rescheduling
Cancellations made more than [30 days] before the event forfeit the retainer only. Cancellations made within [30 days] of the event may be subject to additional fees as described in your signed booking agreement. We will make reasonable efforts to accommodate rescheduling requests, subject to DJ availability.

Equipment & Performance
We provide professional-grade audio equipment and, where noted in your package, backup equipment on-site. We are not liable for performance issues caused by venue restrictions (power, noise ordinances, space), circumstances outside our control, or third-party vendor failures.

Liability
Our liability for any claim arising from services provided is limited to the amount paid for those services. We are not liable for indirect, incidental, or consequential damages. This site's general terms do not replace the liability and insurance terms in your signed booking agreement.

Force Majeure
Neither party is liable for failure to perform due to events beyond reasonable control, including severe weather, venue closure, or other emergencies. In such cases we will work in good faith to reschedule or refund according to the circumstances.

Photo & Video
We may photograph or record portions of an event for portfolio and marketing use unless you tell us in writing beforehand that you'd prefer we not.

Governing Law
These terms are governed by the laws of the State of Texas.

Contact
Questions about these terms can be sent to info@inkeydjcollective.com.`,
};
