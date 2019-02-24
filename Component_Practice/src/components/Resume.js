import React from 'react'


const Resume = () => {
  return(
   <div>
      <aside id="resume">
      <a href="#">
      <i class="far fa-arrow-alt-circle-up"></i>
    </a>
              <h1>Resume</h1>
     
      <header>
          <h2>Guilherme Milanez</h2>
          <address>
          <a href="tel:9543832377">(954) 383-2377</a><br></br>
          <a href="mailto:glmilanez@gmail.com">glmilanez@gmail.com</a><br></br>
          <a href="https://github.com/GuiMilanez" rel="nofollow">https://github.com/GuiMilanez</a><br></br>
          17300 SW 48th street <br></br>
          Southwest Ranches, Florida <br></br>
          USA
        </address>
      </header>
      <hr></hr>
      <ol>
        <li>
          <h3>Technical Skills</h3>
          <ul>
            <li>Languages: HTML, CSS, Javascript</li>
            <li>Languages: React, Ruby</li>
            <li>Languages: HTML, CSS, Javascript</li>
          </ul>
          <p>A lot of ReactJs. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id animi quidem obcaecati quisquam ullam. Quos aperiam ipsum cupiditate hic cum quaerat aut qui sapiente repudiandae, sed accusantium perspiciatis, molestias.</p>
        </li>
        <li>
          <h3>Experience</h3>
          <ul>
            <li>
              <h4>The One Place - <small>2000-2010</small></h4>
              <ul>
                <li>I did this</li>
                <li>I did that</li>
              </ul>
            </li>
            <li>
              <h4>The Other Place - <small>2000-2010</small></h4>
              <ul>
                <li>I did this</li>
                <li>I did that</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
      </aside>
      </div>
   
  )
}

export default Resume