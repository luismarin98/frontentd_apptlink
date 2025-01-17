import { useContext, useEffect } from "react"
import DashboardContext, { IDashboardContext } from "../provider"

export const HOMEDASH_VIEW = () => {

    const { getAll_productos } = useContext(DashboardContext) as IDashboardContext;

    useEffect(() => { getAll_productos() }, [])

    return (
        <div className="w-full h-full flex items-center justify-center">
            <p>Bienvenido al facturador en linea</p>
        </div>
    )
}