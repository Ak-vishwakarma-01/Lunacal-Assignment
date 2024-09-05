import React, { useState } from 'react'
import './Top.css'
const Top = () => {
  const [activeButton,setActiveButton] = useState("1");
  const buttonHandeler = (value)=>{
    setActiveButton(value);
  }
  return (
    <div className='main-top'>
        <div className="top-button">
        <button onClick={()=>buttonHandeler("1")} className={activeButton==='1'?"active":""} >About me</button>
        <button onClick={()=>buttonHandeler("2")} className={activeButton==='2'?"active":""} >Experience</button>
        <button onClick={()=>buttonHandeler("3")} className={activeButton==='3'?"active":""} >Recomended</button>
        </div>
        <div className="top-content">
        {/* Render content based on the active button */}
        {activeButton === "1" && <p>Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. A ducimus nisi, alias reprehenderit repellendus reiciendis non incidunt fugit ut odio laborum facere. Ratione ad possimus, assumenda quo voluptas expedita optio earum reiciendis velit officia tempore, incidunt saepe reprehenderit animi. Ad non autem similique ex magnam. Soluta, optio. Aperiam, laborum earum? ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis, ducimus quis illum, enim odio id expedita corrupti nostrum consequatur quas tempora totam impedit maxime odit cupiditate incidunt perferendis fuga assumenda? Similique impedit consectetur error beatae aliquid animi. Sequi repellat maiores dolore itaque nam blanditiis, voluptas necessitatibus libero odio magnam!</p>}
        {activeButton === "2" && <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum maxime, dicta ratione aspernatur earum temporibus fugiat aut necessitatibus laboriosam eveniet. In rem ipsum voluptatum similique doloribus expedita nemo accusantium unde. Cumque molestias quo quod voluptate magnam, reiciendis vitae nostrum quaerat enim expedita ut nobis facere perspiciatis libero ipsa consectetur ratione voluptatum eligendi nam quis explicabo nulla asperiores fuga? Facilis nihil dicta perferendis voluptatem soluta a sed quidem autem eveniet perspiciatis sequi distinctio nesciunt assumenda quaerat eligendi laudantium itaque, inventore reprehenderit molestias odit corporis qui blanditiis unde. Dolorem ea architecto dolorum repellat tempore! Reiciendis, non. Tempore voluptatibus alias commodi quo nisi?</p>}
        {activeButton === "3" && <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero dicta maiores repudiandae. Minima nulla, quaerat est tenetur maxime, dolor fugiat veritatis fugit nobis eveniet veniam recusandae fuga enim, in adipisci qui? In corrupti officiis sed iusto earum! Corrupti corporis cumque earum odio unde, repudiandae rerum facilis similique? Maxime, harum repellendus eius quibusdam quod saepe aut quas sequi excepturi quia deleniti inventore asperiores rem suscipit optio impedit? Omnis ipsam aut libero quae soluta! Reiciendis aut quis excepturi doloremque beatae rerum cum, quia cumque fugit recusandae ad non obcaecati molestias debitis eveniet ab omnis? Voluptate minima unde veniam eos. Debitis, magnam Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, nostrum. quam!</p>}
      </div>
    </div>
  )
}

export default Top