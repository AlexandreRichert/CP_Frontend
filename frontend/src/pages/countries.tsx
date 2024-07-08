import CountryCard from "@/components/CountryCard";
import { useCountriesQuery } from "@/graphql/generated/schema";

export default function countries() {
  const { data } = useCountriesQuery();
  const countries = data?.countries || [];

  return (
    <div className="pt-6">
      <h2 className="text-2xl mb-6"></h2>

      <section className="flex flex-wrap pb-24" data-testid="ads-list">
        {countries.map((country) => (
          <CountryCard key={country.id} country={country}  />
        ))}
      </section>
    </div>
  );
}