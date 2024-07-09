import CountryCard from "@/components/CountryCard";
import CountryForm from "@/components/CountryForm";
import { useCountriesQuery } from "@/graphql/generated/schema";
import { useRouter } from "next/router";

export default function countries() {
  const { data } = useCountriesQuery();
  const countries = data?.countries || [];
  const router = useRouter();
  

 
  return (
    <div className="pt-6 mx-[50px] flex flex-col gap-20">
      <CountryForm />
      <section className="country-wrapper" data-testid="ads-list">
        {countries.map((country) => (
          <CountryCard key={country.id} country={country} link={`/country/${country.code}`} />
        ))}
      </section>
    </div>
  );
}