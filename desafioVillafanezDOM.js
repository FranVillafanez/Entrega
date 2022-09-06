// Interacción con el DOM
const empleado = [{ nombre: "Fran", apellido: "Villafáñez", cargo: "Redactor" },
                  {  nombre: "Juan", apellido: "Perez", cargo: "Administrativo" },
                  {  nombre: "Pedro", apellido: "González", cargo: "Columnista"},
                  {  nombre: "Jose", apellido: "Ruíz", cargo: "Redactor"}];

                  for (const empleados of empleado) {
                    let contenedor = document.createElement("div");
                    contenedor.innerHTML = `<h2> Cargo: ${empleados.cargo}</h2>
                                            <p>  Nombre: ${empleados.nombre}</p>
                                            <p> Apellido: ${empleados.apellido}</p>`;
                                            document.body.appendChild(contenedor);
                                        }