<template>
  <div>
    
    <div v-if="!isMobile" class="light-effect" 
         :style="{ top: mouseY + 'px', left: mouseX + 'px', width: lightSize + 'px', height: lightSize + 'px' }">
      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      speed: 0.1,
      delay: 50,
      lightSize: 30, // Dimensione predefinita del cerchio di luce
      isMobile: false // Aggiunto stato per verificare se il dispositivo è mobile
    };
  },
  methods: {
    updateMousePosition(event) {
      setTimeout(() => {
        this.mouseX += (event.clientX - this.mouseX) * this.speed;
        this.mouseY += (event.clientY - this.mouseY) * this.speed;
      }, this.delay);
    },
    expandLight() {
      this.lightSize = 100; // Dimensione aumentata del cerchio di luce durante l'hover
    },
    shrinkLight() {
      this.lightSize = 30; // Ripristina la dimensione predefinita del cerchio di luce quando l'hover termina
    },
    disappearLight(){
      this.lightSize = 0;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768; // Imposta isMobile su true se la larghezza dello schermo è inferiore o uguale a 768px
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.updateMousePosition);
    window.addEventListener('resize', this.checkMobile); // Aggiunto listener per verificare le dimensioni della finestra quando la pagina viene ridimensionata
    this.checkMobile(); // Esegui la verifica mobile all'avvio
  },
  beforeDestroy() {
    document.removeEventListener('mousemove', this.updateMousePosition);
    window.removeEventListener('resize', this.checkMobile); // Rimuovi il listener quando il componente viene distrutto
  },
};
</script>

<style scoped>
.light-effect {
  position: fixed;
  background-color: #f2216c;
  border-radius: 50%;
  pointer-events: none;
  transform: translate(-50%, -50%);
  mix-blend-mode: screen;
  z-index: 9999;
  transition: width 0.3s, height 0.3s; /* Aggiungi una transizione per un effetto di espansione fluido */
}

/* Nascondi il cursore sui dispositivi mobili */
@media only screen and (max-width: 768px) {
  .light-effect {
    display: none;
  }
}
</style>
