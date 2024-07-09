import { useRouter } from "next/router";
import Link from "next/link";
import {
  useGetCountryDetailsQuery
} from "@/graphql/generated/schema";

export default function CountryDetails() {
  

  const router = useRouter();
  const { code } = router.query;


  const { data } = useGetCountryDetailsQuery({
    variables: { code: code as string},
    skip: typeof code === "undefined",
  });

  const country = data?.country;



  return (
      <div className="pt-12 pb-12 flex justify-center items-center w-full">
        <div className="p-6 bg-white shadow-lg rounded-2xl w-80">
          {typeof country === "undefined" ? (
            "Chargement..."
          ) : (
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="flex items-start md:items-center flex-col md:flex-row">
                  <h1 className="text-3xl">{country.emoji}</h1>
                </div>
                <p className="text-2xl">Name : {country.name} ({country.code}) </p>
            </div>
          )}
        </div>
      </div>
  );
}