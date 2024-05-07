import { ContainerLevel3 } from "@/ui/containers/ContainerLevel3";
import { Button } from "@mui/base";
import { Typography } from "@mui/joy";

export default function ChamadoItem(){
    return(
        <ContainerLevel3 className="flex flex-col">
            <Typography level="title-lg">Cadastro de Tag</Typography>
            <Typography level="body-md">Responsável: Fulado</Typography>
            <Typography level="body-md">Apartamento: Fulado</Typography>
            <Typography level="body-md">Tipo de TAG requisitado: Fulado</Typography>
            <Typography level="body-md">Motivo: Fulado</Typography>
            {/* <Button>Gerar Nova TAG</Button> */}
        </ContainerLevel3>
    )
}