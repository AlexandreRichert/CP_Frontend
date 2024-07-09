import { useAddCountryMutation } from "@/graphql/generated/schema";
import { Country } from "@/types";
import { useRouter } from "next/router";
import { FormEvent } from "react";

type CountryFormProps = {
  country: Country;
};

export default function CountryForm(
 ) {

    const [addcountry] = useAddCountryMutation();
const router = useRouter();
const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formJSON: any = Object.fromEntries(formData.entries());
    formJSON.price = parseFloat(formJSON.price);

    addcountry({ variables: { data: formJSON } })
      .then((res) => {
        router.push(`/ads/${res.data?.addCountry.id}`);
      })
      .catch(console.error);
  };


  return (
    <>
    <form onSubmit={handleSubmit} className=" flex justify-between h-[100px] bg-gray-200 py-4 px-4">
        <div className="flex flex-wrap gap-6 mb-3">
          <div className="form-control w-full">
            <label className="label" htmlFor="title">
              <span className="label-text">Name</span>
            </label>
            <input
              required
              type="text"
              name="name"
              id="name"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-6 mb-3">
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="location">
              <span className="label-text">Emoji</span>
            </label>
            <input
              type="text"
              name="emoji"
              id="emoji"
              required
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-6 mb-3">
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="price">
              <span className="label-text">Code</span>
            </label>
            <input
              required
              type="text"
              name="code"
              id="code"
              min={0}
              className="input input-bordered w-full max-w-xs"
            />
            </div>
          </div>
          

        {/* <div className="flex flex-wrap gap-6 mb-3 mt-6">
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="category">
              <span className="label-text">Catégorie</span>
            </label>
            <select
              className="select select-bordered"
              id="category"
              name="category"
              required
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div> */}
        <button className="btn btn-primary bg-[#f7146b] text-white mt-6 w-12 h-12 rounded-md">
          Add
        </button>
      </form>                                 
    </>
  );
}
