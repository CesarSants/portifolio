import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
      voluptatem numquam pariatur ratione, rem esse doloribus mollitia inventore
      quia consectetur aliquam ab, cum perspiciatis non soluta ipsum rerum, a
      sequi.
    </Paragrafo>
    <GithubSecao>
      <img
        src="https://github-readme-stats.vercel.app/api?username=cesarsants&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt="1"
      />
      <img
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=cesarsants&layout=compact&langs_count=7&theme=dracula"
        alt="1"
      />
    </GithubSecao>
  </section>
)

export default Sobre
