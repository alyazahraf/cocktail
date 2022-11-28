import Menu1 from "../assets/belmont.jpg";
import Menu2 from "../assets/wiseman.jpg";
import Menu3 from "../assets/pensacola.jpg";
import "./MenuStyles.css";
import DataMenu from "./DataMenu";
import goToDetail from "../routes/Favorite";
const Menu = () => {
    return (
        <div className="menu">
            <h1>Best Cocktail in The World</h1>

            <DataMenu
                className="first-menu"
                heading="Singapore Sling, Singapura"
                text="Salah satu signature drink dari The Lion City - Singapore Sling! Minuman ini merupakan campuran dari gin, contreau, jus nanas, soda, daun mint, dan jeruk nipis. Singapore Sling merupakan minuman yang memiliki karakter manis dan menyegarkan, di tambah dengan aroma buah yang cukup kuat. Minuman ini juga merupakan minuman berjenis unisex, artinya minuman ini biasa di nikmati oleh berbagai gender. Kamu bisa dengan mudah menemukan minuman ini di bar bar yang ada di Singapore!"
                img1={Menu1} 
                id="15395" 
            />

            <DataMenu
                className="first-menu-reverse"
                heading="Pina Colada, Puerto Rico"
                text="Minuman ini berbahan dasar rum manis dengan susu kelapa, jus nanas gula, dan es batu yang membuat minuman ini manis dan ringan. Biasanya, Pina Clada diberi hiasan berupa irisan nanas atau pun ceri pada bibir gelas. Minuman berwarna kuning susu ini ternyata telah menjadi minuman beralkohol resmi Puerto Rico sejak tahun 1978 loh!"
                img1={Menu2}
                id="14588"
            />

            <DataMenu
                className="first-menu"
                heading="Mojito, Kuba"
                text="Minuman ini merupakan salah satu cocktail yang terkenal dan berasal dari Kuba. Mixture of white rum, jeruk nipis, daun mint, air soda, dan es batu, menjadikan minuman ini digemari oleh berbagai kalangan. Rasa yang segar dan aroma jeruk nipis yang di berikan oleh minuman ini sangat cocok untuk kamu yang sudah menikmati suasana pantai."
                img1={Menu3}
                id="15200"
            />
        </div>
    );
};

export default Menu;