import prismadb from "@/lib/prismadb";

const BillboardPage = async ({
    params
}: {
    params: { billboardId: string }
}) => {
    const billboard =  await prismadb.billboard.findUnique({
        where:{
            id: params.billboardId
        }
    });
    // console.log(params.billboardId);

    return ( 
        <div>
           Existing billboard: {billboard?.label}
        </div>
     );
}
 
export default BillboardPage;