import CardWrapper from "@/ui/containers/CardWrapper";
import { History } from "@mui/icons-material";
import { Table, Typography } from "@mui/joy";

export default function Page({ params }) {
   return (
      <CardWrapper className="p-4 flex flex-col gap-4">

         <div className="flex gap-2">
            <History/>
            <div>
               <Typography level={'h3'}>Registro do histórico da Tag: {params.id}</Typography>
               <Typography level="body-md">Tipo de Tag: Permanente</Typography>
            </div>
         </div>

         <Table className={'pr-8 pl-8'}>
            <thead>
               <tr>
                  <th>TagID</th>
                  <th>Dependente</th>
                  <th>RG</th>
                  <th>Registro</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>1</td>
                  <td>João</td>
                  <td>123456789</td>
                  <td>2021-02-20</td>
               </tr>
               <tr>
                  <td>2</td>
                  <td>Maria</td>
                  <td>987654321</td>
                  <td>2023-06-22</td>
               </tr>   
            </tbody>
         </Table>
      </CardWrapper>
   )
}