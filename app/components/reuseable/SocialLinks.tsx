// ========================================================
type SocialLinksProps = { className?: string };
// ========================================================

const links = [
  {
    id: 1,
    icon: 'uil uil-linkedin',
    url: 'https://www.linkedin.com/in/louise-burg-b873131a3/',
  },
  {
    id: 2,
    icon: 'uil uil-facebook-f',
    url: 'https://www.facebook.com/profile.php?id=61561615330001',
  },
  {
    id: 3,
    icon: 'uil uil-instagram',
    url: 'https://www.instagram.com/kokoro.mediation.animale?igsh=MW95cjd4eHRhNzR2Ng==',
  },
];

export default function SocialLinks({
  className = 'nav social social-white mt-4',
}: SocialLinksProps) {
  return (
    <nav className={className}>
      {links.map(({ id, icon, url }) => (
        <a href={url} key={id} target="_blank" rel="noreferrer">
          <i className={icon} />
        </a>
      ))}
    </nav>
  );
}
