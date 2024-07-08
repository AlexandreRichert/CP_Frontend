import { Country } from "@/types";
import Link from "next/link";

type CountryCardProps = {
  country: Country;
};
export default function CountryCard({
  country: { code, emoji, name },
}: CountryCardProps) {
  return (
    <div className="w-[400px]">
        <div className="shadow-md border rounded-lg  p-6 bg-white mr-3 mb-3">
          <div className="flex justify-between pt-6">
            <div className="country-card-name">{name}</div>
            <div className="country-card-code">{code} </div>
          </div>
        </div>
    </div>
  );
}