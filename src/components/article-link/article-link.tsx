import Link from "next/link";

interface ArticleLinkProps {
  href: string;
  inNewTab?: boolean;
  children?: React.ReactNode;
}

/**
 * The component renders the Next.js's `<Link>` for the internal routes, and `<a>` for the external ones.
 * @param href the route.
 * @param inNewTab defaults to `true`; applicable to the external routes only.
 */
export function ArticleLink({ href, inNewTab = true, children }: ArticleLinkProps) {
  const isInternalLink = href && href.startsWith("/");

  if (isInternalLink) {
    return <Link href={href}>{children}</Link>;
  }

  return (
    <a
      href={href}
      target={inNewTab ? "_blank" : "_self"}
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
