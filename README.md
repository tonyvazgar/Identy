# Identy.io

Project structure
<ul>
    <li>packages
        <ul>
            <li>server --> This folder contains the backend</li>
            <li>web --> This folder contains the frontend</li>
        </ul>
    </li>
</ul>

## Instructions

<ol>
<li>Tener una página HTML con un Botón que marque “Start”</li>
<li>Cuando se presione el botón, invoca a una url de un servicio hosteado en un servidor. (Puedes levantarlo con Docker en tu PC o con Kubernetes en alguna solución cloud)</li>
<li>Esta url abre la cámara del dispositivo móvil e inicia la grabación de un video durante 5 segundos.</li>
<li>Finalizado este tiempo, la cámara se cierra y se muestran en pantalla 5 fotos, correspondientes al frame del segundo 1, del segundo 2, … del segundo 5.</li>
</ol>

## Los entregables serían:

<ol>
<li>git con el código de front/back.</li>
<li>url donde podamos probar el aplicativo el día que la presentes.</li>
<li>Dockerfile / yamls de Kubernetes usado para desplegar el servicio back.</li>
</ol>
