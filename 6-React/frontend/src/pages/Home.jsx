import funcionalImg from '@assets/home/funcional.jpg'
import zumba from '@assets/home/zumba.jpg'
import '@styles/Home.scss'

const Home = () => {
return(
    <div>
        <div className="card-home">
            <div>
            <img src="/home/taekwondo.jpg" alt="taekwondo" />
            <h2>Taekwondo</h2>
            </div>
            <div>
            <img src="/home/yoga.webp" alt="yoga" />
            <h2>Yoga</h2>
            </div><div>
            <img src={funcionalImg} alt="funcional" />
            <h2>Funcional</h2>
            </div>
            <div>
            <img src={zumba} alt="zumba" />
            <h2>Zumba</h2>
            </div>

        </div>
    </div>
)
}

export default Home;