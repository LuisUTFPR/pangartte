import { Button } from "@/components/ui/button";
import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const revalidate =0

export default async function ListCompanys() {
    async function deleteCompanys(formData: FormData){
        "use server"
        const id = formData.get("id") as string;
        await sql`DELETE from company where id=${id}`
        revalidatePath("/admin/company")
    }
    const { rows } = await sql`SELECT * from company`;
    return (
        <div>
            <h1 className="text-center ">Lista de empresas</h1>

            <table>
                <thead>
                    <tr> <td>empresa</td> <td>telefone</td></tr>
                </thead>
                <tbody>
                    {
                        rows.map((company) => {
                            return (
                                <tr key={company.id}><td>{company.name}</td> <td>{company.number}</td> 
                                <td>
                                    <form >
                                     <input type="text" hidden name="id" value={company.id}/>   
                                    <Button variant= "destructive"
                                     formAction={deleteCompanys}>Excluir</Button>
                                    </form>

                                </td> 
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>


        </div>
    )
}