import styles from './styles.module.scss'
import Link from 'next/link'

export function Header(){
    return(
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/dashboard">
                    <img src="/logo.svg" width={190} height={60}/>
                </Link>            
                <nav>                    
                    <a href="/category">Categoria</a>                                        
                    <a href="/product">Cardápio</a>                    
                </nav>
            </div>            
        </header>
    )
}