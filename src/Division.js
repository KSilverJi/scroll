import React from "react";
import "./division.css";

function Division() {

    // Scroll Animation
    const saTriggerMargin = 300;
    const saElementList = document.querySelectorAll('.sa');

    const saFunc = function() {
      for (const element of saElementList) {
        if (!element.classList.contains('show')) {
          if (window.innerHeight > element.getBoundingClientRect().top + saTriggerMargin) {
            element.classList.add('show');
          }
        }
      }
    }

    window.addEventListener('load', saFunc);
    window.addEventListener('scroll', saFunc);

    return(
        <div>
            <div className="box">
                <div class="sa sa-up">디비전 1</div>
                <div class="sa sa-up">디비전 2</div>
                <div class="sa sa-up">디비전 3</div>
                <div class="sa sa-up">디비전 4</div>
            </div>
            <div className="box">
                <div class="sa sa-up">디비전 5</div>
                <div class="sa sa-down">디비전 6</div>
                <div class="sa sa-right">디비전 7</div>
                <div class="sa sa-left">디비전 8</div>
            </div>
            <div className="box">
                <div class="sa sa-rotateL">디비전 9</div>
                <div class="sa sa-rotateR">디비전 10</div>
                <div class="sa sa-scaleUp">디비전 11</div>
                <div class="sa sa-scaleDown">디비전 12</div>
            </div>
        </div>
    );
}

export default Division;