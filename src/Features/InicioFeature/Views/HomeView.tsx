export const HOME_VIEW = () => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="w-full h-full flex justify-between gap-2 flex-col">
                <div className="w-full h-full flex flex-col items-center justify-center p-4 rounded-lg shadow-md">
                    <p className="text-lg font-semibold mb-2">¡Ahorra tiempo y dinero utilizando nuestro facturador en línea!</p>
                    <ul className="list-disc list-inside text-left">
                        <li>Genera facturas en segundos</li>
                        <li>Accede a tus facturas desde cualquier lugar</li>
                        <li>Seguridad y privacidad garantizadas</li>
                        <li>Soporte técnico 24/7</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}