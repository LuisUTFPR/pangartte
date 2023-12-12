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
        const brand = formData.get("brand") as string;
        const model = formData.get("model") as string;
        await sql`INSERT INTO company (name, number) VALUES(${brand}, ${model})`
        console.log("Acessou a função")
    }
    return (
        <div>
            <h1 className=" text-center text-4xl">Cadastrar novas empresas</h1>
            <form>
                <Input type="text" name="brand" placeholder="Digite o nome da empresa"/><br/>
                <Input type="text" name="model" placeholder="Digite o numero da empresa"/> <br/>
                <Button formAction={saveCompanys} className="text-white">Salvar</Button>
            </form>
        </div>

    )
}