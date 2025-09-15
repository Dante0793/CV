import './App.css'

function App() {

  return (
    <>
      <div className='container mt-5'>
        {/* <img src="..." className="col-md-6 float-md-end mb-3 ms-md-3" alt="..."></img> */}
        
        <div className='text-center mb-4'>
        <h1>Dante Gonzalo Soto Flores</h1>

        <p><strong>Estudiante de ingenieria en sistemas</strong></p>

        <p>Estudiante de ingenieria en Sistemas con experiencia en desarrollo web y
          administración de sistemas Linux. Competente en JavaScript, Angular, y configuración
          de entornos Ubuntu.</p>
        </div>

        <hr className='border-3 opacity-100'/>

        <div className='row'>
            <div className='col'>
              <p className='links'>
                <i class="bi bi-whatsapp icons"></i>
                <a href="https://wa.me/59178849070" className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>78849070</a>
              </p>
            </div>
            <div className='col'>
              <p className='links'>
                <i class="bi bi-envelope icons"></i>
                <a href="mailto:sotodante26@gmail.com" className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>sotodante26@gmail.com</a>
              </p>
            </div>
            <div className='col'>
              <p className='links'>
                <i class="bi bi-github icons"></i>
                <a href="https://www.github.com/dante0793" className='link-offset-2 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover'>Github</a>
              </p>
            </div>
        </div>

        <hr className='border-2 opacity-90'/>

        <div className='row'>
          <div className='col-4'>
            <h3>Formación</h3>
          </div>
          <div className='col-8'>
            <ul>
            <li><strong>2020 - PRESENTE INGENIERIA EN SISTEMAS</strong><br/>
            Universidad Privada Domingo Savio</li>
            <li><strong>2019 - UNIDAD EDUCATIVA PRIVADA GLORIA</strong><br/>
            Bachiller en humanidades</li>
            </ul>
          </div> 
        </div>

        <hr className='border-2 opacity-90'/>

        <div className='row'>
          <div className='col-4'>
            <h3>Idiomas</h3>
          </div>
          <div className='col-8'>
            <ul>
              <li>Español - Nativo</li>
            <li>Inglés - Intermedio</li>
          </ul>
        </div>
        </div>

        <hr className='border-2 opacity-90'/>

        <div className='row'>
          <div className='col-4'>
            <h3>Habilidades Técnicas</h3>
          </div>
          <div className='col-8'>
            <ul>
              <li>Sistemas Operativos: Linux, Windows</li>
              <li>Herramientas Linux: Apache, Bash, Docker</li>
              <li>Desarrollo: PHP, Angular, JavaScript, MySQL, PostgreSQL</li>
          </ul>
        </div>
        </div>

        <hr className='border-2 opacity-90'/>

        <div className='row'>
          <div className='col-4'>
            <h3>Proyectos</h3>
          </div>
          <div className='col-8'>
            <p>

              SISTEMA DE GESTIÓN DE INFRAESTRUCTURA VIAL (PROYECTO
              ACADÉMICO, 2024)
            </p>
            <ul>
              <li>
              Desarrollé módulos en PHP y modelé interacciones con diagramas UML en
              PlantUML.
              Configuré un servidor Apache en Ubuntu para pruebas locales.
              </li>
            </ul>
            <p>
              SISTEMA DE GESTIÓN DE SUPERMERCADO (MINIMARKET) PROYECTO
              ACADÉMICO, 2025
            </p>
            <ul>
            <li>
              Diseñé e implementé un sistema CRUD en PHP con programación orientada
              a objetos para gestionar empleados, clientes, y ventas, utilizando
              controladores como EmpleadoController y VentaController.
            </li>
            <li>
              Modelé una base de datos MySQL con tablas como Productos, Ventas, y
              Usuarios, implementando procedimientos almacenados (RegistrarVenta) para
              transacciones seguras.
            </li>
            <li>
              Creé un diagrama de clases UML en PlantUML para representar entidades y
              relaciones, optimizando el diseño del sistema.
            </li>
            <li>
              Configuré un entorno de desarrollo con Docker en Ubuntu con Apache,
              asegurando la correcta ejecución de la aplicación web.
            </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
