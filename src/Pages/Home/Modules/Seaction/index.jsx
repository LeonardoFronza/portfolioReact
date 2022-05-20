
import './style.css';


const Section = () => {
    return (
        <>
        <section className="first-page">
            
            <h1 className="first-txt">
                <span>Hi,</span><br />
                <span>I'm <span className="color-leonardo">Leonardo,</span></span><br />
                <span>Junior developer.</span>
            </h1>

            <section className="first-page-section2">
                <a href="https://br.linkedin.com/in/leonardo-fronza"><ion-icon name="logo-linkedin" class="first-icon"></ion-icon></a>
                <a href=""><ion-icon name="mail" class="first-icon"></ion-icon></a>
                <a href="https://github.com/LeonardoFronza"><ion-icon name="logo-github" class="first-icon"></ion-icon></a>
            </section>
        </section>

        <section className="second-page" id="my">
            
            <div className="second-box">
                <h1 className="second-title">Myself</h1>
                <p className="second-txt"> My name is leonardo fronza and I live in Brazil!<br /><br /> I am currently studying computer science.  Started a career as a junior developer. I always like to be connected with current technologies, believing that with them they can always provide us with a better life.</p>

                <button className="second-btn"><ion-icon name="document"></ion-icon>Download curriculum</button>
            </div>
            
            <div className="second-box-img second-img" ></div>
        </section>
        
        <section className="third-page">

                <div className="third-gallery">
                    <h1 className="third-h1">Computer Science</h1>
                    <p className="third-p">I started my college in 2022. I've always had an appreciation for programming and Hardware that's why I chose this course..</p>
                </div>
                <div className="third-gallery">
                    <h1 className="third-h1">GVdasa</h1>
                    <p className="third-p">My first job. It was the one that opened the doors to start my career as a developer!</p>
                </div>
                <div className="third-gallery">
                    <h1 className="third-h1">Goals</h1>
                    <p className="third-p">My main goal is to become a senior developer, master the areas of devOps and be able to set up my own software development company.</p>
                </div>
        </section>

        <section class="fourth-page" id="skills">
            
            <div class="fourth-box1">
                <h1>SKILLS</h1>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, quod fuga maxime asperiores dignissimos laudantium est, ad, non laborum repellendus deleniti fugit ipsum voluptate? Obcaecati accusantium labore sapiente recusandae illo?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem, eum, magni dolorum sint illum beatae distinctio totam numquam sunt in, amet tenetur tempore facilis! Dolorum distinctio tempora numquam exercitationem unde.
                </p>
            </div>
           
            <div class="fourth-box2">
                
                <h1 class="fourth-h1">C#</h1>
                <div class="line-bar"> 
                    <div class="line-bar-color line-background1"></div>
                </div>

                <h1 class="fourth-h1">JavaScript</h1>
                <div class="line-bar"> 
                    <div class="line-bar-color line-background2" ></div>
                </div>

                <h1 class="fourth-h1">SQL</h1>
                <div class="line-bar"> 
                    <div class="line-bar-color line-background3" ></div>
                </div>
            </div>
        </section>

        <section class="fifth" id="projects">
            
            <div class="fifth-box1">

                

                <form class="formulario" method="post"> 
                    <h1>Contact me</h1>
                    
                    <div class="field">
                        <input type="text" id="nome" name="nome" placeholder="Digite seu nome*" required/>
                    </div>

                    <div class="field">
                        <input type="email" id="email" name="email" placeholder="Digite seu E-Mail*" required/>
                    </div>        

                    <div class="field">
                        <input type="text" id="assunto" name="assundo" placeholder="Assunto*" required/>
                    </div>        
                  
                    <div class="field">
                        <textarea name="mensagem" id="mensagem" placeholder="Mensagem*" required></textarea>
                    </div>
            
                    <input type="submit" name="acao" value="Send message!"/>
                </form>

            </div>
            

            <div class="fifth-box2">
                <h1 class="fifth-box2-title">Want to know more? </h1>
                <p class="fifth-box2-txt">See more in my git!</p>
                <a href="" ><ion-icon class="fifth-box2-icon" name="logo-github"></ion-icon></a>
            </div>
        </section>
    </>
    )
}

export default Section;