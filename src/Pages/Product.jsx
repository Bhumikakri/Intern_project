import React from 'react';
import "./Product.css";
import m1 from "../assets/medi1.webp";
import m2 from "../assets/medi2.webp";
import m3 from "../assets/medi3.webp";
import m4 from "../assets/medi4.webp";
import m5 from "../assets/medi5.jpeg";
import m6 from "../assets/medi6.webp";
import m7 from "../assets/medi7.jpeg";
import m8 from "../assets/medi8.webp";
import m9 from "../assets/medi9.jpeg";
import m10 from "../assets/medi10.webp";
import m11 from "../assets/medi11.webp";
import mg1 from "../assets/gynaemedi1.jpeg";
import mg2 from "../assets/gynaemedi2.jpeg";
import mg3 from "../assets/gynaemedi3.webp";
import mg4 from "../assets/gynaemedi4.jpeg";

const Product = () => {
  return (
    <div className='body h-fit min-h-screen gap-4 relative top-28 mb-28 flex flex-wrap items-center justify-around'>
      <article className="card">
    <img
      className="card__background"
      src={m1}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className='card__title'>Evaflam-SP (Aceclofenac Paracetamol & Serratiopeptidase(100:325:15)mg)
           </h2>
           <p className='card__description'>
             Evaflam-SP is a powerful combination medication , combines the following active ingredients:
             Aceclofenac:A non-steroidal anti-inflammatory drug (NSAID) that helps reduce pain and inflammation.
             Paracetamol: An analgesic and antipyretic that alleviates pain and reduces fever....
           </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={m2}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">PANTOLUX-D CAP (Pantoprazole Gastro-Resistant & Domperidone Prolonged Release (IP) (40:30) Mg)
      </h2>
      <p className="card__description">
        Pantolux-D Cap combines two active ingredients:
        Pantoprazole (40 mg): A proton pump inhibitor that reduces the production of stomach acid.
        Domperidone (30 mg): A prokinetic agent that enhances gastrointestinal motility, helping to move food and acid through the stomach more efficiently......
        </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={m3}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">Pantolux-20 Tab
        </h2>
        <p className="card__description">
        Active Ingredient: Pantoprazole (20 mg)Indication: 
        Pantolux-20 is formulated to treat conditions such as gastroesophageal reflux disease (GERD), peptic ulcers, and other conditions involving excessive stomach acid.
        Benefits: Provides effective relief from acid-related symptoms, promotes healing of the esophagus....
        </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={m4}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">Evarut Tab (48:90:100 mg)
      </h2>
      <br/>
      <p className="card__description">
      Active Ingredients: Trypsin, Bromelain, and Rutoside Trihydrate
      Indication: Evarut Tab is designed to reduce inflammation and edema, providing support for conditions that involve tissue injury and inflammation.
      Benefits: Combines proteolytic enzymes with an antioxidant to enhance anti-inflammatory effects, reduce swelling.....
      </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={m5}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">Evatrip Tab(48:90:100:50 mg)
           </h2>
           <p className="card__description">
           Active Ingredients: Trypsin, Bromelain, Rutoside Trihydrate, and Diclofenac Sodium
           Indication: Evatrip Tab is intended for managing pain and inflammation associated with musculoskeletal disorders, injuries, and post-surgical recovery.
           Benefits: Offers a potent combination of enzymes and anti-inflammatory agents to effectively reduce pain.....
           </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={m6}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">Clavuxe-LB 625 Tab
      </h2>
      <p className="card__description">
      Active Ingredients: Amoxicillin, Potassium Clavulanate, and Lactic Acid Bacillus
      Indication: Clavuxe-LB 625 is an antibiotic combination used to treat a wide range of bacterial infections.
      Benefits: The addition of Potassium Clavulanate helps overcome bacterial resistance to amoxicillin....
      </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={m7}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">Evadef-6 Tab (6 mg)
        </h2>
        <p className="card__description">
        Active Ingredient: Deflazacort (6 mg)
        Indication: Evadef-6 is a corticosteroid used to treat a variety of conditions including inflammation, allergies, and autoimmune disorders.
        Benefits: Provides effective anti-inflammatory and immunosuppressive properties, helping to manage chronic conditions and improve patient quality of life.
        </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={m8}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">Evachol D3 Cap (60000 IU)
      </h2>
        <p className="card__description">
          Active Ingredient: Cholecalciferol (60000 IU)
          Indication: Evachol D3 is a high-dose vitamin D3 supplement used to treat and prevent vitamin D deficiency.
          Benefits: Supports bone health, enhances calcium absorption, and strengthens the immune system, ensuring overall well-being.
        </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={m9}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">Evapro (Sugar-free)
        </h2>
        <p className="card__description">
          Active Ingredients: Protein Powder with DHA (Sugar-free)
          Flavors: Chocolate and Vanilla
          Indication: Evapro is a nutritional supplement designed to provide high-quality protein and DHA, supporting overall health and development.
           Benefits: Helps in muscle growth and repair, supports brain health, and is suitable for those managing their sugar intake
        </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={m10}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">Evavita Syrup
        </h2>
        <p className="card__description">
          Active Ingredients: Multivitamins, Multiminerals, and Antioxidants
          Indication: Evavita Syrup is formulated to provide essential nutrients to support overall health and well-being.
          Benefits: Enhances energy levels, boosts the immune system, and supports the body's natural defenses against oxidative stress.
        </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={m11}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">Calcilux 500
      </h2>
      <p className="card__description">
      Calcium and Vitamin D3 Tablets<br/>
      <u>Description:</u><br/>
      Calcilux 500 is a dietary supplement formulated to provide essential nutrients that support bone health. Each tablet contains:
......
        </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <div className='items-center content-center justify-center text-slate-700 font-bold text-4xl  pb-10 h-1 w-screen border-4 border-stone-500 rounded-lg '>
    <center>
    <h1 >GYNAE PRODUCTS</h1>          
    </center>
  </div>    {/* this is the starting of the Gynae Products . */}
  <br/>
  <article className="card">
    <img
      className="card__background"
      src={mg1}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">Luxgest 200: Micronised Progesterone Soft Gelatin Capsules 200 mg
        </h2>
        <p className="card__description">
        Luxgest 200 offers a highly effective solution for progesterone supplementation. 
        These micronised progesterone soft gelatin capsules are designed for optimal absorption and bioavailability, 
        ensuring that patients receive the full therapeutic benefits of progesterone......
        </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={mg2}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">Luxfer-Xt: Ferrous Ascorbate, Folic Acid, and Zinc Tablets
        </h2>
        <p className="card__description">
        Luxfer-Xt is a comprehensive iron supplement formulated to address iron deficiency and support overall health. 
        Combining ferrous ascorbate, folic acid, and zinc, Luxfer-Xt provides essential nutrients required for red blood cell production, 
        immune function, and overall well-being......
        </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={mg3}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">MECOLUX-ADV: Methylfolate Calcium, Methylcobalamin & Pyridoxal-5-Phosphate Tablets
        </h2>
        <p className="card__description">
        MECOLUX-ADV is a specialized nutritional supplement formulated to support nerve health, enhance cognitive function, 
        and promote overall well-being. This advanced formulation combines methylfolate calcium, methylcobalamin, and pyridoxal-5-phosphate 
        to provide comprehensive support .....
        </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  <article className="card">
    <img
      className="card__background"
      src={mg4}
      alt="Photo of Cartagena's cathedral at the background and some colonial style houses"
      width="1920"
      height="2193"
    />
    <div className="card__content | flow">
      <div className="card__content--container | flow">
      <h2 className="card__title">ARGIBREATH SACHETS: L-Arginine, Proanthocyanidin, Folic Acid & DHA Sachet
        </h2>
        <p className="card__description">
        ARGIBREATH SACHETS are a unique blend of L-Arginine,Proanthocyanidin,Folic Acid, 
        and DHA designed to support cardiovascular health, enhance reproductive health, 
        and promote overall well-being. This comprehensive formula provides essential nutrients required for various physiological functions ......
        </p>
      </div>
      <button className="card__button">Read more</button>
    </div>
  </article>
  </div>
  )
}

export default Product 
