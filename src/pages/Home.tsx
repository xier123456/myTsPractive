
import Up from '../assets/UserImage/up.jpg'
import { VscGithub } from "react-icons/vsc";

import { Link } from "react-router-dom";
import '../index.css'

const Home= () => {
  return (
    <article className="h-screen ">
      <div className='hero min-h-screen home-hero_index'>
          <div className="hero-content flex-col lg:flex-row-reverse gap-22">
            <div className=" ">
            <img src={Up} className="max-w-sm rounded-lg shadow-2xl w-50 " />
            </div>
            <div>
              <h1 className="mt-2 text-5xl font-bold text-center">Raect banzai!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat
              </p>
              <div className="flex gap-10 justify-center">
                <Link to='/Notes'>
                <div className="mt-2 bg-blue-500 p-3 btn text-white border-white">查看笔记</div>
                </Link>
                
                <VscGithub  className="btn bg-black border-0 text-white  border-black p-0 p-2  mt-2" />
                </div>
              
            </div>
          </div>
        </div>
        
    </article>
  )
}

export default Home