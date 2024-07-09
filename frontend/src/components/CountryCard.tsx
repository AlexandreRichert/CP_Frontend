import { Country } from "@/types";
import Link from "next/link";

type CountryCardProps = {
  country: Country;
  link: String;
};
export default function CountryCard({
  country: { code, emoji, name },
  link,
}: CountryCardProps) {
  return (
    <>
    <Link href={link}>
      <div className="country-container">
        <span className="country-name">{name}</span>
          <span role="img" aria-label={name} className="country-emoji">{emoji}</span>
      </div>
    </Link>
    </>
  );
}