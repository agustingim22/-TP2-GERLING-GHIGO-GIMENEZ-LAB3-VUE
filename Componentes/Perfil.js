app.component('Perfil', {
    template:
    /*html*/
    `<div class="info-principal">
        <div class="div-1-perfil">
            <img id="foto-perfil" v-bind:src="imagen" alt="foto de perfil">
        </div>
        <div class="div-2-perfil">
            <h1 id="nombre">{{ nombrePerfil }} </h1>
            <strong><p>Email: {{email }}</p></strong>
            <strong><p>Fecha de nacimiento: {{fechaNacimiento }}</p></strong>
            <strong><p>Teléfono: {{ telefono }} </p></strong>
            <strong><p>Ciudad: {{ ciudad }}</p></strong>
            <p>Trabajando en Lawn N</p> 
        </div>
    <div class="div-3-perfil">
        <button id="btn" v-on:click="seguirDejarDeSeguir">{{ textoBotonSeguir }}</button>
        </div>
    </div>`,
    
    data(){
        return {
            textoBotonSeguir: 'Seguir',
            nombrePerfil: 'Jane Doe',
            email: 'jane_done@email.com', 
            fechaNacimiento: '01/05/1996', 
            telefono: '918-936-9585',
            ciudad: 'Tokyo, Japón', 
            imagen: '99qgQJy.jpeg',
        }
    },
    methods:{
        seguirDejarDeSeguir(){
        if(this.textoBotonSeguir === 'Seguir'){
            this.textoBotonSeguir = 'Dejar de Seguir'
            return
        }else{
            this.textoBotonSeguir = 'Seguir'
        }
        },
    
    }
})