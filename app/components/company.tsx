import { sql } from "@vercel/postgres";

export default async function Company() {

    const { rows } = await sql`SELECT * from company`;
    console.log(rows)
    return (
        <main className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-3 mt-4 text-white text-center">
                <h2 id="cars">
                    Empresas <span>empresas</span>
                </h2>
            </div>
            {
                rows.map((company) => {
                    return (
                        <div key={company.id} className="bg-[#4d4d4d] rounded-md pb-2">
                            <a href="/company.html">
                                <div className="text-white text-center">
                                    <h3>{company.name}</h3>
                                    <p>{company.number}</p>
                                </div>
                            </a>
                        </div>
                    )
                })
            }
        </main>
  )
}