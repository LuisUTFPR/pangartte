import Company from "./components/company";

export const revalidate=0
export default function Home() {
  return (
    <div className="bg-[#3d3d3d]">
      <div className="max-w-[1440px] m-auto ">
    <Company />

    </div>
      </div>
  )
}