"use client";
import { signIn, signOut,useSession } from 'next-auth/react'
import styles from './page.module.css'
import Link from 'next/link'
export default function Home() {
  const { data: session } = useSession();
  return (
    <main className={styles.main}>
     <div>
      <span style={{marginRight:'10px', color: 'green'}}>User:</span>
        {
        session ? JSON.stringify(session) : 'undefine'
        } 
     </div>
     <div className={styles.action}>
     {session ? <div onClick={()=>{signOut()}}>sign out</div> : <div onClick={()=>{signIn()}}> sign in</div>}
     </div>
     <Link href="/me">
        <div className={styles.action}>
             me
        </div>
      </Link>
    </main>
  )
}
