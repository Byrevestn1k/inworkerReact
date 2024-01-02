
import { useEffect } from "react";
import "./comments.css";

const Comments = () => { 

    function comments() {
        let comments__tabsitem = document.querySelectorAll(`.comments__tabsitem`);
        let comments__comments = document.querySelectorAll(`.comments__comments`);
    
        for (let i = 0; i < comments__tabsitem.length; i++) {
            comments__tabsitem[i].addEventListener(`click`, () => {
                for (let c = 0; c < comments__tabsitem.length; c++) {
                    comments__tabsitem[c].classList.remove(`active-tab`);
                    comments__comments[c].classList.remove(`active`);
                }
                comments__tabsitem[i].classList.add(`active-tab`)
                comments__comments[i].classList.add(`active`)
            })
    
        }
    }
    useEffect(()=>{
        comments()
    })
    
    return (
        <article>
            <div class="comments">
                <h3 class="comments__title">Your Coments</h3>
                <div class="comments__tabs">
                    <div class="comments__tabsitem active-tab">site</div>
                    <div class="comments__tabsitem ">VK</div>
                    <div class="comments__tabsitem ">FS</div>
                </div>
                <div class="comments__field">
                    <div class="comments__comments active">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat asperiores quo quae
                            numquam. Minus eos dolore repudiandae eveniet sunt itaque aspernatur nam porro
                            facere
                            illo reiciendis quam maxime, quasi laudantium?</p>
                    </div>
                    <div class="comments__comments">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat asperiores quo quae
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat asperiores quo quae
                            numquam. Minus eos dolore repudiandae eveniet sunt itaque aspernatur nam porro
                            facere
                            illo reiciendis quam maxime, quasi laudantium?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat asperiores quo quae
                            numquam. Minus eos dolore repudiandae eveniet sunt itaque aspernatur nam porro
                            facere
                            illo reiciendis quam maxime, quasi laudantium?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat asperiores quo quae
                            numquam. Minus eos dolore repudiandae eveniet sunt itaque aspernatur nam porro
                            facere
                            illo reiciendis quam maxime, quasi laudantium?</p>
                    </div>
                    <div class="comments__comments">
                        <p>
                            numquam. Minus eos dolore repudiandae eveniet sunt itaque aspernatur nam porro
                            facere
                            illo reiciendis quam maxime, quasi laudantium?</p>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default Comments;