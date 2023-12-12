import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sql } from "@vercel/postgres";
import { useSearchParams } from "next/navigation";

export const revalidate =0

export default function NewCompanys({
    searchParams,
  }: {
    searchParams?: {
      url?: string;  
    };
  }){

    const urlImage = searchParams?.url || '';

    async function saveCompanys(formData: FormData){
        "use server"
        const name = formData.get("name") as string;
        const number = formData.get("number") as string;
        await sql`INSERT INTO company (name, number) VALUES(${name}, ${number})`
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className=" text-center text-4xl">Cadastrar novas empresas</h1>
            <form>
                <Input type="text" name="name" placeholder="Digite o nome da empresa"/><br/>
                <Input type="text" name="number" placeholder="Digite o numero da empresa"/> <br/>
                <Button formAction={saveCompanys} className="text-white">Salvar</Button>
            </form>
        </div>

    )
}