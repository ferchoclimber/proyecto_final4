// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <>
            <Head>
                <title>Death Dessert Skateboards</title>
                <meta name="description" content="Encuentra los mejores productos al mejor precio." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <Image src="/imagenes/death.jpg" alt="Logo" width={120} height={120} />
                        <a className={styles.luckiestGuy}>Death Dessert Skateboards</a>
                    </div>

                    <nav className={styles.nav}>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Productos</a>
                                <ul className={styles.submenu}>
                                    <li><a href="#">Categoría 1</a></li>
                                    <li><a href="#">Categoría 2</a></li>
                                    <li><a href="#">Categoría 3</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Nosotros</a></li>
                            <li><a href="#">Contacto</a></li>
                        </ul>
                    </nav>

                    <div className={styles.searchIcon}>
                        <input type="text" placeholder="Buscar..." />
                        <button>&#128269;</button>
                    </div>
                </div>
            </header>

            <main>
                <section className={styles.hero}>
                    <h2>Bienvenido a nuestra tienda</h2>
                    <p>Encuentra los mejores productos al mejor precio.</p>
                </section>

                <div className={styles.carousel}>
                    <div className={styles.carouselInner}>
                        <div className={styles.carouselItem}>
                            <Image src="/imagenes/placeholder1.jpg" alt="Imagen 1" layout="responsive" width={800} height={400} />
                        </div>
                        <div className={styles.carouselItem}>
                            <Image src="/imagenes/placeholder2.jpg" alt="Imagen 2" layout="responsive" width={800} height={400} />
                        </div>
                        <div className={styles.carouselItem}>
                            <Image src="/imagenes/placeholder3.jpg" alt="Imagen 3" layout="responsive" width={800} height={400} />
                        </div>
                    </div>
                    <a className={styles.carouselControlPrev} href="#">&lt;</a>
                    <a className={styles.carouselControlNext} href="#">&gt;</a>
                </div>

                <section className={styles.products}>
                    <h2>Productos Destacados</h2>
                    <div className={styles.productList}>
                        {/* Agrega aquí los productos */}
                    </div>
                </section>
            </main>

            <footer className={styles.footer}>
                <div className={styles.container2}>
                    <div className={styles.columnas}>
                        <div className={styles.columna}>
                            <h3>Enlaces</h3>
                            <ul>
                                <li><a href="#">Inicio</a></li>
                                <li><a href="#">Productos</a></li>
                                <li><a href="#">Nosotros</a></li>
                                <li><a href="#">Contacto</a></li>
                            </ul>
                        </div>
                        <div className={styles.columna}>
                            <h3>Redes Sociales</h3>
                            <div className={styles.redesSociales}>
                                <a href="#" target="_blank">&#xf09a;</a>
                                <a href="#" target="_blank">&#xf16d;</a>
                                <a href="#" target="_blank">&#xf082;</a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
