app.component('Publicacion', {
    props: {
        usuario:{
            
        }
    },
    template:
    /*html*/
    `
    <div class="conteiner-publi-sobremi">
        <div class="publi">
            <p>Publicado {{ tiempoTranscurrido }}</p>
            <img v-bind:src="imagen" alt="Foto de Publicaciones" id="foto-publicacion">
            <div class="me-gusta">
            <br><button id="boton-megusta" v-on:click="meGustaModificar">{{ textoBotonMeGusta }}</button> <span id="span-megustafijo">  Me gustas</span><strong><span id="span-megusta">{{ cantMeGustas }}</span></strong><br>
            </div>
            <h1>Comentarios</h1>
            <ul>
                <li><p><strong>Juan Perez</strong>¡Wow, esa foto de Tokio es impresionante! 🌇✨</p></li>
                <li><p><strong>Kathleen J Rennie</strong>¡Esta foto de Tokio es simplemente espectacular! Me trae tantos recuerdos.</p></li>
                <li v-for="comentario in comentarios"><p><strong> {{ comentario.nombre }}</strong>  {{ comentario.coment }} <button  v-if= "comentario.nombre === usuario" v-else="!botonEliminar " id="boton-eliminar" v-on:click ="eliminarComentario">Eliminar</button></p></li>
            </ul>
            <p id="mensajeError">{{ mensajeError }}</p>
            <div id="nuevoComentario"></div><button  id="boton-eliminar" v-show="botonEliminar" v-on:click = "eliminarComentario">Eliminar</button><br><br> 
            <input type="text" id="dejar-comentario" v-model="comentario"  placeholder="  Deja tu comentario..."> <button id="boton-comentar" v-on:click = "comentarPublicacion">Comentar</button>
        </div>
        <div class="sobre-mi">
            <h1>Sobre mí</h1>
            <p>¡Hola a todos! Soy Jane, y actualmente vivo en la vibrante y emocionante ciudad de Tokio, Japón. Me encanta capturar la esencia de la vida urbana a través de mi lente. Explorando el contraste entre la arquitectura moderna y las tradiciones centenarias que conviven en esta metropolis unica. Desde rascacielos deslumbrantes y calles bullisiosas hasta templos serenos y jardines tranquilos, encuentro inspiracion en cada rincon de esta increible ciudad.</p>
        </div>
    </div>
    `,
    data(){
        return {
            cantMeGustas: 200,
            textoBotonMeGusta: 'Me gusta',
            imagen: 'imagen-publicacion.jpeg',
            tiempoTranscurrido: '1 semana', 
            comentario: '', 
            comentarios: [
                
            ],
            botonEliminar: false,
            mensajeError: ''
        }
    },
    methods:{
        meGustaModificar(){
            if(this.cantMeGustas === 200){
                this.cantMeGustas += 1
                this.textoBotonMeGusta = 'Quitar Me Gusta'
                return
            }
            this.cantMeGustas -= 1
            this.textoBotonMeGusta = 'Me Gusta'
        },
        agregarComentarioAlArreglo() {
            this.comentarios.push({
                nombre: this.usuario,
                coment: this.comentario
            })
        },
        comentarPublicacion(){
            if(this.usuario === ''){
                this.mensajeError = 'No puede comentar sin ingresar su usuario'
            }else if (this.comentario === ''){
                this.mensajeError = 'No puede dejar un comentario vacio'
            }
            else{
                this.agregarComentarioAlArreglo()
                this.mensajeError = ''
                botonEliminar = true
            }
        },
        eliminarComentarioAlArreglo(){
            this.comentarios.pop({
                nombre: this.usuario,
                coment: this.comentario
            })
        },
        eliminarComentario(){
                this.eliminarComentarioAlArreglo()
                botonEliminar = false  
        },
    },
})