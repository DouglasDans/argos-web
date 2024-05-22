import { ContainerLevel3 } from "@/ui/containers/ContainerLevel3";
import { Typography, Button} from "@mui/joy";

export default async function ChamadoItem({chamado}){

    

    return(
        <ContainerLevel3 className="flex flex-col gap-2 flex-wrap w-80 justify-between">
            <div>
                <Typography level="title-lg">Cadastro de {chamado.tipoChamado === "TAG" ? "Tag" : "Dependente"}</Typography>
                <Typography level="body-md">Responsável: {chamado.responsavel.nome}</Typography>
                <Typography level="body-md">Apartamento: {chamado.responsavel.apto}</Typography>
                <Typography level="body-md">Tipo de TAG requisitado: {chamado.isTagTemporatia ? "Temporaria" : "Permanente"}</Typography>
                {chamado.motivo && <Typography level="body-md">Motivo: {chamado.motivo}</Typography>}
            </div>

            <Button>Cadastrar novo dependente</Button>

        </ContainerLevel3>
    )
}