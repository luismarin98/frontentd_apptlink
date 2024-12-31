const api = process.env.REACT_APP_RUTA_API;
const port_api = process.env.REACT_APP_PORT_API;

export const api_consum = api!.replace('{port_api}', port_api!);