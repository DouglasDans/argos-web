import { ContainerLevel3 } from "@/ui/containers/ContainerLevel3";
import { Typography, Button} from "@mui/joy";

export default function ChamadoItem(){
    return(
        <ContainerLevel3 className="flex flex-col gap-2 flex-wrap w-80">
            <div>
                <Typography level="title-lg">Cadastro de Tag</Typography>
                <Typography level="body-md">Responsável: Fulado</Typography>
                <Typography level="body-md">Apartamento: Fulado</Typography>
                <Typography level="body-md">Tipo de TAG requisitado: Fulado</Typography>
                <Typography level="body-md">Motivo: Fulado</Typography>
            </div>
            <Button>Cadastrar novo dependente</Button>
        </ContainerLevel3>
    )
}