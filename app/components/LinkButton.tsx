import Link from "next/link"
import "../model/LinkProps"

export default function LinkButton({links}) {
  return (
    <div>
        <div>
        {links.map((link, index) => (
        <Link key={index} href={link.href}>
          <a>{link.label}</a>
        </Link>
      ))}
    </div>
    </div>
  )
}
