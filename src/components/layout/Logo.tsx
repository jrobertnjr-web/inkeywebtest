import Image from "next/image";
import Link from "next/link";

export function Logo({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/images/logo/logo-header-white.png"
        alt="inKey DJ Collective"
        width={1146}
        height={434}
        className={className}
        priority
      />
    </Link>
  );
}
