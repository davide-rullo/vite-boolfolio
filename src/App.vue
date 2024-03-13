<script>

import axios from 'axios';
import ProjectCard from './components/ProjectCard.vue';
import { RouterView } from 'vue-router';
import CursorEffect from './components/CursorEffect.vue';


export default {
  name: 'App',
  mixins: [CursorEffect],
  data() {
    return {
      projects: [],
      proj: [
        {
          name: "Dropbox replica",
          description: "Replica di Dropbox, fatta con HTML e CSS",
          thumb: "/assets/thumbs/dropbox.png",
        },
        {
          name: "Discord replica",
          description: "Replica del sito di Discord, fatto con HTML e CSS",
          thumb: "/assets/thumbs/discord.png",
        },
        {
          name: "Boolando",
          description: "Progetto ispirato a Zalando",
          thumb: "/assets/thumbs/zalando.png",
        },
        {
          name: "Zoom replica",
          description: "Replica Web di una call su Zoom",
          thumb: "/assets/thumbs/zoom.png",
        },
        {
          name: "Web Agency",
          description: "Sito di prova per una Web Agency",
          thumb: "/assets/thumbs/webagency.png",
        },
        {
          name: "Spotify Web replica",
          description: "Replica della versione Web di Spotify",
          thumb: "/assets/thumbs/spotify.png",
        },
        {
          name: "Our Team",
          description: "Esercitazione su JS",
          thumb: "/assets/thumbs/team.png",
        },
        {
          name: "Social Posts",
          description: "Replica di un Social Network con funzionalità JS",
          thumb: "/assets/thumbs/social.png",
        },
        {
          name: "Whatsapp Web Replica",
          description: "Replica della versione Web di Whatsapp",
          thumb: "/assets/thumbs/whatsapp.png",
        },
        {
          name: "DC Comics Replica",
          description: "Replica del sito Web di DC Comics",
          thumb: "/assets/thumbs/dc.png",
        },
        {
          name: "Yu-Gi-Oh API",
          description: "Sito che utilizza le API di ygoprodeck.com",
          thumb: "/assets/thumbs/yugioh.png",
        },
        {
          name: "Netflix Replica",
          description: "Replica di Netflix che utilizza le API di themoviedb.org",
          thumb: "/assets/thumbs/netflix.png",
        },
        {
          name: "Avada Construction",
          description: "Simulazione di un sito per un'azienda di costruzioni",
          thumb: "/assets/thumbs/avada.png",
        },
        {
          name: "Cocktail Bar",
          description: "Simulazione del sito web di un Cocktail Bar, realizzato con VueJs e Laravel",
          thumb: "/assets/thumbs/cocktail.png",
        },
        {
          name: "Deliveboo",
          description: "Piattaforma Web di Food Delivery",
          thumb: "/assets/thumbs/deliveboo.png",
        },




      ]
    }
  },

  methods: {
    navigateToSection(sezione) {

      const section = document.getElementById(sezione);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },

  mounted() {

  },
  components: {
    ProjectCard,
    RouterView,
    CursorEffect
  },
}
</script>

<template>
      

  <header>

    <nav class="navbar navbar-expand-lg fixed-top" data-bs-theme="dark" @mouseover="$root.expandLight" @mouseout="$root.shrinkLight">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">DR Dev</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link " aria-current="page" to="/">Home</router-link>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/projects">Progetti</router-link>
            </li>



          </ul>

        </div>
      </div>
    </nav>


  </header>

  <main>
    <router-view></router-view>
  </main>

  <footer>
    <section id="footer" class="mt-3 pb-5">
      <div class="container">
        <div class="row row-cols-1 row-cols-sm-2">
          <div class="col d-flex justify-content-center align-items-center">
            <div class="qlinks text-white p-4">
              <h3>Contatti</h3>
              <div>

                <a class="link-footer" @mouseover="disappearLight" @mouseout="shrinkLight"  href="https://www.linkedin.com/in/davide-rullo-2a572a191/" target="_blank">
                  <div class="d-flex gap-3 pt-4">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                        class="bi bi-linkedin" viewBox="0 0 16 16">
                        <path
                          d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
                      </svg>

                      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      class="bi bi-geo-alt" viewBox="0 0 16 16">
                      <path
                        d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg> -->
                    </div>
                    <div>
                      Linkedin
                    </div>
                  </div>
                </a>

                <a class="link-footer" href="https://github.com/davide-rullo" target="_blank">
                  <div class="d-flex gap-3 pt-3">
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                        class="bi bi-github" viewBox="0 0 16 16">
                        <path
                          d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                      </svg>
                    </div>
                    <div>
                      Github
                    </div>
                  </div>
                </a>

                <div class="d-flex gap-3 pt-3">
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                      class="bi bi-envelope" viewBox="0 0 16 16">
                      <path
                        d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </div>
                  <div>
                    davide.rullo01@gmail.com
                  </div>
                </div>

              </div>

            </div>

          </div>
          <div class="col d-flex justify-content-center">
            <div class="qlinks text-white p-4">
              <h3>Quick Links</h3>
              <div class="d-flex gap-3 pt-4">
                <div>
                  <router-link class="nav-link effect link-footer" aria-current="page" to="/">
                    Home</router-link>

                </div>
              </div>


              <div class="d-flex gap-3 pt-4">
                <div>
                  <router-link class="nav-link effect link-footer" aria-current="page" to="/projects">
                    Progetti</router-link>
                </div>
              </div>


            </div>
          </div>
        </div>


      </div>
    </section>
  </footer>
</template>

<style scoped>
header {
  height: 6vh;
}

header,
main,
nav {
  background: linear-gradient(90deg, rgba(51, 28, 82, 1) 0%, rgba(0, 0, 0, 1) 100%);

}


footer {
  background-color: black;
  color: white;
  padding: 3rem 0 3rem;
  font-size: 1em;
}

.admin-icon {
  fill: white;
}

.qlinks {
  width: 300px;
}

.link-footer {
  transition: all .3s;
}

.link-footer:hover {
  color: #f2216c;
}
</style>
